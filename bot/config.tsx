import { createChatBotMessage } from "react-chatbot-kit";
//import GotIt from "./widgets/options/GotIt";
//import AgeDropdown from "./widgets/options/AgeDropdown";
import IWidget from "react-chatbot-kit/build/src/interfaces/IWidget";
import IConfig from "react-chatbot-kit/build/src/interfaces/IConfig";
import chatGPT from "/chatgpt.svg";
import Help from "./widgets/options/Help";
import ForestQuestions from "./widgets/options/ForestQuestions.tsx";

const config: IConfig = {
  botName: "ForestAR Trail Selection ",
  initialMessages: [
    createChatBotMessage(`Hello👋`, {}), 
    createChatBotMessage("I am Star 🦊, your assistant in ForeStAR 🌲", {}),
    createChatBotMessage(" What do you want to 		learn?👣", {widget: "help",}),
    
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
      widgetName: "help",
      widgetFunc: (props) => <Help {...props} />, //1
    },
    {
      widgetName: "forest",
      widgetFunc: (props) => <ForestQuestions {...props} />, //1
    }

  ] as IWidget[],
};

export default config;
