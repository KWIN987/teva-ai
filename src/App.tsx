import React, { useState, useRef, useEffect } from 'react';
import { Send, Terminal, Trash, Copy, Check, Loader2, Command, Key } from 'lucide-react';

function App() {
  const [apiKey, setApiKey] = useState<string>('');
  const [prompt, setPrompt] = useState<string>('');
  const [messages, setMessages] = useState<Array<{role: string, content: string}>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [savedApiKey, setSavedApiKey] = useState<boolean>(false);

  useEffect(() => {
    // Check if API key is saved in localStorage
    const savedKey = localStorage.getItem('openai_api_key');
    if (savedKey) {
      setApiKey(savedKey);
      setSavedApiKey(true);
    }
  }, []);

  useEffect(() => {
    // Scroll to bottom of messages
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSaveApiKey = () => {
    if (apiKey.trim()) {
      localStorage.setItem('openai_api_key', apiKey);
      setSavedApiKey(true);
    }
  };

  const handleClearApiKey = () => {
    localStorage.removeItem('openai_api_key');
    setApiKey('');
    setSavedApiKey(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!apiKey.trim()) {
      setError("Veuillez entrer votre clé API OpenAI");
      return;
    }
    
    if (!prompt.trim()) {
      return;
    }

    const userMessage = { role: 'user', content: prompt };
    setMessages(prev => [...prev, userMessage]);
    setPrompt('');
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: [...messages, userMessage],
          temperature: 0.2,
          max_tokens: 2000
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Erreur lors de la communication avec l\'API OpenAI');
      }

      const data = await response.json();
      const assistantMessage = data.choices[0].message;
      
      setMessages(prev => [...prev, assistantMessage]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([]);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Function to format code blocks in messages
  const formatMessage = (content: string) => {
    // Split by code blocks
    const parts = content.split(/(```[\s\S]*?```)/g);
    
    return parts.map((part, index) => {
      if (part.startsWith('```') && part.endsWith('```')) {
        // Extract language and code
        const match = part.match(/```(\w*)\n([\s\S]*?)```/);
        const language = match?.[1] || '';
        const code = match?.[2] || part.slice(3, -3);
        
        return (
          <div key={index} className="relative bg-gray-800 rounded-md p-4 my-2 text-white font-mono text-sm overflow-x-auto">
            {language && (
              <div className="absolute top-2 right-2 text-xs text-gray-400">
                {language}
              </div>
            )}
            <pre>{code}</pre>
            <button 
              onClick={() => copyToClipboard(code)}
              className="absolute top-2 right-10 text-gray-400 hover:text-white"
              title="Copier le code"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </div>
        );
      } else {
        return <p key={index} className="whitespace-pre-wrap">{part}</p>;
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-6 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Command size={28} className="text-emerald-400" />
            <h1 className="text-2xl font-bold tracking-tight">Assistant IA Dev Fullstack</h1>
          </div>
          <div className="flex items-center space-x-2">
            {savedApiKey ? (
              <button 
                onClick={handleClearApiKey}
                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm flex items-center transition-colors duration-200"
              >
                <Trash size={16} className="mr-1" /> Supprimer la clé API
              </button>
            ) : (
              <div className="flex items-center bg-gray-700 rounded-lg p-1">
                <Key size={16} className="text-emerald-400 ml-2" />
                <input
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="Clé API OpenAI"
                  className="bg-transparent text-white px-3 py-2 text-sm w-64 focus:outline-none placeholder-gray-400"
                />
                <button 
                  onClick={handleSaveApiKey}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-200"
                >
                  Sauvegarder
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 container mx-auto p-6 flex flex-col max-w-6xl">
        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto mb-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-500">
              <Terminal size={48} className="mb-6 text-emerald-500" />
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Assistant IA Dev Fullstack</h2>
              <p className="text-center max-w-lg space-y-2 text-gray-600">
                Je peux vous aider à développer des applications complètes :
                <br />• Frontend (React, Vue, Angular...)
                <br />• Backend (Node.js, Python, Java...)
                <br />• Base de données (SQL, NoSQL)
                <br />• API REST et GraphQL
                <br />• Tests et déploiement
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-lg ${
                    msg.role === 'user' 
                      ? 'bg-emerald-50 ml-12 border border-emerald-100' 
                      : 'bg-gray-50 mr-12 border border-gray-100'
                  }`}
                >
                  <div className="font-semibold mb-2 text-gray-700">
                    {msg.role === 'user' ? 'Vous' : 'Assistant'}
                  </div>
                  <div className="text-gray-800">
                    {formatMessage(msg.content)}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Error message */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {/* Input form */}
        <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100">
          <form onSubmit={handleSubmit} className="flex items-start">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Décrivez ce que vous souhaitez coder..."
              className="flex-1 border border-gray-200 rounded-l-xl p-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none h-24 text-gray-700 placeholder-gray-400"
              disabled={isLoading}
            />
            <div className="flex flex-col h-24">
              <button
                type="submit"
                disabled={isLoading || !prompt.trim()}
                className={`bg-emerald-500 hover:bg-emerald-600 text-white rounded-tr-xl p-4 h-1/2 flex items-center justify-center transition-colors duration-200 ${
                  (isLoading || !prompt.trim()) ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
              </button>
              <button
                type="button"
                onClick={handleClearChat}
                disabled={messages.length === 0}
                className={`bg-gray-600 hover:bg-gray-700 text-white rounded-br-xl p-4 h-1/2 flex items-center justify-center transition-colors duration-200 ${
                  messages.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <Trash size={20} />
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-center py-8 text-gray-400 text-sm">
        <div className="container mx-auto max-w-4xl px-6">
          <p className="mb-2">Assistant IA spécialisé dans le développement fullstack. Utilise GPT-4 avec votre clé API OpenAI.</p>
          <p>Capable de générer du code frontend, backend, et de gérer les bases de données.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;