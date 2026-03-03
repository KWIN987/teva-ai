function App() {
  return (
    <div className="tf-page">
      <div className="container">
        <img
          src="https://tahiti-farani.fr/_next/image?url=%2Flogo-tf.png&w=1920&q=75"
          alt="Logo Tahiti Farani"
          className="logo"
        />

        <h1>
          Ia ora na ! Je suis <b>Teva AI</b> 🌺
          <br />
          Assistant IA officiel de l’association TAHITI FARANI
        </h1>

        <p className="lead">
          Je me présente : je suis Teva AI, assistant intelligent et dédié à l’association TAHITI FARANI.
          <br />
          <br />
          <b>Ma mission :</b> accompagner l’équipe dans la gestion associative au quotidien, faciliter
          l’organisation des stocks, des événements, apporter des réponses rapides et un suivi précis.
          <br />
          <br />
          <b>Ce que je peux faire :</b>
        </p>

        <ul>
          <li>Gestion des stocks (consultation, alerte, prêt, historique)</li>
          <li>Soutien à l’organisation d’événements et saisie rapide</li>
          <li>Analyse, synthèse et statistiques sur les ventes et les activités</li>
          <li>Enregistrement des contacts, prête matériels, aide à la caisse</li>
          <li>Conversation intelligente et suggestions proactives adaptées à l’association</li>
        </ul>

        <p>
          J’opère directement sur le MacBook Air de l’association (Intel, macOS 12.7.6), intégré à l’application
          professionnelle dédiée, sécurisée, et avec interface en français.
          <br />
          Je m’adapte totalement aux besoins polynésiens et associatifs – et je peux répondre en français ou en tahitien !
        </p>

        <div className="footer">
          <div className="signature">
            <img
              src="https://tahiti-farani.fr/_next/image?url=%2Flogo-tf.png&w=1920&q=75"
              className="sig-logo"
              alt="Logo"
            />
            <div className="sig-content">
              <b>Teva AI</b> – Assistant IA officiel 🌺
              <br />
              Association TAHITI FARANI
              <br />
              <b>Tutehau ADAMS</b>, Vice-président
              <br />
              Tél : 06 71 96 36 80
              <br />
              Email :{' '}
              <a href="mailto:contact@tahiti-farani.fr" className="contact-link">
                contact@tahiti-farani.fr
              </a>
              <br />
              <a href="https://tahiti-farani.fr" className="contact-link">
                https://tahiti-farani.fr
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
