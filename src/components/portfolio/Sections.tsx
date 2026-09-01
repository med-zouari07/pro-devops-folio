import type { ReactNode } from "react";
import { useLang, tr } from "@/lib/i18n";
import resumeAsset from "@/assets/resume.pdf.asset.json";
import {
  activities,
  certifications,
  education,
  experience,
  languages,
  profile,
  projects,
  skills,
  stats,
  ui,
} from "@/data/resume";

function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-border/60 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-10 flex items-baseline gap-3">
          <span className="font-mono text-xs text-primary">{index}</span>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
          <span className="h-px flex-1 bg-border" />
        </div>
        {children}
      </div>
    </section>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded border border-border bg-secondary/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
      {children}
    </span>
  );
}

export function Hero() {
  const { lang } = useLang();
  return (
    <section
      id="top"
      className="grid-backdrop relative overflow-hidden border-b border-border/60"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-32">
        <p className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-card/60 px-3 py-1 font-mono text-[11px] text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {tr(ui.availability, lang)}
        </p>
        <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">{profile.name}</h1>
        <p className="mt-3 font-mono text-lg text-primary md:text-xl">
          {tr(profile.role, lang)} · {tr(profile.location, lang)}
        </p>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          {tr(profile.summary, lang)}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={resumeAsset.url}
            download={`CV_${profile.name.replace(/\s+/g, "_")}.pdf`}
            className="glow-card rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            {tr(ui.downloadCv, lang)}
          </a>
          <a
            href="#contact"
            className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            {tr(ui.getInTouch, lang)}
          </a>
        </div>

        <dl className="mt-14 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.value + tr(s.label, lang)} className="bg-card px-4 py-5">
              <dt className="font-mono text-2xl text-primary">{s.value}</dt>
              <dd className="mt-1 text-xs text-muted-foreground">{tr(s.label, lang)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function About() {
  const { lang } = useLang();
  return (
    <Section id="about" index="01" title={tr(ui.sections.about, lang)}>
      <div className="grid gap-6 md:grid-cols-3">
        <p className="text-sm leading-relaxed text-muted-foreground md:col-span-2">
          {tr(profile.summary, lang)}
        </p>
        <ul className="space-y-3 rounded-lg border border-border bg-card p-5 font-mono text-xs">
          <li className="flex justify-between gap-4">
            <span className="text-muted-foreground">location</span>
            <span>{tr(profile.location, lang)}</span>
          </li>
          {languages.map((l) => (
            <li key={tr(l.name, lang)} className="flex justify-between gap-4">
              <span className="text-muted-foreground">{tr(l.name, lang).toLowerCase()}</span>
              <span>{tr(l.level, lang)}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export function Experience() {
  const { lang } = useLang();
  return (
    <Section id="experience" index="02" title={tr(ui.sections.experience, lang)}>
      <ol className="relative space-y-8 border-l border-border pl-6">
        {experience.map((job) => (
          <li key={job.company + tr(job.period, lang)} className="relative">
            <span className="absolute -left-[1.72rem] top-2 h-2.5 w-2.5 rounded-full border border-primary bg-background" />
            <article className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/50">
              <header className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold">
                  {tr(job.title, lang)}{" "}
                  <span className="text-primary">· {job.company}</span>
                </h3>
                <p className="font-mono text-xs text-muted-foreground">{tr(job.period, lang)}</p>
              </header>
              <p className="mt-1 font-mono text-xs text-muted-foreground">{tr(job.place, lang)}</p>
              <ul className="mt-4 space-y-2">
                {tr(job.bullets, lang).map((b) => (
                  <li key={b} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {job.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Projects() {
  const { lang } = useLang();
  return (
    <Section id="projects" index="03" title={tr(ui.sections.projects, lang)}>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <article key={tr(p.title, lang)} className="rounded-lg border border-border bg-card p-6">
            <h3 className="text-lg font-semibold">{tr(p.title, lang)}</h3>
            <p className="mt-1 font-mono text-xs text-muted-foreground">{tr(p.period, lang)}</p>
            <ul className="mt-4 space-y-2">
              {tr(p.bullets, lang).map((b) => (
                <li key={b} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Skills() {
  const { lang } = useLang();
  return (
    <Section id="skills" index="04" title={tr(ui.sections.skills, lang)}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div key={tr(group.category, lang)} className="rounded-lg border border-border bg-card p-5">
            <h3 className="font-mono text-xs uppercase tracking-widest text-primary">
              {tr(group.category, lang)}
            </h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {group.items.map((i) => (
                <Tag key={i}>{i}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Education() {
  const { lang } = useLang();
  return (
    <Section id="education" index="05" title={tr(ui.sections.education, lang)}>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-4">
          {education.map((e) => (
            <article key={tr(e.degree, lang)} className="rounded-lg border border-border bg-card p-5">
              <h3 className="text-base font-semibold">{tr(e.degree, lang)}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{tr(e.school, lang)}</p>
              <p className="mt-1 font-mono text-xs text-primary">{tr(e.period, lang)}</p>
              {tr(e.note, lang) ? (
                <p className="mt-2 text-sm text-muted-foreground">{tr(e.note, lang)}</p>
              ) : null}
            </article>
          ))}
        </div>
        <div className="space-y-4">
          <div className="rounded-lg border border-border bg-card p-5">
            <h3 className="font-mono text-xs uppercase tracking-widest text-primary">
              {tr(ui.certTitle, lang)}
            </h3>
            <ul className="mt-3 space-y-2">
              {certifications.map((c) => (
                <li key={c.name} className="flex justify-between gap-3 text-sm">
                  <span>{c.name}</span>
                  <span className="font-mono text-xs text-muted-foreground">{c.issuer}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-card p-5">
            <h3 className="font-mono text-xs uppercase tracking-widest text-primary">
              {tr(ui.sections.activities, lang)}
            </h3>
            <ul className="mt-3 space-y-3">
              {activities.map((a) => (
                <li key={tr(a.period, lang)}>
                  <p className="text-sm font-medium">{tr(a.name, lang)}</p>
                  <p className="font-mono text-xs text-muted-foreground">{tr(a.period, lang)}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{tr(a.text, lang)}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Contact() {
  const { lang } = useLang();
  const items = [
    { label: "email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, "")}` },
    { label: "linkedin", value: "in/mohammedzouari", href: profile.linkedin },
    { label: "github", value: "med-zouari07", href: profile.github },
  ];

  return (
    <Section id="contact" index="06" title={tr(ui.sections.contact, lang)}>
      <p className="max-w-2xl text-sm text-muted-foreground">{tr(ui.contactIntro, lang)}</p>
      <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
        {items.map((i) => (
          <a
            key={i.label}
            href={i.href}
            target={i.href.startsWith("http") ? "_blank" : undefined}
            rel={i.href.startsWith("http") ? "noreferrer" : undefined}
            className="group bg-card px-5 py-5 transition-colors hover:bg-secondary"
          >
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              {i.label}
            </p>
            <p className="mt-1 text-sm text-foreground group-hover:text-primary">{i.value}</p>
          </a>
        ))}
      </div>
      <div className="mt-8">
        <a
          href={resumeAsset.url}
          download={`CV_${profile.name.replace(/\s+/g, "_")}.pdf`}
          className="glow-card inline-block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          {tr(ui.downloadCv, lang)}
        </a>
      </div>
    </Section>
  );
}

export function Footer() {
  const { lang } = useLang();
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 font-mono text-xs text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {profile.name}. {tr(ui.rights, lang)}
        </p>
        <p>{tr(profile.role, lang)}</p>
      </div>
    </footer>
  );
}
