import { useState } from 'react';
import {
  Menu,
  X,
  Sparkles,
  Shield,
  Brain,
  Rocket,
  Globe,
  Database,
  TerminalSquare,
  Bot,
  Cpu,
  MessageSquare,
} from 'lucide-react';

const nav = [
  { id: 'hero', label: 'Accueil' },
  { id: 'about', label: 'Teva' },
  { id: 'values', label: 'Valeurs' },
  { id: 'tools', label: 'Outils' },
  { id: 'stack', label: 'Stack' },
  { id: 'roadmap', label: 'Roadmap' },
];

const values = [
  {
    icon: <Brain className="h-5 w-5 text-fuchsia-400" />,
    title: 'Intelligent & utile',
    text: 'Teva AI donne des réponses claires, exploitables, et orientées résultat.',
  },
  {
    icon: <Shield className="h-5 w-5 text-fuchsia-400" />,
    title: 'Sûr & fiable',
    text: 'Priorité à la sécurité, aux accès maîtrisés et à la stabilité des actions.',
  },
  {
    icon: <Rocket className="h-5 w-5 text-fuchsia-400" />,
    title: 'Rapide & pragmatique',
    text: 'Pas de blabla : exécution, validation, livraison.',
  },
  {
    icon: <MessageSquare className="h-5 w-5 text-fuchsia-400" />,
    title: 'Humain dans le ton',
    text: 'Communication naturelle, directe, en français.',
  },
];

const tools = [
  { icon: <TerminalSquare className="h-5 w-5" />, name: 'Terminal', desc: 'Commandes système et automatisation' },
  { icon: <Globe className="h-5 w-5" />, name: 'Web', desc: 'Recherche + extraction de contenu' },
  { icon: <Database className="h-5 w-5" />, name: 'Fichiers', desc: 'Lecture/écriture et organisation' },
  { icon: <Bot className="h-5 w-5" />, name: 'Agents', desc: 'Orchestration de tâches complexes' },
  { icon: <Cpu className="h-5 w-5" />, name: 'Build/Dev', desc: 'Audit, debug, déploiement' },
  { icon: <Sparkles className="h-5 w-5" />, name: 'IA', desc: 'Raisonnement, génération, itération' },
];

export default function App() {
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          <button onClick={() => go('hero')} className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-purple-600">
              ✨
            </span>
            <span>Teva AI</span>
          </button>

          <button className="rounded-md p-2 hover:bg-white/10" onClick={() => setOpen((v) => !v)} aria-label="menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <nav className="border-t border-white/10 bg-zinc-900 px-4 py-3">
            <div className="mx-auto flex max-w-6xl flex-col gap-2">
              {nav.map((n) => (
                <button
                  key={n.id}
                  onClick={() => go(n.id)}
                  className="rounded-md px-3 py-2 text-left text-sm text-zinc-300 hover:bg-white/10 hover:text-white"
                >
                  {n.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-16">
        <section id="hero" className="py-16 text-center sm:py-24">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-3 py-1 text-xs text-fuchsia-300">
            <Sparkles className="h-3.5 w-3.5" /> Assistante IA personnelle
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Teva AI
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-300 sm:text-lg">
            Une IA dédiée, moderne et fiable — conçue pour accélérer ton travail, sécuriser tes workflows et t’aider à construire plus vite.
          </p>
        </section>

        <section id="about" className="mb-16 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">Qui est Teva AI ?</h2>
          <p className="mt-3 text-zinc-300">
            Teva AI est une version orientée performance et autonomie, pensée pour du vrai usage quotidien : dev, ops, produit, et automatisation.
          </p>
          <div className="mt-5 grid gap-3 text-sm sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-zinc-900 p-4">
              <div className="text-zinc-400">Mode</div>
              <div className="mt-1 font-semibold">Privé</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-zinc-900 p-4">
              <div className="text-zinc-400">Langue</div>
              <div className="mt-1 font-semibold">Français</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-zinc-900 p-4">
              <div className="text-zinc-400">Objectif</div>
              <div className="mt-1 font-semibold">Exécution + qualité</div>
            </div>
          </div>
        </section>

        <section id="values" className="mb-16">
          <h2 className="mb-5 text-2xl font-semibold">Valeurs</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((v) => (
              <article key={v.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <div className="mb-3">{v.icon}</div>
                <h3 className="font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{v.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="tools" className="mb-16">
          <h2 className="mb-5 text-2xl font-semibold">Outils & capacités</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((t) => (
              <article key={t.name} className="rounded-xl border border-white/10 bg-zinc-900 p-5">
                <div className="mb-2 text-fuchsia-400">{t.icon}</div>
                <h3 className="font-semibold">{t.name}</h3>
                <p className="mt-1 text-sm text-zinc-300">{t.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="stack" className="mb-16 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">Stack</h2>
          <p className="mt-3 text-zinc-300">Next.js / React, TypeScript, Supabase, API OpenAI, automatisation locale, intégrations cloud.</p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            {['React', 'TypeScript', 'Supabase', 'OpenAI API', 'Node.js', 'Vite', 'Tailwind'].map((x) => (
              <span key={x} className="rounded-full border border-white/15 bg-zinc-900 px-3 py-1 text-zinc-300">{x}</span>
            ))}
          </div>
        </section>

        <section id="roadmap" className="rounded-2xl border border-white/10 bg-zinc-900 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">Roadmap Teva AI</h2>
          <ul className="mt-4 space-y-2 text-zinc-300">
            <li>• Moteur de workflows personnalisés</li>
            <li>• Dashboard multi-projets</li>
            <li>• Connexions Google/Notion/Slack</li>
            <li>• Mémoire longue durée améliorée</li>
          </ul>
        </section>
      </main>

      <footer className="border-t border-white/10 py-6 text-center text-xs text-zinc-400">
        © 2024 - {new Date().getFullYear()} Teva AI • Conçu pour Tutehau
      </footer>
    </div>
  );
}
