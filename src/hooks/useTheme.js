import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

/**
 * Hook permettant d'accéder au contexte de thème de l'application.
 * Doit être utilisé dans un composant enfant de ThemeProvider.
 *
 * @throws {Error} Si utilisé en dehors d'un ThemeProvider
 * @returns {{ theme: string, toggleTheme: function }} Le thème actif et la fonction pour le basculer
 */
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};

export default useTheme;
