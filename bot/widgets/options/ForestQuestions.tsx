import React from "react";
import "./Button.css";

interface ForestQuestionsProps {
  actionProvider: {
    recommend: (genre: string) => void;
  };
}

const ForestQuestions: React.FC<ForestQuestionsProps> = (props) => {
  const questions = [
    {
      text: "Fantasy",
      //handler: props.actionProvider.recommend,
      id: 1
    },
    { text: "Krimi", 
      //handler: props.actionProvider.recommend, 
      id: 2 },
    {
      text: "Liebesroman",
      //handler: props.actionProvider.recommend,
      id: 3
    },
    {
      text: "Sci-Fi",
      //handler: props.actionProvider.recommend,
      id: 4
    }
  ];

  const questionHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const genre = event.currentTarget.value;
    console.log(genre);
    props.actionProvider.recommend(genre);
  };

  const buttonsMarkup = questions.map((genre) => (
    <button
      key={genre.id}
      value={genre.text}
      onClick={questionHandler}
      className="this-button"
    >
      {genre.text}
    </button>
  ));

  return <div className="button-container">{buttonsMarkup}</div>;
};

export default ForestQuestions;
