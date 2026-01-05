import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

// 1. Definisikan Tipe Data
type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// 2. Buat Context dengan nilai default null
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 3. Buat Provider Component
export function ThemeProvider({ children }: { children: ReactNode }) {
  // Default state 'light' dulu untuk menghindari error hydration
  const [theme, setTheme] = useState<Theme>("light");

  // --- EFFECT 1: Load saat awal mount (Sync dengan LocalStorage/System) ---
  useEffect(() => {
    // Cek apakah di localStorage ada data?
    const savedTheme = localStorage.getItem("admin-theme-mode") as Theme | null;

    // Cek apakah user punya preferensi sistem dark mode?
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme) {
      setTheme(savedTheme);
      // Sync DOM langsung biar yakin
      if (savedTheme === "dark") document.documentElement.classList.add("dark");
    } else if (systemPrefersDark) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  // --- FUNCTION: Toggle Theme ---
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    // 1. Simpan ke LocalStorage
    localStorage.setItem("admin-theme-mode", newTheme);

    // 2. Ubah Class di HTML (untuk Tailwind)
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 4. Custom Hook biar gampang dipanggil
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
