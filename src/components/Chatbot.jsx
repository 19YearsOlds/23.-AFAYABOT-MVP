import React, { useState } from "react";
import ChatInput from "./ChatInput";

const Chatbot = () => {
    const [messages, setMessages] = useState([
        { role: "bot", text: "Hi! I'm AfyaBot. Please tell me your age, gender and symptoms." },
    ]);

    const handleSendMessage = async (input) => {
        const newMessages = [...messages, { role: "user", text: input }];
        setMessages(newMessages);

        const botReply = "Based on your symptoms, you may have cold or flu. Please consult a doctor.";
        setMessages([...newMessages, { role: "bot", text: botReply }]);
    };

    return (
        <div className="p-4 max-w-xl mx-auto">
            <div className="bg-white border rounded-md h-96 overflow-y-auto p-4 shadow-md">
                {messages.map((msg, i) => (
                    <div key={i} className={`mb-2 text-${msg.role === "bot" ? "blue" : "green"}-600`}>
                        <strong>{msg.role === "bot" ? "AfyaBot" : "You"}:</strong> {msg.text}
                    </div>
                ))}
            </div>
            <ChatInput onSend={handleSendMessage} />
        </div>
    );
};

export default Chatbot;