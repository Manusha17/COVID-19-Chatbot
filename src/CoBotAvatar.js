import React from "react";

import { ReactComponent as BotAvatar } from "./icons/bot.svg";

const CoBotAvatar = () => {
  return (
    <div className="react-chatbot-kit-chat-bot-avatar">
      <div className="react-chatbot-kit-chat-bot-avatar-container">
        <BotAvatar className="react-chatbot-kit-chat-bot-avatar-icon" />
      </div>
    </div>
  );
};

export default CoBotAvatar;
