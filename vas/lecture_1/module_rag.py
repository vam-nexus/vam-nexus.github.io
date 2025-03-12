# Import necessary libraries
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity


class PolicyRetriever:
    def __init__(self):
        self.encoder = SentenceTransformer("all-MiniLM-L6-v2")
        # Sample medical policies - in production, this would come from a database
        self.policies = {
            "privacy": """
                Patient Privacy Policy:
                - All patient information is confidential and protected under HIPAA
                - Access to medical records requires patient consent
                - Data sharing with third parties strictly regulated
            """,
            "appointments": """
                Appointment Policy:
                - 24-hour notice required for cancellations
                - Telehealth options available for eligible consultations
                - Emergency cases prioritized based on severity
            """,
            "insurance": """
                Insurance Policy:
                - We accept major insurance providers
                - Pre-authorization required for specific procedures
                - Co-pay due at time of service
            """,
            "medication": """
                Medication Policy:
                - Prescription refills require 48-hour notice
                - Controlled substances have strict monitoring protocols
                - Generic alternatives offered when available
            """,
        }
        # Pre-compute embeddings for policies
        self.policy_embeddings = {
            k: self.encoder.encode(v) for k, v in self.policies.items()
        }

    def get_relevant_policy(self, query, top_k=2):
        query_embedding = self.encoder.encode(query)
        similarities = {
            k: cosine_similarity([query_embedding], [emb])[0][0]
            for k, emb in self.policy_embeddings.items()
        }
        sorted_policies = sorted(similarities.items(), key=lambda x: x[1], reverse=True)

        relevant_policies = []
        for policy_name, score in sorted_policies[:top_k]:
            if score > 0.3:  # Similarity threshold
                relevant_policies.append(self.policies[policy_name])

        return (
            "\n\n".join(relevant_policies)
            if relevant_policies
            else "No relevant policy found."
        )


if __name__ == "__main__":
    # Example usage
    retriever = PolicyRetriever()

    # Test queries with expected policy matches
    test_queries = [
        "I need to cancel my appointment tomorrow morning",
        "Do you share my medical information with other doctors?",
        "When do I need to pay my insurance copay?",
        "How can I get my prescription refilled?",
    ]

    for query in test_queries:
        # Get similarity scores for all policies
        query_embedding = retriever.encoder.encode(query)
        similarities = {
            k: cosine_similarity([query_embedding], [emb])[0][0]
            for k, emb in retriever.policy_embeddings.items()
        }

        # Get the most relevant policy and its score
        best_match = max(similarities.items(), key=lambda x: x[1])
        policy_name, score = best_match

        print(f"\nQuery: {query}")
        print(f"Best matching policy: {policy_name}")
        print(f"Similarity score: {score:.3f}")
        print(f"Policy content:\n{retriever.policies[policy_name]}")
        print("-" * 80)
