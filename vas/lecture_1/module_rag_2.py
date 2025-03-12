# Import necessary libraries
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity


class EmailResponseRetriever:
    def __init__(self):
        self.encoder = SentenceTransformer("all-MiniLM-L6-v2")
        # Sample email responses - in production, this would come from a database
        self.examples = {
            "late_delivery": """
                ORIGINAL EMAIL:
                I haven't received my order yet and it's been 2 weeks. This is unacceptable.
                
                MY RESPONSE:
                I sincerely apologize for the delay in your order. I understand your frustration.
                I've checked with our shipping department and your package is currently in transit.
                I'll expedite this and send you the updated tracking information within the next hour.
                Please let me know if you need anything else.
            """,
            "refund_request": """
                ORIGINAL EMAIL:
                The product I received is damaged. I want my money back immediately.
                
                MY RESPONSE:
                I'm very sorry to hear about the damaged product. I completely understand your concern.
                I've initiated an immediate refund which will be processed within 2-3 business days.
                Would you like a return shipping label to send the damaged item back to us?
            """,
            "product_inquiry": """
                ORIGINAL EMAIL:
                Does this come in different sizes? And what colors are available?
                
                MY RESPONSE:
                Thank you for your interest! Yes, this product comes in S, M, L, and XL.
                We currently have it available in navy blue, forest green, and charcoal gray.
                I can provide detailed measurements for any specific size you're interested in.
            """,
            "technical_support": """
                ORIGINAL EMAIL:
                The software keeps crashing when I try to export my project.
                
                MY RESPONSE:
                I understand how frustrating technical issues can be. Let's resolve this together.
                First, please try clearing your cache and restarting the application.
                If that doesn't work, could you send me your error log? You can find it at Settings > Help > Export Log.
            """,
        }
        # Pre-compute embeddings for examples
        self.example_embeddings = {
            k: self.encoder.encode(v) for k, v in self.examples.items()
        }

    def get_relevant_example(self, query, top_k=2):
        query_embedding = self.encoder.encode(query)
        similarities = {
            k: cosine_similarity([query_embedding], [emb])[0][0]
            for k, emb in self.example_embeddings.items()
        }
        sorted_examples = sorted(similarities.items(), key=lambda x: x[1], reverse=True)

        relevant_examples = []
        for example_name, score in sorted_examples[:top_k]:
            if score > 0.3:  # Similarity threshold
                relevant_examples.append(self.examples[example_name])

        return (
            "\n\n".join(relevant_examples)
            if relevant_examples
            else "No relevant example found."
        )


if __name__ == "__main__":
    # Example usage
    retriever = EmailResponseRetriever()

    # Test queries with expected example matches
    test_queries = [
        "My package hasn't arrived yet",
        "I got a broken item in the mail",
        "What sizes do you have?",
        "The app keeps crashing",
    ]

    for query in test_queries:
        # Get similarity scores for all examples
        query_embedding = retriever.encoder.encode(query)
        similarities = {
            k: cosine_similarity([query_embedding], [emb])[0][0]
            for k, emb in retriever.example_embeddings.items()
        }

        # Get the most relevant example and its score
        best_match = max(similarities.items(), key=lambda x: x[1])
        example_name, score = best_match

        print(f"\nQuery: {query}")
        print("-" * 80)
        print(f"Best matching example: {example_name}")
        print(f"Similarity score: {score:.3f}")
        print(f"Example content:\n{retriever.examples[example_name]}")
        print("-" * 80)
