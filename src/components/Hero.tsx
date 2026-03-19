"use client";

export const Hero = () => {
  return (
    <header className="hero container">
      <div className="hero-content">
        <h1>
          O futuro da tecnologia tem{" "}
          <span>
            <br /> voz feminina
          </span>{" "}
          ✨
        </h1>
        <p>
          Uma curadoria contínua de conteúdos produzidos por mulheres —
          organizada por categorias e temas relevantes da tecnologia.
        </p>

        <div className="hero-categories">
          <span>Artigos</span>
          <span>Eventos</span>
          <span>Cursos</span>
          <span>Livros</span>
          <span>Vídeos</span>
        </div>

        <div className="hero-actions">
          <a href="#conteudos" className="btn-primary">
            Explorar conteúdos
          </a>
          <a href="#sobre" className="btn-ghost">
            Sobre o projeto
          </a>
        </div>
      </div>

      <div className="hero-image" />
    </header>
  );
};
