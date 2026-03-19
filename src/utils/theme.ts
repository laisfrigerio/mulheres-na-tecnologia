export type Theme = "light" | "dark";

export const initializeTheme = (): Theme => {
  if (typeof window === "undefined") return "light";

  const savedTheme = localStorage.getItem("theme") as Theme | null;
  return savedTheme || "light";
};

export const setTheme = (theme: Theme): void => {
  if (typeof window === "undefined") return;

  document.body.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};

export const toggleTheme = (currentTheme: Theme): Theme => {
  const newTheme = currentTheme === "light" ? "dark" : "light";
  setTheme(newTheme);
  return newTheme;
};
