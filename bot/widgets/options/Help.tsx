import React, { useState } from "react";
import "./Button.css";

interface HelpProps {
  actionProvider: {
    handleForest: () => void;
    handleCulture: () => void;
    handleMisc: () => void;
    handleEvent: () => void;
    handleFlora: () => void;
  };
}

interface HelpOption {
  text: string;
  handler: () => void;
  questions: Question[];
  id: number;
}

interface Question {
  text: string;
  answer: string;
  id: number;
}

const Help: React.FC<HelpProps> = (props) => {
  const helpOptions: HelpOption[] = [
    {
      text: "Forest Bathing 101",
      handler: props.actionProvider.handleForest,
      questions: [
        {
          id: 1,
          text: "What is forest bathing?",
          answer: " Forest bathing, or shinrin-yoku in Japan, is the practice of sitting or slowly moving through a forest and taking in the atmosphere through our available senses. A large body of empirical evidence indicates that this practice can offer preventative and restorative health benefits.",
        },
        {
          id: 2,
          text: "Can children participate in forest bathing, and what are its benefits?",
          answer: "Children can participate in forest bathing, which may provide unique benefits such as improved concentration, creativity, and connection to nature. The calming effect can also foster emotional well-being. Parents or guardians should accompany children and ensure they follow safe practices in the forest environment.",
        },
        {
          id: 3,
          text: "What are the health benefits of forest bathing?",
          answer: " A large body of empirical evidence indicates that this practice can offer preventative and restorative health benefits by promoting the activity of our parasympathetic nervous system, calming our sympathetic nervous system or fight or flight response, and boosting our immune system.",
        },
        {
          id: 4,
          text: "How can beginners start practicing forest bathing?",
          answer: " Beginners can start forest bathing by choosing a quiet forest or wooded area and allocating some uninterrupted time. The focus is not on exercise but on mindful presence. Strolling, breathing deeply, and engaging all the senses is essential. Following a guided program such as this app or consulting a trained guide initially can be helpful to fully grasp the practice.",
        },
        {
          id: 5,
          text: "What to pack?",
          answer: " For forest bathing, you should pack essentials such as comfortable clothing suitable for the weather, insect repellent, water, a small towel or mat to sit on, and a map of the trails. Carrying a cell phone for emergencies and leaving behind distracting gadgets might also be advisable.",
        },
        // Add more questions for Forest Bathing 101
      ],
      id: 1,
    },
    {
      text: "Cultural Significance",
      handler: props.actionProvider.handleCulture,
      questions: [
        {
          id: 1,
          text: "What is the cultural significance of forest bathing in Japan?",
          answer: " In Japan, forest bathing or shinrin-yoku is not just a leisurely stroll but a recognized form of nature therapy. It is deeply intertwined with Japanese Shinto and Buddhist practices, emphasizing harmony with nature. The practice is believed to cleanse both the body and the  mind, and it has been a part of Japanese public health programs since the 1980s.",
        },
        {
          id: 2,
          text: "Can you tell me something interesting about the western redcedar stumps on the Lily-of-the-Valley trail? ",
          answer: "The western redcedar stumps on the Lily-of-the-Valley trail are over 200 years old, bearing notches from springboards used in the 1800s. They now serve as habitats for insects and birds.",
        },
        // Add more questions for Cultural Significance
      ],
      id: 2,
    },
    {
      text: "Local Events & Trails",
      handler: props.actionProvider.handleEvent,
      questions: [
        {
          id: 1,
          text: "Are there any organized forest bathing experiences in Pacific Spirit Regional Park?",
          answer: " Pacific Spirit Regional Park may sometimes offer guided forest bathing experiences led by certified guides. It's advisable to check with the local park authorities or search for local wellness organizations specializing in forest bathing experiences to find tailored sessions.          ",
        },
        {
          id: 2,
          text: "Tell me about this park",
          answer: "Pacific Spirit Regional Park is located on the traditional, ancestral and unceded territory of the Hən̓q̓əmin̓əm̓ [HUN-kuh-MEE-num]  speaking xʷməθkwəy̓əm (Musqueam) people. This park covers 763 hectares with over 70 km of trails. In the late 19th and early 20th centuries, much of the land was logged for export to European markets. In 1975, a portion of the land was designated an ecological reserve. In 1989, the provincial government declared the University Endowment Lands a natural forest preserve in undeveloped areas.",
        },
        {
          id: 3,
          text: "What trail would you recommend for a 60-minute meditative experience? ",
          answer: "The Cleveland Trail and Lily-of-the-Valley trail offer a serene path through lush greenery, ideal for a 60-minute meditative walk.          ",
        },
        // Add more questions for Events
      ],
      id: 3,
    },

    {
      text: "Misconceptions about Forest Bathing",
      handler: props.actionProvider.handleMisc,
      questions: [
        {
          id: 1,
          text: "Forest Bathing vs Hiking in the woods",
          answer: "Unlike hiking, where the goal may be physical exercise or reaching a destination, forest bathing focuses on immersion in the natural environment through mindful observation. There is no set path or pace; the emphasis is on breathing, listening, observing, and tuning into the natural surroundings. It's more about experiencing the journey rather than the destination. ",
        },
        {
          id: 2,
          text: "A common misconception? ",
          answer: "A common misconception about forest bathing is that it's a fancy term for walking in the woods. While it involves walking in nature, it emphasizes mindfulness, environmental connection, and therapeutic benefits. Some may also falsely assume that it requires spiritual belief or adherence to a particular philosophy, but it is open to all, regardless of personal beliefs.          ",
        },
        {
          id: 3,
          text: "Is it safe for me to do forest bathing alone? ",
          answer: "Forest bathing can be safe if you follow marked trails, carry essentials, and consult with a healthcare professional if needed. Inform someone about your whereabouts.          ",
        },
        // Add more questions for Misconceptions
      ],
      id: 4,
    },

    {
      text: "Fauna&Flora education",
      handler: props.actionProvider.handleMisc,
      questions: [
        {
          id: 1,
          text: "What trees are in this park?",
          answer: "Trees you may encounter are Cedar, Hemlock, Douglas Fir and Sitka Spruce, Vine Maple, Red Alder and Bitter Cherry. You may also discover Salal, Salmonberry, Blackberry, Elderberry, ferns, mosses, lichens and mushrooms.          ",
        },
        {
          id: 2,
          text: "What animals or wildlife are in this park? ",
          answer: "Birds, animals and amphibians are Owl, Eagle, Chickadee, Warbler, Wren, Kinglet, Woodpeckers and sea birds. Douglas Squirrel, Vole, Mice, Coyote, Skunk and Raccoon. Salamanders, Newt, Garter Snake, Toads and Tree Frogs. Until about 100 years ago there were elk, deer, cougars, and black bears here.          ",
        },
        {
          id: 3,
          text: "Why are the Western Hemlock trees significant in the forest ecosystem? ",
          answer: "The Western Hemlock trees, distinct for their soft, feathery needles and weathered bark, are vital to the forest ecosystem. They create unique microclimates with cooler, moister environments, providing habitat and nourishment for various species. Their fallen needles enrich the soil with essential nutrients. Despite being sometimes considered a 'weed' in commercial forestry, their role in nutrient cycling and forest health is indispensable, making them a critical species in Pacific Spirit Regional Park.          ",
        },
        // Add more questions for Flora and Fauna
      ],
      id: 4,
    }
    
  ];

  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  const handleOptionClick = (optionId: number) => {
    setSelectedOption(optionId);
    setSelectedQuestion(null); // Reset selected question when changing options
  };

  const handleQuestionClick = (questionId: number) => {
    setSelectedQuestion((prevSelectedQuestion) =>
      prevSelectedQuestion === questionId ? null : questionId
    );
  };

  return (
    <div>
      <div className="button-container">
        {helpOptions.map((helpOption) => (
          <button
            key={helpOption.id}
            onClick={() => handleOptionClick(helpOption.id)}
            className={`this-button ${selectedOption === helpOption.id ? "active" : ""}`}
          >
            {helpOption.text}
          </button>
        ))}
      </div>
      {selectedOption !== null && (
        <div className="questions-container">
          {helpOptions[selectedOption - 1].questions.map((question) => (
            <div key={question.id}>
              <button
                onClick={() => handleQuestionClick(question.id)}
                className={`this-button question-button ${
                  selectedQuestion === question.id ? "active" : ""
                }`}
              >
                {question.text}
              </button>
              {selectedQuestion === question.id && <div className="answer">{question.answer}</div>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Help;
