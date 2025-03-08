import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

function App() {
  const [input, setInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleChat() {
    if ( input.trim () == false){
      return 
    }
 
    let fullResponse = "";
    setLoading(true);

    try {
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash",
        systemInstruction: "You are a smart contract generator and .",
       }, 
        
      );

    
      const updatedHistory = [...chatHistory];

      // If chat history is empty, start with user input
      if (updatedHistory.length === 0 || updatedHistory[0].role !== "user") {
        updatedHistory.push({ role: "user", text: input });
      }

      const chat = model.startChat({
        history: updatedHistory.map((msg) => ({
          role: msg.role,
          parts: [{ text: msg.text }],
        })),
      });

      // Send message to AI
      const result = await chat.sendMessageStream(input);

      // Update UI with user input
      setChatHistory((prev) => [...prev, { role: "user", text: input }]);
      setInput("");

      // Stream AI response
      for await (const chunk of result.stream) {
        const chunkText = chunk.text();
        fullResponse += chunkText;
       
      }

      // Store AI response
      setChatHistory((prev) => [...prev, { role: "model", text: fullResponse }]);
    } catch (error) {
      console.error("Error:", error);
      setChatHistory([...chatHistory, { role: "model", text: "Error occurred while fetching response." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Google Gemini Chatbot</h1>

      <div className="w-full max-w-lg bg-white p-4 rounded-lg shadow-md">
        <div className="h-60 overflow-y-auto mb-4 p-2 border rounded bg-gray-50">
          {chatHistory.map((msg, index) => (
            <div key={index} className={`mb-2 ${msg.role === "user" ? "text-blue-600 text-right" : "text-gray-800"}`}>
              <strong>{msg.role === "user" ? "You" : "AI"}:</strong> {msg.text}
            </div>
          ))}
        </div>

        <input
          type="text"
          className="w-full p-2 border rounded focus:outline-none"
          placeholder="Type your question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={handleChat}
          className="w-full mt-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Generating..." : "Ask AI"}
        </button>
      </div>
    </div>
  );
}

export default App;
