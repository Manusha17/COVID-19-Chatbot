import "./styles.css";
import { useState, useEffect } from "react";
import Chatbot from "react-chatbot-kit";
import config from "./chatbotConfig";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
// import { getData } from "./data";

export default function App() {
  // useEffect(() => {
  //   fetch("https://www.hpb.health.gov.lk/api/get-current-statistical")
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         if (result.success) {
  //           return result.data;
  //         }
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  // }, []);

  return (
    <div className="App">
      <h1>COVID-19-Chatbot</h1>
      <h2>Start chatting with the COVID-19-Chatbot!</h2>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}
