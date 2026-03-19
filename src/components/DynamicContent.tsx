"use client";

import { useEffect, useState } from "react";
import { ContentSection as ContentSectionComponent } from "./ContentSection";
import { ContentData } from "@/types/content";

export const DynamicContent = () => {
  const [sections, setSections] = useState<ContentData>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch("/content.json");
        if (!response.ok) {
          throw new Error("Falha ao carregar conteúdo");
        }
        const data = await response.json();
        setSections(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro desconhecido");
        console.error("Erro ao carregar JSON:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  if (loading) {
    return <div>Carregando conteúdo...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <>
      {sections.map((section, index) => (
        <ContentSectionComponent key={index} section={section} />
      ))}
    </>
  );
};
