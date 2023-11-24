export const toggleTheme = (theme) => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};

export const setInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    toggleTheme(savedTheme);
  }
};
