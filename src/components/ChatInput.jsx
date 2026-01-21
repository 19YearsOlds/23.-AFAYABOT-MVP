import React, { useState, useRef } from "react";

const ChatInput = ({ onSend }) => {
    const [input, setInput] = useState("");
    const [listening, setListening] = useState(false);
    const recognitionRef = useRef(null);

    const handleVoice = () => {
        if (!("wekitSpeechRecognition" in window)) {
            alert("Voice recognitin only works in Chrome.");
            return;
        }

        const SpeechRecognition = window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.lang = "en-US";

        recognition.onstart = () => setListening(true);
        recognition.onend = () => setListening(false);

        recognition.onresult = (e) => {
            setInput(e.results[0][0].transcript);
        };

        recognition.start();
        recognitionRef.current = recognition;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            onSend(input);
            setInput("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.vlue)}
              placeholder="Type r speak..."
              className="flex-1 border p-2 rounded-md"
            />
            <button
              type="button"
              onClick={handleVoice}
              className={`p-2 rounded-full ${listening ? "bg-red-500" : "bg-blue-500"} text-white`}
            >
            </button>
            <button type="submit" className="bg-green-600 text-white px-4 rounded-md">Send</button>
        </form>
    );
};

export default ChatInput;