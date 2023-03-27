import { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const API_KEY = process.env.NEXT_PUBLIC_CHATGPT_API_KEY;

export default function ChatGPT() {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "투자에 대한 고민을 말해주세요.",
      sender: "ChatGPT",
    }, 
  ]);

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing",
    };
    // all the old messages, + the new message
    const newMessages = [...messages, newMessage];

    // update our messages state
    setMessages(newMessages);

    // set a typing indicator (chatGPT is typing)
    setTyping(true);

    // process message to chatGPT (send it over and see the response)
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    // chatMessages { sender: "user" or "ChatGPT", message: "The message content here"}
    // apiMessages { role: "user" or "assistant", content: "The message content here"}

    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    // role: "user" -> a message from the user, "assistant" -> a response from chatGPT
    // "system" -> generally one initial message defining HOW we want chatGPT to talk

    const systemMessage = {
      role: "system",
      content:
        "투자에 대해 잘 모르는 사람도 쉽게 이해할 수 있게 풀어서 설명해줘",
    };

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
          },
        ]);
        setTyping(false);
      })
      .catch((err) => {
        console.log({ err });
      }); ;
  }

  return (
    <div className="App">
      <div style={{ position: "relative", height: "90vh", width: "500px" }}>
        <MainContainer>
          <ChatContainer>
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={
                typing ? <TypingIndicator content="ChatGPT is typing" /> : null
              }
            >
              {messages.map((message, i) => {
                console.log(i, message);
                return <Message key={i} model={message} />;
              })}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}

