const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="site-footer"
      itemScope
      itemType="https://schema.org/Person"
    >
      <div className="container footer-grid">
        {/* COLUNA 1 - CRIADORA */}
        <div className="footer-column">
          <h3 className="footer-title">
            Criado por <span itemProp="name">Lais Frigerio</span> 👩‍💻
          </h3>

          <p className="footer-description" itemProp="description">
            Engenheira de Software • AWS Certified • Criadora de conteúdo
          </p>

          <nav className="footer-social" aria-label="Redes sociais">
            <a
              href="https://github.com/laisfrigerio"
              target="_blank"
              rel="noopener"
              itemProp="sameAs"
            >
              GitHub
            </a>
            <a
              href="https://www.instagram.com/laisfrigerio"
              target="_blank"
              rel="noopener"
              itemProp="sameAs"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/laisfrigerio/"
              target="_blank"
              rel="noopener"
              itemProp="sameAs"
            >
              LinkedIn
            </a>
            <a
              href="https://www.youtube.com/@laisfrigerio"
              target="_blank"
              rel="noopener"
              itemProp="sameAs"
            >
              YouTube
            </a>
          </nav>
        </div>

        {/* COLUNA 2 - PROJETO */}
        <div
          className="footer-column"
          itemScope
          itemType="https://schema.org/WebSite"
        >
          <h3 className="footer-title">Sobre o projeto ✨</h3>

          <p className="footer-description" itemProp="description">
            Mulheres na Tecnologia é uma iniciativa open source criada para
            amplificar vozes femininas na tecnologia, conectar comunidades e
            facilitar o acesso a conteúdos de qualidade criados por mulheres no
            Brasil.
          </p>

          <meta itemProp="name" content="Mulheres na Tecnologia" />
          <meta
            itemProp="url"
            content="https://www.mulheresnatecnologia.com.br/"
          />
        </div>
      </div>

      {/* Linha inferior */}
      <div className="footer-bottom">
        <p>©{year} Mulheres na Tecnologia • Projeto Open Source</p>
      </div>
    </footer>
  );
};

export default Footer;
