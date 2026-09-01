import { useLang, tr } from "@/lib/i18n";
import { ui, profile } from "@/data/resume";
import resumeAsset from "@/assets/resume.pdf.asset.json";

const links = [
  { href: "#about", key: "about" },
  { href: "#experience", key: "experience" },
  { href: "#projects", key: "projects" },
  { href: "#skills", key: "skills" },
  { href: "#education", key: "education" },
  { href: "#contact", key: "contact" },
] as const;

export function Nav() {
  const { lang, setLang } = useLang();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#top" className="font-mono text-sm font-bold tracking-tight text-primary">
          mz<span className="text-muted-foreground">@devops</span>:~$
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <li key={l.key}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {tr(ui.nav[l.key], lang)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="flex overflow-hidden rounded-md border border-border font-mono text-xs">
            {(["en", "fr"] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={
                  "px-2.5 py-1.5 uppercase transition-colors " +
                  (lang === l
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground")
                }
              >
                {l}
              </button>
            ))}
          </div>
          <a
            href={resumeAsset.url}
            download={`CV_${profile.name.replace(/\s+/g, "_")}.pdf`}
            className="rounded-md border border-primary/60 px-3 py-1.5 font-mono text-xs text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            {tr(ui.downloadCv, lang)}
          </a>
        </div>
      </nav>
    </header>
  );
}
