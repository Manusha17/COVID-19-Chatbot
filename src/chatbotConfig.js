import { createChatBotMessage } from "react-chatbot-kit";
import Overview from "./widgets/Overview";
import GlobalStatistics from "./widgets/GlobalStatistics";
import LocalStatistics from "./widgets/LocalStatistics";
import Contact from "./widgets/Contact";
import MedicineDelivery from "./widgets/MedicineDelivery";

const config = {
  // initialMessages: [
  //   createChatBotMessage(
  //     `Hi, I'm here to provide you with latest COVID 19 data to keep you safe!`
  //   )
  // ]
  lang: "no",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#04668a"
    },
    chatButton: {
      backgroundColor: "#0f5faf"
    }
  },
  initialMessages: [
    createChatBotMessage(
      `Hi, I'm here to provide you with latest COVID 19 data to keep you safe!`
    ),
    createChatBotMessage(
      "Here's a quick overview over what I need to function. ask me about the different parts to dive deeper.",
      {
        withAvatar: false,
        delay: 400,
        widget: "overview"
      }
    )
  ],
  state: {
    airports: [],
    selectedAirport: { iata: "OSL", nameCompact: "Oslo" },
    statsType: "",
    selectedFlightId: "",
    selectedFlight: null
  },
  customComponents: {},
  widgets: [
    {
      widgetName: "overview",
      widgetFunc: (props) => <Overview {...props} />,
      mapStateToProps: ["messages"]
    },
    {
      widgetName: "globalStatistics",
      widgetFunc: (props) => <GlobalStatistics />
      // mapStateToProps: ["statsType"]
    },
    {
      widgetName: "localStatistics",
      widgetFunc: (props) => <LocalStatistics />
    },
    {
      widgetName: "emergencyContact",
      widgetFunc: (props) => <Contact />
    },
    {
      widgetName: "medicineDelivery",
      widgetFunc: (props) => <MedicineDelivery />
    }
    // {
    //   widgetName: "actionProvider",
    //   widgetFunc: (props) => <ActionProvider {...props} />,
    //   mapStateToProps: ["gist"]
    // }
  ]
};

export default config;
