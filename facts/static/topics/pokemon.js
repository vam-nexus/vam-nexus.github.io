const quizData = {
    "info": {
        "title": "Pokémon Trivia",
        "description": "Learn and Test your knowledge about Pokémon species, history, and gameplay mechanics."
    },
    "cards": [
        {
            "type": "concept",
            "content": {
                "heading": "Pokémon Origins and Evolutions",
                "sentence1": "Pokémon was created by Satoshi Tajiri and first released by Nintendo in 1996 in Japan.",
                "sentence2": "The franchise began with Pokémon Red and Green for the Game Boy, expanding to international markets as Pokémon Red and Blue.",
                "sentence3": "Over the years, Pokémon has released multiple generations of games, each introducing new species and regions."
            }
        },
        {
            "type": "quiz",
            "question": "What are the names of the two main legendary Pokémon in the original games?",
            "choices": ["Pikachu and Eevee", "Mewtwo and Mew", "Zubat and Golbat", "Lugia and Ho-Oh"],
            "answer": "Mewtwo and Mew",
            "justification": "In Pokémon Red and Blue, Mewtwo is a genetically engineered Pokémon discovered from Mew, and both are considered legendary."
        },
        {
            "type": "quiz",
            "question": "Which type is super effective against Water-type Pokémon?",
            "choices": ["Fire", "Electric", "Flying", "Bug"],
            "answer": "Electric",
            "justification": "Electric-type moves are super effective against Water-type Pokémon, making Electric-type Pokémon strong contenders in battles against them."
        },
        {
            "type": "quiz",
            "question": "What is Pikachu's evolved form?",
            "choices": ["Raichu", "Pichu", "Eevee", "Jolteon"],
            "answer": "Raichu",
            "justification": "Pikachu evolves into Raichu when exposed to a Thunder Stone. Pichu is Pikachu's pre-evolved form."
        },
        {
            "type": "quiz",
            "question": "Which Pokémon is known as the 'Psychic Fairy'? (Introduced in Generation VI)",
            "choices": ["Jigglypuff", "Gardevoir", "Sylveon", "Xerneas"],
            "answer": "Gardevoir",
            "justification": "Gardevoir, originally a Psychic-type, became a Psychic Fairy-type Pokémon with the introduction of the Fairy type in Generation VI."
        },
        {
            "type": "concept",
            "content": {
                "heading": "Legendary and Mythical Pokémon",
                "sentence1": "Legendary Pokémon are rare and often associated with lore in the Pokémon world.",
                "sentence2": "Mythical Pokémon are even rarer than Legendary Pokémon and are typically only obtainable through special events.",
                "sentence3": "Examples of Legendary Pokémon include Lugia, Ho-Oh, and Rayquaza, while Mew and Celebi are considered Mythical."
            }
        },
        {
            "type": "quiz",
            "question": "In which region do the first Pokémon games take place?",
            "choices": ["Johto", "Kanto", "Hoenn", "Sinnoh"],
            "answer": "Kanto",
            "justification": "The original Pokémon games, Pokémon Red and Blue, take place in the Kanto region, featuring the first 151 Pokémon."
        },
        {
            "type": "quiz",
            "question": "Which Pokémon is known for evolving into multiple different forms based on conditions?",
            "choices": ["Ditto", "Eevee", "Snorlax", "Caterpie"],
            "answer": "Eevee",
            "justification": "Eevee is known for its multiple evolutions, including Vaporeon, Jolteon, and Flareon, based on different evolutionary stones."
        },
        {
            "type": "quiz",
            "question": "What is the main goal in most Pokémon games?",
            "choices": ["Collect all badges", "Defeat Team Rocket", "Become Pokémon Champion", "Capture all Legendary Pokémon"],
            "answer": "Become Pokémon Champion",
            "justification": "The primary objective is to defeat the Pokémon League and become the Pokémon Champion by defeating the Elite Four and the current Champion."
        },
        {
            "type": "quiz",
            "question": "Which Pokémon can transform into any other Pokémon?",
            "choices": ["Mew", "Ditto", "Zoroark", "Arceus"],
            "answer": "Ditto",
            "justification": "Ditto can use its signature move, Transform, to transform into any opponent's Pokémon, copying their moves and stats."
        },
        {
            "type": "concept",
            "content": {
                "heading": "Pokémon Trading and Battling",
                "sentence1": "Trading and battling Pokémon with friends are core aspects of Pokémon gameplay.",
                "sentence2": "Pokémon games often encourage trading to complete the Pokédex, as some Pokémon are only available in certain game versions.",
                "sentence3": "Competitive battling involves understanding type advantages, move sets, and strategies to defeat opponents."
            }
        },
        {
            "type": "quiz",
            "question": "Which Pokémon evolves using a Fire Stone?",
            "choices": ["Onix", "Jigglypuff", "Vulpix", "Meowth"],
            "answer": "Vulpix",
            "justification": "Vulpix evolves into Ninetales when exposed to a Fire Stone, part of several Pokémon evolutions using stones."
        },
        {
            "type": "quiz",
            "question": "Which Pokémon was the first to be designed?",
            "choices": ["Pikachu", "Rhydon", "Bulbasaur", "Arceus"],
            "answer": "Rhydon",
            "justification": "Rhydon was the first Pokémon ever designed and is symbolically featured in statues in many early Pokémon games."
        },
        {
            "type": "quiz",
            "question": "What device is used by trainers to learn about and catalogue Pokémon?",
            "choices": ["PokéDex", "PokéGear", "PokéBall", "PokéNav"],
            "answer": "PokéDex",
            "justification": "The PokéDex is an electronic device used by trainers to record and provide information about all the Pokémon species."
        },
        {
            "type": "quiz",
            "question": "Which two Pokémon can be bred to produce a Pichu?",
            "choices": ["Two Raichus", "Pikachu and a Ditto", "Two Pikachus", "Two Eevees"],
            "answer": "Pikachu and a Ditto",
            "justification": "Breeding a Pikachu with a Ditto or another Pikachu can produce an Egg that hatches into a Pichu."
        },
        {
            "type": "quiz",
            "question": "What type is the Pokémon Charizard?",
            "choices": ["Fire/Water", "Dragon/Flying", "Fire/Flying", "Fire/Dragon"],
            "answer": "Fire/Flying",
            "justification": "Charizard is both Fire- and Flying-type, though some fans mistakenly believe it to be a Dragon-type due to its appearance."
        },
        {
            "type": "concept",
            "content": {
                "heading": "Evolutionary Mechanics and Types",
                "sentence1": "Pokémon evolve into their next form by leveling up, using specific items, or trading.",
                "sentence2": "Some Pokémon can only evolve when holding particular items or learning specific moves.",
                "sentence3": "Type effectiveness plays a crucial role in battles, with each Pokémon having one or two types that determine their strengths and weaknesses."
            }
        },
        {
            "type": "quiz",
            "question": "What is the Pokémon Jigglypuff's evolved form?",
            "choices": ["Wigglytuff", "Clefairy", "Igglybuff", "Marill"],
            "answer": "Wigglytuff",
            "justification": "Jigglypuff evolves into Wigglytuff when exposed to a Moon Stone, an evolutionary item used for certain species."
        },
        {
            "type": "quiz",
            "question": "Which Pokémon is known for its ability to learn every move?",
            "choices": ["Ditto", "Mew", "Arceus", "Charizard"],
            "answer": "Mew",
            "justification": "Mew is known for its ability to learn any TM, TR, or Move Tutor move, making it incredibly versatile in battles."
        },
        {
            "type": "concept",
            "content": {
                "heading": "Regional Variants and Special Forms",
                "sentence1": "Many Pokémon have regional forms that adapt to the environment of different regions.",
                "sentence2": "Alolan and Galarian forms are examples where existing Pokémon species have different types and appearances.",
                "sentence3": "Mega Evolution and Dynamaxing are special transformations that temporarily enhance a Pokémon's abilities during battles."
            }
        }
    ]
}