import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <div className="not-found-icon">
          <span>💜</span>
        </div>

        <h1 className="not-found-title">404</h1>

        <h2 className="not-found-subtitle">Página não encontrada</h2>

        <p className="not-found-text">
          Parece que o caminho que buscas não existe por aqui. Mas temos muito
          conteúdo incrível criado por <strong>mulheres na tecnologia</strong>{" "}
          esperando por você!
        </p>

        <div className="not-found-actions">
          <a href="/" className="btn-primary">
            🏠 Voltar para Home
          </a>
          <button onClick={() => window.history.back()} className="btn-ghost">
            ← Página anterior
          </button>
        </div>

        <p className="not-found-quote">
          "Nem todos os erros 404 são ruins — às vezes é uma oportunidade para
          descobrir algo novo!" ✨
        </p>
      </div>
    </div>
  );
};

export default NotFound;
