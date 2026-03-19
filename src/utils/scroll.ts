export const handleBackToTopVisibility = (
  button: HTMLElement,
  threshold = 300,
): void => {
  if (window.scrollY > threshold) {
    button.classList.add("show");
  } else {
    button.classList.remove("show");
  }
};

export const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const getCurrentYear = (): number => {
  return new Date().getFullYear();
};
