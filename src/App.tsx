import { useState } from 'react';
import logoTf from './assets/tahiti-farani-logo.png';
import avatarTeva from './assets/teva-ai.png';

const navLinks = [
  { id: 'identite', label: 'Identité' },
  { id: 'capacites', label: 'Capacités' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'securite', label: 'Sécurité' },
  { id: 'roadmap', label: 'Roadmap' },
  { id: 'contact', label: 'Contact' },
];

const capabilities = [
  {
    icon: '📦',
    title: 'Gestion intelligente des stocks',
    text: 'Suivi en temps réel, alertes de seuil, historique des mouvements, et vision claire du matériel disponible.',
  },
  {
    icon: '🎉',
    title: 'Pilotage des événements',
    text: 'Préparation, coordination et suivi des actions associatives avec une assistance contextuelle.',
  },
  {
    icon: '📊',
    title: 'Analyse & synthèse',
    text: 'Indicateurs, statistiques et résumés automatiques pour aider la prise de décision de l’équipe.',
  },
  {
    icon: '🧾',
    title: 'Support caisse & opérations',
    text: 'Aide à la gestion opérationnelle quotidienne pour des flux fiables et structurés.',
  },
  {
    icon: '👥',
    title: 'Gestion membres & contacts',
    text: 'Centralisation des informations utiles pour un suivi humain et associatif de qualité.',
  },
  {
    icon: '🤖',
    title: 'Assistant conversationnel proactif',
    text: 'Réponses précises en français, recommandations adaptées au contexte de TAHITI FARANI.',
  },
];

const roadmap = [
  'Automatisation avancée des workflows associatifs',
  'Tableau de bord analytique enrichi',
  'Aide prédictive sur les besoins de stock',
  'Modules multilingues FR / Tahitien renforcés',
];

export default function App() {
  const [open, setOpen] = useState(false);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <div className="page">
      <div className="bg-grid" />
      <header className="navbar">
        <button className="brand" onClick={() => goTo('hero')}>
          <img src={logoTf} alt="Logo Tahiti Farani" />
          <div>
            <strong>TEVA AI</strong>
            <span>TAHITI FARANI</span>
          </div>
        </button>

        <button className="menu-btn" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? '✕' : '☰'}
        </button>
      </header>

      {open && (
        <nav className="mobile-nav">
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => goTo(link.id)}>
              {link.label}
            </button>
          ))}
        </nav>
      )}

      <main className="container" id="hero">
        <section className="hero">
          <div className="avatar-wrap">
            <img src={avatarTeva} alt="Avatar Teva AI" className="avatar" />
            <div className="status-dot" />
          </div>

          <h1>TEVA AI</h1>
          <p className="hero-subtitle">IA officielle de l’association TAHITI FARANI 🌺</p>
          <p className="hero-text">
            Une intelligence artificielle dédiée à l’excellence associative : organisation, suivi opérationnel,
            aide à la décision et accompagnement quotidien de l’équipe.
          </p>
          <p className="creator">Créée et développée par <strong>Tutehau ADAMS</strong></p>

          <div className="hero-metrics">
            <div className="metric">
              <span>Mode</span>
              <b>Privé</b>
            </div>
            <div className="metric">
              <span>Langue</span>
              <b>Français / Tahitien</b>
            </div>
            <div className="metric">
              <span>Disponibilité</span>
              <b>Temps réel</b>
            </div>
          </div>
        </section>

        <section id="identite" className="section">
          <h2>Identité de TEVA AI</h2>
          <div className="card">
            <p>
              TEVA AI est le noyau d’assistance intelligent de <b>TAHITI FARANI</b>. Sa mission est d’augmenter
              la capacité d’action de l’association avec une IA utile, claire et responsable.
            </p>
            <div className="tags">
              <span>IA associative</span>
              <span>Pilotage opérationnel</span>
              <span>Décision assistée</span>
              <span>Productivité terrain</span>
            </div>
          </div>
        </section>

        <section id="capacites" className="section">
          <h2>Capacités principales</h2>
          <div className="cards-grid">
            {capabilities.map((c) => (
              <article key={c.title} className="card capability">
                <div className="cap-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="architecture" className="section">
          <h2>Architecture & fonctionnement</h2>
          <div className="card">
            <p>
              TEVA AI opère dans un environnement sécurisé, avec une interface professionnelle en français, et des flux
              conçus pour la réalité du terrain associatif. L’architecture privilégie la fiabilité, la traçabilité
              et la simplicité d’utilisation.
            </p>
            <div className="timeline">
              <div><b>1.</b> Collecte des besoins opérationnels</div>
              <div><b>2.</b> Traitement intelligent contextualisé</div>
              <div><b>3.</b> Recommandations et actions assistées</div>
              <div><b>4.</b> Historique et amélioration continue</div>
            </div>
          </div>
        </section>

        <section id="securite" className="section">
          <h2>Sécurité & confidentialité</h2>
          <div className="card">
            <ul>
              <li>Accès contrôlés par rôles et permissions</li>
              <li>Journalisation des opérations sensibles</li>
              <li>Données traitées dans un cadre strictement associatif</li>
              <li>Approche “privacy-first” sur les informations membres</li>
            </ul>
          </div>
        </section>

        <section id="roadmap" className="section">
          <h2>Roadmap intelligence</h2>
          <div className="card">
            <div className="roadmap-list">
              {roadmap.map((step) => (
                <div key={step} className="roadmap-item">{step}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact officiel</h2>
          <div className="card signature">
            <img src={logoTf} alt="Logo TF" className="sig-logo" />
            <div>
              <b>TEVA AI</b> — IA officielle 🌺<br />
              Association TAHITI FARANI<br />
              <b>Tutehau ADAMS</b>, Vice-président<br />
              Tél : 06 71 96 36 80<br />
              Email : <a href="mailto:contact@tahiti-farani.fr">contact@tahiti-farani.fr</a><br />
              <a href="https://tahiti-farani.fr" target="_blank" rel="noreferrer">https://tahiti-farani.fr</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">© 2024 - {new Date().getFullYear()} TEVA AI • TAHITI FARANI • Créée et développée par Tutehau ADAMS</footer>
    </div>
  );
}
