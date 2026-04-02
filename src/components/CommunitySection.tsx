const CommunitySection = () => {
  return (
    <section className="community" id="sobre">
      <div className="container community-content">
        <div className="community-text">
          <h2>Construa com a gente 🩷</h2>
          <p>
            Este projeto é <strong>Open Source</strong> e feito para amplificar
            vozes femininas na tecnologia.
          </p>
          <p>
            Conhece um conteúdo incrível criado por uma mulher? Faça um fork,
            adicione ao projeto e envie seu Pull Request.
          </p>
        </div>
        <div className="community-actions">
          <a
            href="https://github.com/laisfrigerio/mulheres-na-tecnologia"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-github"
          >
            ⭐ Contribuir no GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
