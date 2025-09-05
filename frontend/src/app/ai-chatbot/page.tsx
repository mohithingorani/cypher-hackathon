"use client";
import TextMessage2 from "@/components/TextMessage2";
import axios from "axios";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export interface MessageObject {
  message: string;
  id: string;
  time: string;
  username: string;
}

const fetchValue = async (prompt: string) => {
  const response = await axios.post(`http://192.168.194.108:5000/api/chat`, {
    message: prompt,
  });
  return response.data.response;
};

export default function Chats() {
  const [inbox, setInbox] = useState<MessageObject[]>([]);
  const [message, setMessage] = useState<string>("");
  const [Error, setError] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isListening, setIsListening] = useState<boolean>(false);

  const getTime = () => {
    const dateWithoutSecond = new Date();
    const currentTime = dateWithoutSecond.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    return currentTime;
  };

  async function handleSendMessage() {
    if (!message.trim()) return;
    const myMessage: MessageObject = {
      message: message,
      id: "user",
      time: getTime(),
      username: "User ",
    };
    setInbox((prevInbox) => [...prevInbox, myMessage]);
    setMessage("");
    setIsLoading(true);
    try {
      const responseText = await fetchValue(message);
      if (responseText) {
        const newMessage: MessageObject = {
          message: responseText,
          id: "bot",
          time: getTime(),
          username: "Bot",
        };
        setInbox((prevInbox) => [...prevInbox, newMessage]);
        setMessage("");
      }
    } catch (e) {
      console.error("Error fetching chat response", e);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }

  // 🎤 Voice Input
  const startListening = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setMessage((prev) => prev + " " + transcript);
    };

    recognition.onerror = (event: any) => {
      console.error("Speech recognition error:", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [inbox]);

  if (Error) {
    return <div className="text-white">Can&apos;t Connect.. Retry</div>;
  }

  return (
    <>
      <div
        className="flex justify-center h-screen bg-[#222222]"
        style={{
          backgroundImage: `url(/background.jpg)`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col max-w-2xl w-full h-[90vh] mt-8">
          <div className="flex flex-col flex-grow bg-[#0D0D0D]/50  p-8 overflow-y-auto shadow-lg rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 mx-4">
            <div className="text-white text-2xl flex justify-start w-full items-center gap-2">
              <Image src={"/avatar.svg"} width="50" height="50" alt="avatar" />
              <div>
                <div>Veronica</div>
                {isLoading && (
                  <div className="text-sm text-green-300">Typing ...</div>
                )}
              </div>
            </div>
            {inbox.map((messageObject, index) => (
              <TextMessage2
                key={index}
                messageObject={messageObject}
                myId={"user"}
              />
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Section */}
          <div className="flex justify-between gap-3 p-4 bg-[#0D0D0D] shadow-md rounded-xl mt-4 mx-4">
            <input
              type="text"
              value={message}
              className="w-full px-3 py-1.5 resize-none text-white backdrop-filter backdrop-blur-sm border rounded-xl shadow-md border-none"
              style={{ backgroundColor: "#0D0D0D" }}
              placeholder="Enter text"
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage();
                }
              }}
            />
            {/* 🎤 Mic Button */}
            <button
              onClick={startListening}
              className={`px-4 py-2 rounded-lg ${
                isListening ? "bg-red-500 animate-pulse" : "bg-blue-500"
              }`}
            >
              {isListening ? "Listening..." : "🎤"}
            </button>
            <button
              onClick={handleSendMessage}
              className={`${
                isLoading
                  ? "cursor-not-allowed hover:scale-110 bg-green-200"
                  : "cursor-pointer bg-green-500"
              } px-4 py-2 rounded-lg`}
              disabled={isLoading}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
