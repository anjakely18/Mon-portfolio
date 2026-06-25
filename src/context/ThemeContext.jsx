import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

/**
 * Contexte React exposant le thème actif et la fonction pour le basculer.
 * À consommer via le hook {@link useTheme}.
 */
export const ThemeContext = createContext(null);

/**
 * Fournisseur du contexte de thème.
 * Initialise le thème depuis le localStorage (défaut : "dark"),
 * synchronise la classe CSS sur <html> et persiste le choix utilisateur.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Arbre de composants enfants
 * @returns {JSX.Element}
 */
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") ?? "dark"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
