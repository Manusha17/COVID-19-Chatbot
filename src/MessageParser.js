class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    message = message.toLowerCase();
    console.log(message);

    if (
      message.includes("options") ||
      message.includes("help") ||
      message.includes("do for me")
    ) {
      return this.actionProvider.handleOptions({ withAvatar: true });
    }

    if (
      message.includes("talk") ||
      message.includes("speak") ||
      message.includes("real person") ||
      message.includes("call") ||
      message.includes("emergency") ||
      message.includes("contact")
    ) {
      return this.actionProvider.handleContact();
    }

    if (
      message.includes("stats") ||
      message.includes("statistics") ||
      message.includes("deaths")
    ) {
      return [
        this.actionProvider.handleGlobalStats(),
        this.actionProvider.handleLocalStats()
      ];
    }

    if (message.includes("medicine") || message.includes("delivery")) {
      return this.actionProvider.handleMedicine();
    }

    if (
      message.includes("faqs") ||
      message.includes("question") ||
      message.includes("questions")
    ) {
      return this.actionProvider.handleContact();
    }

    // if (message.includes("airport")) {
    //   return this.actionProvider.handleAirport();
    // }

    return this.actionProvider.handleOptions({ withAvatar: true });
  }
}

export default MessageParser;
