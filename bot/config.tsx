import { createChatBotMessage } from "react-chatbot-kit";
import GotIt from "./widgets/options/GotIt";
import AgeDropdown from "./widgets/options/AgeDropdown";
import IWidget from "react-chatbot-kit/build/src/interfaces/IWidget";
import IConfig from "react-chatbot-kit/build/src/interfaces/IConfig";
import chatGPT from "/chatgpt.svg";

const config: IConfig = {
  botName: "ForestAR Trail Selection ",
  initialMessages: [
    createChatBotMessage(`Hello👋`, {}), 
    createChatBotMessage("I am Star 🦊, your assistant in ForeStAR 🌲", {}),
    createChatBotMessage("Now, we will select a trail customised just for your needs 👣", {widget: "gotIt",}),
    
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  customComponents: {
    botAvatar: (props: any) => <img src={chatGPT} alt="bot" {...props} />,
  },
  widgets: [
    {
      widgetName: "gotIt",
      widgetFunc: (props: any) => <GotIt {...props} />,
    },
    {
      widgetName: "ageDropdown",
      widgetFunc: (props: any) => <AgeDropdown {...props} />,
    },
    {
      widgetName: "trailGoalOptions",
      widgetFunc: (props: any) => (
        <div>
          <button onClick={() => props.actions.handleUserInput("Educational")}>Educational</button>
          <button onClick={() => props.actions.handleUserInput("Meditative")}>Meditative</button>
        </div>
      ),
    }
  ] as IWidget[],
};

export default config;
