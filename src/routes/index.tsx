import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/lib/i18n";
import { Nav } from "@/components/portfolio/Nav";
import {
  About,
  Contact,
  Education,
  Experience,
  Footer,
  Hero,
  Projects,
  Skills,
} from "@/components/portfolio/Sections";
import { profile } from "@/data/resume";

const title = "Mohamed Zouari — DevOps Engineer Portfolio";
const description =
  "DevOps Engineer specialized in Kubernetes, Docker, CI/CD and observability on AWS, GCP and Azure. Experience, projects, skills and CV.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "DevOps Engineer",
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  url: profile.linkedin,
  sameAs: [profile.linkedin, profile.github],
  knowsAbout: ["Kubernetes", "Docker", "CI/CD", "Terraform", "Ansible", "Observability", "MLOps"],
};

function Index() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background font-sans text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
