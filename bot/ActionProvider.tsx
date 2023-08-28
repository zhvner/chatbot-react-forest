import React from "react";
import { IMessageOptions } from "react-chatbot-kit/build/src/interfaces/IMessages";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";



const ActionProvider = ({
  createChatBotMessage,
  setState,
  children,
}: {
  createChatBotMessage: (
    message: string,
    options: IMessageOptions
  ) => {
    loading: boolean;
    widget?: string;
    delay?: number;
    payload?: any;
    message: string;
    type: string;
    id: number;
  };
  setState: any;
  children: any;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleGotIt = () => {
    const botMessage = createChatBotMessage("Amazing! How do I call you?", {});

    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleUserInput = (age?: number) => {
    setState(
      (prev: {
        messages: {
          message: string;
          type: string;
          id: number;
          loading?: boolean;
          widget?: string | undefined;
          delay?: number | undefined;
          payload?: any;
        }[];
      }) => {
        let botMessage;
        if (
          prev.messages[prev.messages.length - 2].message === "Amazing! How do I call you?"
        ) {
          //dispatch(addName(prev.messages[prev.messages.length - 1].message));
          botMessage = createChatBotMessage("How old are you? Select from the dropdown", {
            widget: "ageDropdown",
          });
          return {
            ...prev,
            messages: [...prev.messages, botMessage],
          };
        } else {
          return prev;
        }
      }
    );
  };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleGotIt,
            handleUserInput,
          },
        });
        
      })}
    </div>
  );
};

// class ActionProvider {
//   addMessageToState(message: any) {
//     throw new Error("Method not implemented.");
//   }
//   setState: any;
//   createChatBotMessage: any;
//   state: {
//     //genre: "",
//     a: string;
//   };
//   constructor(createChatBotMessage: any, setStateFunc: any) {
//     this.createChatBotMessage = createChatBotMessage;
//     this.setState = setStateFunc;
//     //this.state = state;
//     this.state = {
//       //genre: "",
//       a: "Tom Clancy"
//       //index: 0,
//       //book: {}
//     };
//   }

// const chooseForest = () => {
//   const message = this.createChatBotMessage(
//     "Common questions for Forest Bathing 101",
//     {
//       widget: "forestQuestions"
//     }
//   );
//   this.addMessageToState(message);
// };
// }

export default ActionProvider;
