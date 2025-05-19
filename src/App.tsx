import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation, Routes, Route } from 'react-router-dom';
import { Send, Terminal, Trash, Copy, Check, Loader2, Command, Key, Code, Database, Server, Layout, Settings, MessageSquare, Download, History, GitBranch, TestTube, Bug, Package, Rocket, Sparkles, Brain, Coffee } from 'lucide-react';

const SidebarLink = ({ icon: Icon, text, to }: { icon: React.ElementType, text: string, to: string }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const active = location.pathname === to;
  
  return (
  <div 
    onClick={() => navigate(to)}
    className={`flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 hover:scale-102 ${
      active ? 'bg-emerald-500 text-white' : 'text-gray-300 hover:bg-gray-700'
    }`}
  >
    <Icon size={20} className={`${active ? 'animate-pulse' : ''}`} />
    <span className="font-medium">{text}</span>
  </div>
)};

const ChatView = ({ 
  messages, 
  isLoading, 
  error, 
  prompt, 
  handleSubmit, 
  setPrompt, 
  handleClearChat, 
  formatMessage, 
  messagesEndRef 
}: any) => (
  <main className="flex-1 container mx-auto p-6 flex flex-col max-w-5xl">
    <div className="flex-1 overflow-y-auto mb-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-6 border border-gray-100">
      {messages.length === 0 ? (
        <div className="h-full flex flex-col items-center justify-center text-gray-500">
          <Brain size={48} className="mb-6 text-emerald-500 animate-pulse" />
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Assistant IA Développeur</h2>
          <p className="text-center max-w-lg space-y-2 text-gray-600">
            <span className="block mb-4">Je suis votre partenaire de développement, spécialisé en :</span>
            <div className="grid grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-2">
                <Sparkles className="text-emerald-500" size={16} />
                <span>Architecture logicielle</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code className="text-emerald-500" size={16} />
                <span>Développement fullstack</span>
              </div>
              <div className="flex items-center space-x-2">
                <Database className="text-emerald-500" size={16} />
                <span>Bases de données</span>
              </div>
              <div className="flex items-center space-x-2">
                <TestTube className="text-emerald-500" size={16} />
                <span>Tests & Qualité</span>
              </div>
              <div className="flex items-center space-x-2">
                <Rocket className="text-emerald-500" size={16} />
                <span>DevOps & CI/CD</span>
              </div>
              <div className="flex items-center space-x-2">
                <Coffee className="text-emerald-500" size={16} />
                <span>Bonnes pratiques</span>
              </div>
            </div>
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map((msg: any, index: number) => (
            <div 
              key={index} 
              className={`p-4 rounded-lg ${
                msg.role === 'user' 
                  ? 'bg-emerald-50/80 ml-12 border border-emerald-100 backdrop-blur-sm transform transition-all hover:scale-[1.02]' 
                  : 'bg-gray-50/80 mr-12 border border-gray-100 backdrop-blur-sm transform transition-all hover:scale-[1.02]'
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

    {error && (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
        {error}
      </div>
    )}

    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-6 border border-gray-100">
      <form onSubmit={handleSubmit} className="flex items-start">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Décrivez ce que vous souhaitez coder..."
          className="flex-1 border border-gray-200 rounded-l-xl p-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none h-24 text-gray-700 placeholder-gray-400 bg-white/50 backdrop-blur-sm transition-all duration-200"
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
);

const FrontendView = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Frontend Development</h2>
    <div className="bg-white rounded-xl shadow p-6">
      <p className="text-gray-600">Spécialisé dans le développement frontend avec :</p>
      <ul className="mt-4 space-y-2">
        <li className="flex items-center text-gray-700"><Code size={16} className="mr-2 text-emerald-500" />React et son écosystème</li>
        <li className="flex items-center text-gray-700"><Code size={16} className="mr-2 text-emerald-500" />Vue.js et Nuxt</li>
        <li className="flex items-center text-gray-700"><Code size={16} className="mr-2 text-emerald-500" />Angular</li>
        <li className="flex items-center text-gray-700"><Code size={16} className="mr-2 text-emerald-500" />HTML5, CSS3, JavaScript moderne</li>
      </ul>
    </div>
  </div>
);

const BackendView = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Backend Development</h2>
    <div className="bg-white rounded-xl shadow p-6">
      <p className="text-gray-600">Expert en développement backend avec :</p>
      <ul className="mt-4 space-y-2">
        <li className="flex items-center text-gray-700"><Server size={16} className="mr-2 text-emerald-500" />Node.js et Express</li>
        <li className="flex items-center text-gray-700"><Server size={16} className="mr-2 text-emerald-500" />Python et Django/Flask</li>
        <li className="flex items-center text-gray-700"><Server size={16} className="mr-2 text-emerald-500" />Java Spring Boot</li>
        <li className="flex items-center text-gray-700"><Server size={16} className="mr-2 text-emerald-500" />API REST et GraphQL</li>
      </ul>
    </div>
  </div>
);

const DatabaseView = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Database Management</h2>
    <div className="bg-white rounded-xl shadow p-6">
      <p className="text-gray-600">Expert en bases de données avec :</p>
      <ul className="mt-4 space-y-2">
        <li className="flex items-center text-gray-700"><Database size={16} className="mr-2 text-emerald-500" />PostgreSQL</li>
        <li className="flex items-center text-gray-700"><Database size={16} className="mr-2 text-emerald-500" />MongoDB</li>
        <li className="flex items-center text-gray-700"><Database size={16} className="mr-2 text-emerald-500" />MySQL/MariaDB</li>
        <li className="flex items-center text-gray-700"><Database size={16} className="mr-2 text-emerald-500" />Redis</li>
      </ul>
    </div>
  </div>
);

const UIUXView = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">UI/UX Design</h2>
    <div className="bg-white rounded-xl shadow p-6">
      <p className="text-gray-600">Expert en design d'interface avec :</p>
      <ul className="mt-4 space-y-2">
        <li className="flex items-center text-gray-700"><Layout size={16} className="mr-2 text-emerald-500" />Design System</li>
        <li className="flex items-center text-gray-700"><Layout size={16} className="mr-2 text-emerald-500" />Responsive Design</li>
        <li className="flex items-center text-gray-700"><Layout size={16} className="mr-2 text-emerald-500" />Animations et Transitions</li>
        <li className="flex items-center text-gray-700"><Layout size={16} className="mr-2 text-emerald-500" />Accessibilité (a11y)</li>
      </ul>
    </div>
  </div>
);

const SettingsView = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Settings</h2>
    <div className="bg-white rounded-xl shadow p-6">
      <p className="text-gray-600">Configuration de l'assistant :</p>
      <ul className="mt-4 space-y-2">
        <li className="flex items-center text-gray-700"><Settings size={16} className="mr-2 text-emerald-500" />Gestion de l'API Key</li>
        <li className="flex items-center text-gray-700"><Settings size={16} className="mr-2 text-emerald-500" />Préférences</li>
        <li className="flex items-center text-gray-700"><Settings size={16} className="mr-2 text-emerald-500" />Thème</li>
        <li className="flex items-center text-gray-700"><Settings size={16} className="mr-2 text-emerald-500" />Langue</li>
      </ul>
    </div>
  </div>
);

function App() {
  const [apiKey, setApiKey] = useState<string>('');
  const [prompt, setPrompt] = useState<string>('');
  const [chatHistory, setChatHistory] = useState<Array<{id: string, title: string, messages: Array<{role: string, content: string}>}>>([]);
  const [currentChatId, setCurrentChatId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Array<{role: string, content: string}>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [showHistory, setShowHistory] = useState<boolean>(false);
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
    
    // Save current chat to localStorage
    if (currentChatId && messages.length > 0) {
      const updatedHistory = chatHistory.map(chat => 
        chat.id === currentChatId ? { ...chat, messages } : chat
      );
      localStorage.setItem('chat_history', JSON.stringify(updatedHistory));
      setChatHistory(updatedHistory);
    }
  }, [messages]);

  useEffect(() => {
    // Load chat history from localStorage
    const savedHistory = localStorage.getItem('chat_history');
    if (savedHistory) {
      setChatHistory(JSON.parse(savedHistory));
    }
  }, []);

  const startNewChat = () => {
    const newChatId = Date.now().toString();
    const newChat = {
      id: newChatId,
      title: 'Nouvelle conversation',
      messages: []
    };
    setChatHistory(prev => [...prev, newChat]);
    setCurrentChatId(newChatId);
    setMessages([]);
  };

  const loadChat = (chatId: string) => {
    const chat = chatHistory.find(c => c.id === chatId);
    if (chat) {
      setCurrentChatId(chatId);
      setMessages(chat.messages);
    }
  };

  const exportChat = () => {
    const chatData = JSON.stringify(messages, null, 2);
    const blob = new Blob([chatData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `chat-export-${new Date().toISOString()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
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
          max_tokens: 4000,
          functions: [
            {
              name: "analyzeCode",
              description: "Analyse le code pour détecter les problèmes potentiels",
              parameters: {
                type: "object",
                properties: {
                  code: { type: "string" },
                  language: { type: "string" }
                }
              }
            },
            {
              name: "suggestTests",
              description: "Suggère des tests unitaires et d'intégration",
              parameters: {
                type: "object",
                properties: {
                  component: { type: "string" },
                  testType: { type: "string" }
                }
              }
            }
          ]
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
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 fixed h-screen flex flex-col">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-8">
            <button onClick={startNewChat} className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
              <Command size={28} className="text-emerald-400 animate-spin-slow" />
            </button>
            <h1 className="text-white text-xl font-bold">DevAssist</h1>
          </div>
          
          {/* Chat History */}
          <div className="mb-4">
            <button
              onClick={() => setShowHistory(!showHistory)}
              className="flex items-center space-x-2 text-gray-300 hover:text-white mb-2 w-full"
            >
              <History size={16} />
              <span>Historique</span>
            </button>
            
            {showHistory && (
              <div className="space-y-2 ml-4">
                {chatHistory.map(chat => (
                  <button
                    key={chat.id}
                    onClick={() => loadChat(chat.id)}
                    className={`text-sm w-full text-left px-2 py-1 rounded ${
                      currentChatId === chat.id ? 'bg-emerald-500 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {chat.title}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <nav className="space-y-2">
            <SidebarLink icon={MessageSquare} text="Chat" to="/" />
            <div className="pt-4 pb-2">
              <div className="px-4 text-xs font-semibold text-gray-400 uppercase">Développement</div>
            </div>
            <SidebarLink icon={Code} text="Frontend" to="/frontend" />
            <SidebarLink icon={Server} text="Backend" to="/backend" />
            <SidebarLink icon={Database} text="Database" to="/database" />
            <SidebarLink icon={Layout} text="UI/UX" to="/uiux" />
            <div className="pt-4 pb-2">
              <div className="px-4 text-xs font-semibold text-gray-400 uppercase">Tests & Qualité</div>
            </div>
            <SidebarLink icon={TestTube} text="Tests" to="/tests" />
            <SidebarLink icon={Bug} text="Debug" to="/debug" />
            <SidebarLink icon={Package} text="Packages" to="/packages" />
            <div className="pt-4 pb-2">
              <div className="px-4 text-xs font-semibold text-gray-400 uppercase">DevOps</div>
            </div>
            <SidebarLink icon={GitBranch} text="Git" to="/git" />
            <SidebarLink icon={Rocket} text="Deploy" to="/deploy" />
            <SidebarLink icon={Settings} text="Settings" to="/settings" />
          </nav>
        </div>
      </aside>

      <div className="flex-1 ml-64 flex flex-col">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 text-gray-800 p-6 shadow-sm sticky top-0 z-10">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain size={24} className="text-emerald-500" />
            <h2 className="text-xl font-semibold">Assistant Développeur</h2>
          </div>
          <div className="flex items-center space-x-4">
            {messages.length > 0 && (
              <button
                onClick={exportChat}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm flex items-center transition-colors duration-200"
              >
                <Download size={16} className="mr-2" /> Exporter
              </button>
            )}
            {savedApiKey ? (
              <button 
                onClick={handleClearApiKey}
                className="bg-red-50 text-red-600 hover:bg-red-100 px-4 py-2 rounded-lg text-sm flex items-center transition-colors duration-200"
              >
                <Trash size={16} className="mr-1" /> Supprimer la clé API
              </button>
            ) : (
              <div className="flex items-center bg-gray-50 rounded-lg p-1">
                <Key size={16} className="text-gray-400 ml-2" />
                <input
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="Clé API OpenAI"
                  className="bg-transparent text-gray-800 px-3 py-2 text-sm w-64 focus:outline-none placeholder-gray-400"
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

      <Routes>
        <Route path="/" element={
          <ChatView 
            messages={messages}
            isLoading={isLoading}
            error={error}
            prompt={prompt}
            handleSubmit={handleSubmit}
            setPrompt={setPrompt}
            handleClearChat={handleClearChat}
            formatMessage={formatMessage}
            messagesEndRef={messagesEndRef}
          />
        } />
        <Route path="/frontend" element={<FrontendView />} />
        <Route path="/backend" element={<BackendView />} />
        <Route path="/database" element={<DatabaseView />} />
        <Route path="/uiux" element={<UIUXView />} />
        <Route path="/tests" element={<TestsView />} />
        <Route path="/debug" element={<DebugView />} />
        <Route path="/packages" element={<PackagesView />} />
        <Route path="/git" element={<GitView />} />
        <Route path="/deploy" element={<DeployView />} />
        <Route path="/settings" element={<SettingsView />} />
      </Routes>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200 text-center py-6 text-gray-600 text-sm">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Brain size={16} className="text-emerald-500" />
            <p>Propulsé par GPT-4 • Spécialisé en développement logiciel</p>
          </div>
          <p className="text-xs text-gray-500">Votre partenaire pour un code propre, maintenable et performant</p>
        </div>
      </footer>
      </div>
    </div>
  );
}

const TestsView = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Tests & Quality Assurance</h2>
    <div className="bg-white rounded-xl shadow p-6">
      <p className="text-gray-600">Expert en tests et qualité de code :</p>
      <ul className="mt-4 space-y-2">
        <li className="flex items-center text-gray-700"><TestTube size={16} className="mr-2 text-emerald-500" />Tests unitaires (Jest, Vitest)</li>
        <li className="flex items-center text-gray-700"><TestTube size={16} className="mr-2 text-emerald-500" />Tests E2E (Cypress, Playwright)</li>
        <li className="flex items-center text-gray-700"><TestTube size={16} className="mr-2 text-emerald-500" />Tests d'intégration</li>
        <li className="flex items-center text-gray-700"><TestTube size={16} className="mr-2 text-emerald-500" />TDD & BDD</li>
      </ul>
    </div>
  </div>
);

const DebugView = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Debugging & Performance</h2>
    <div className="bg-white rounded-xl shadow p-6">
      <p className="text-gray-600">Expert en débogage et optimisation :</p>
      <ul className="mt-4 space-y-2">
        <li className="flex items-center text-gray-700"><Bug size={16} className="mr-2 text-emerald-500" />Analyse de performance</li>
        <li className="flex items-center text-gray-700"><Bug size={16} className="mr-2 text-emerald-500" />Débogage avancé</li>
        <li className="flex items-center text-gray-700"><Bug size={16} className="mr-2 text-emerald-500" />Optimisation du code</li>
        <li className="flex items-center text-gray-700"><Bug size={16} className="mr-2 text-emerald-500" />Profiling & Monitoring</li>
      </ul>
    </div>
  </div>
);

const PackagesView = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Package Management</h2>
    <div className="bg-white rounded-xl shadow p-6">
      <p className="text-gray-600">Expert en gestion de packages :</p>
      <ul className="mt-4 space-y-2">
        <li className="flex items-center text-gray-700"><Package size={16} className="mr-2 text-emerald-500" />npm/yarn/pnpm</li>
        <li className="flex items-center text-gray-700"><Package size={16} className="mr-2 text-emerald-500" />Gestion des dépendances</li>
        <li className="flex items-center text-gray-700"><Package size={16} className="mr-2 text-emerald-500" />Sécurité des packages</li>
        <li className="flex items-center text-gray-700"><Package size={16} className="mr-2 text-emerald-500" />Monorepos</li>
      </ul>
    </div>
  </div>
);

const GitView = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Git & Version Control</h2>
    <div className="bg-white rounded-xl shadow p-6">
      <p className="text-gray-600">Expert en gestion de versions :</p>
      <ul className="mt-4 space-y-2">
        <li className="flex items-center text-gray-700"><GitBranch size={16} className="mr-2 text-emerald-500" />Git avancé</li>
        <li className="flex items-center text-gray-700"><GitBranch size={16} className="mr-2 text-emerald-500" />Stratégies de branching</li>
        <li className="flex items-center text-gray-700"><GitBranch size={16} className="mr-2 text-emerald-500" />Code review</li>
        <li className="flex items-center text-gray-700"><GitBranch size={16} className="mr-2 text-emerald-500" />Git hooks</li>
      </ul>
    </div>
  </div>
);

const DeployView = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Deployment & DevOps</h2>
    <div className="bg-white rounded-xl shadow p-6">
      <p className="text-gray-600">Expert en déploiement :</p>
      <ul className="mt-4 space-y-2">
        <li className="flex items-center text-gray-700"><Rocket size={16} className="mr-2 text-emerald-500" />CI/CD (GitHub Actions, Jenkins)</li>
        <li className="flex items-center text-gray-700"><Rocket size={16} className="mr-2 text-emerald-500" />Docker & Kubernetes</li>
        <li className="flex items-center text-gray-700"><Rocket size={16} className="mr-2 text-emerald-500" />Cloud (AWS, GCP, Azure)</li>
        <li className="flex items-center text-gray-700"><Rocket size={16} className="mr-2 text-emerald-500" />Monitoring & Logging</li>
      </ul>
    </div>
  </div>
);
export default App;