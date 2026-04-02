import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Handle SPA routing for GitHub Pages 404.html redirect
const params = new URLSearchParams(window.location.search);
const redirectRoute = params.get("route");

if (redirectRoute) {
  // Limpar a query string e atualizar o histórico com a rota correta
  const basePath = import.meta.env.BASE_URL || "/mulheres-na-tecnologia/";
  const newPath = basePath + redirectRoute;
  window.history.replaceState(null, "", newPath);
}

createRoot(document.getElementById("root")!).render(<App />);
