import React, { useRef, useState, useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { ArrowRight, ChevronDown } from "lucide-react";
import './chat.css';

export default function SmartContractChat() {
  const inputRef = useRef(null);

  // Manage the prompt, blockchain selection, loading state, and generated response.
  const [input, setInput] = useState("");
  const [blockchain, setBlockchain] = useState("Aptos");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  // Effect to dynamically update the height of the output textarea
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  }, [response]);

  async function handleGenerate() {
    if (!input.trim()) return;

    setLoading(true);
    let fullResponse = "";
    try {
      // Select the programming language based on the blockchain
      const language = blockchain === "Aptos" ? "Move" : "Solidity";

      // Create a system instruction for the AI
      const systemInstruction = `You are a smart contract generator. The user wants to generate a smart contract for the ${blockchain} blockchain using ${language}. Generate a fully functional smart contract code based on the given prompt.`;

      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({
        model: "gemini-2.0-flash",
        systemInstruction,
      });

      // Start the chat with the given prompt
      const chat = model.startChat({
        history: [{ role: "user", parts: [{ text: input }] }],
      });

      // Stream the response from the API
      const result = await chat.sendMessageStream(input);
      for await (const chunk of result.stream) {
        fullResponse += chunk.text();
      }
      setResponse(fullResponse);
    } catch (error) {
      console.error("Error:", error);
      setResponse("Error occurred while fetching response.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      {/* Existing UI remains unchanged */}
      <div className="p-6 pt-0">
        <div className="space-y-4">
          <textarea
            className="flex w-full rounded-md border border-input bg-background px-3
                       ring-offset-background file:border-0 file:bg-transparent file:text-sm
                       file:font-medium placeholder:text-muted-foreground focus-visible:outline-none
                       focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                       disabled:cursor-not-allowed disabled:opacity-50 h-24 resize-none py-4 text-base"
            placeholder="Ask AI to build..  "
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="flex items-center gap-4">
            <div className="w-1/3">
              <div className="relative">
                <select
                  value={blockchain}
                  onChange={(e) => setBlockchain(e.target.value)}
                  className="flex h-10 w-full items-center justify-between rounded-md border border-input
                             bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none
                             focus:ring-2 focus:ring-ring focus:ring-offset-2 appearance-none"
                >
                  <option>Aptos</option>
                  <option>Polygon</option>
                  <option>Ethereum</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 opacity-50 pointer-events-none" />
              </div>
            </div>
            <button
              onClick={handleGenerate}
              disabled={loading}
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium
                         ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2
                         focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none
                         disabled:opacity-50 h-10 px-4 py-2 flex-1 gap-2 ${
                           loading ? 'bg-black text-white' : 'bg-primary text-primary-foreground hover:bg-primary/90'
                         }`}
            >
              {loading ? (
                <div className="spinner"></div>
              ) : (
                <>
                  Generate Contract
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Display the generated smart contract inside a dynamic, readOnly textarea */}
      {response && (
        <div className="p-6">
          <h2 className="text-xl font-bold mb-2">Generated Smart Contract:</h2>
          <textarea
            ref={inputRef}
            readOnly
            value={response}
            className="bg-black text-white p-4 rounded border border-gray-600 w-full overflow-hidden resize-none"
            style={{ backgroundColor: 'black', color: 'white', padding: '10px' }}
          />
        </div>
      )}
    </div>
  );
}