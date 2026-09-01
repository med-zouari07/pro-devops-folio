import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Lang } from "@/data/resume";

type Ctx = { lang: Lang; setLang: (l: Lang) => void };

const LanguageContext = createContext<Ctx>({ lang: "en", setLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio-lang");
    if (stored === "fr" || stored === "en") setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("portfolio-lang", l);
    document.documentElement.lang = l;
  };

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  return useContext(LanguageContext);
}

/** Resolve a bilingual value (or a plain string) for the active language. */
export function tr<T>(value: T | Record<Lang, T>, lang: Lang): T {
  if (value && typeof value === "object" && lang in (value as Record<string, unknown>)) {
    return (value as Record<Lang, T>)[lang];
  }
  return value as T;
}
