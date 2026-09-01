export type Lang = "en" | "fr";

type L<T> = Record<Lang, T>;

export const profile = {
  name: "Mohamed Zouari",
  role: { en: "DevOps Engineer", fr: "Ingénieur DevOps" } as L<string>,
  phone: "+216 94 922 833",
  email: "mohammed.zouari.tech@gmail.com",
  linkedin: "https://linkedin.com/in/mohammedzouari",
  github: "https://github.com/med-zouari07",
  location: { en: "Tunis, Tunisia", fr: "Tunis, Tunisie" } as L<string>,
  summary: {
    en: "DevOps Engineer with over 2 years of production experience deploying and operating microservices on AWS, GCP and Azure with Docker and Kubernetes. I design CI/CD pipelines (Jenkins, GitHub Actions, GitLab CI/CD) and build observability stacks with Prometheus, Grafana, Datadog, Jaeger and OpenTelemetry to keep applications reliable at scale — with a growing focus on MLOps.",
    fr: "Ingénieur DevOps avec plus de 2 ans d'expérience en production dans le déploiement et l'exploitation de microservices sur AWS, GCP et Azure avec Docker et Kubernetes. Je conçois des pipelines CI/CD (Jenkins, GitHub Actions, GitLab CI/CD) et des stacks d'observabilité avec Prometheus, Grafana, Datadog, Jaeger et OpenTelemetry pour garantir la fiabilité des applications à grande échelle — avec un intérêt croissant pour le MLOps.",
  } as L<string>,
};

export const stats: { value: string; label: L<string> }[] = [
  { value: "2+", label: { en: "Years in production", fr: "Ans en production" } },
  { value: "3", label: { en: "Cloud providers", fr: "Fournisseurs cloud" } },
  { value: "6", label: { en: "Engineering roles", fr: "Postes d'ingénierie" } },
  { value: "3", label: { en: "Certifications", fr: "Certifications" } },
];

export type Job = {
  title: L<string>;
  company: string;
  place: L<string>;
  period: L<string>;
  bullets: L<string[]>;
  tags: string[];
};

export const experience: Job[] = [
  {
    title: { en: "DevOps Engineer", fr: "Ingénieur DevOps" },
    company: "Platana",
    place: { en: "Sfax, Tunisia", fr: "Sfax, Tunisie" },
    period: { en: "Jun 2026 – Present", fr: "Juin 2026 – Aujourd'hui" },
    bullets: {
      en: [
        "Deployed and managed microservices on Google Cloud Platform using Kubernetes and Docker.",
        "Built and maintained CI/CD pipelines with GitLab, Linux and configuration management tooling.",
        "Improved observability with Datadog, Jaeger and the OpenTelemetry Collector.",
        "Supported the digitalization of the After-Sales Service (SAV) platform, troubleshooting production issues and ensuring reliability.",
      ],
      fr: [
        "Déploiement et gestion de microservices sur Google Cloud Platform avec Kubernetes et Docker.",
        "Construction et maintenance de pipelines CI/CD avec GitLab, Linux et des outils de gestion de configuration.",
        "Amélioration de l'observabilité avec Datadog, Jaeger et l'OpenTelemetry Collector.",
        "Accompagnement de la digitalisation de la plateforme SAV : résolution d'incidents en production et fiabilité applicative.",
      ],
    },
    tags: ["GCP", "Kubernetes", "Docker", "GitLab CI/CD", "Linux", "Datadog", "Jaeger", "OpenTelemetry"],
  },
  {
    title: { en: "IT Support Engineer", fr: "Ingénieur Support IT" },
    company: "Agile & Pioneering Technical Solutions LLC",
    place: { en: "Remote — Texas, USA", fr: "À distance — Texas, USA" },
    period: { en: "Feb 2026 – Jun 2026", fr: "Fév 2026 – Juin 2026" },
    bullets: {
      en: [
        "Managed Linux-based infrastructure and containerized applications with Docker.",
        "Automated build, deployment and release pipelines with GitHub Actions.",
        "Configured Nginx reverse proxy, HTTPS and deployment environments on VPS servers.",
      ],
      fr: [
        "Gestion d'une infrastructure Linux et d'applications conteneurisées avec Docker.",
        "Automatisation des pipelines de build, déploiement et release avec GitHub Actions.",
        "Configuration de reverse proxy Nginx, HTTPS et environnements de déploiement sur serveurs VPS.",
      ],
    },
    tags: ["Docker", "GitHub Actions", "Linux", "Nginx", "VPS", "Monitoring"],
  },
  {
    title: { en: "DevOps Engineer", fr: "Ingénieur DevOps" },
    company: "Discovery Intech",
    place: { en: "Tunis, Tunisia", fr: "Tunis, Tunisie" },
    period: { en: "Sep 2024 – Feb 2026", fr: "Sep 2024 – Fév 2026" },
    bullets: {
      en: [
        "Administered and optimized QAD Adaptive ERP in production on RHEL/CentOS.",
        "Designed and maintained Jenkins CI/CD pipelines inside a fully containerized ecosystem.",
        "Managed applications on Kubernetes and administered AWS infrastructure (EC2, S3, VPC).",
        "Implemented a complete observability stack with integrated monitoring and alerting.",
        "Automated infrastructure, SSL certificate deployment and service hardening with Ansible, Bash, Python and Nginx Proxy Manager.",
        "Mentored DevOps interns during their final-year graduation projects.",
      ],
      fr: [
        "Administration et optimisation de l'ERP QAD Adaptive en production sur RHEL/CentOS.",
        "Conception et maintenance de pipelines CI/CD Jenkins dans un écosystème entièrement conteneurisé.",
        "Gestion d'applications sur Kubernetes et administration de l'infrastructure AWS (EC2, S3, VPC).",
        "Mise en place d'une stack d'observabilité complète avec monitoring et alerting intégrés.",
        "Automatisation de l'infrastructure, du déploiement de certificats SSL et de la sécurisation des services avec Ansible, Bash, Python et Nginx Proxy Manager.",
        "Encadrement de stagiaires DevOps durant leurs projets de fin d'études.",
      ],
    },
    tags: ["Ansible", "Kubernetes", "Jenkins", "AWS", "Grafana", "Prometheus", "Loki", "Zabbix", "SSL/TLS", "RHEL", "QAD ERP"],
  },
  {
    title: { en: "DevOps Engineer — Final-Year Internship", fr: "Ingénieur DevOps — Stage de fin d'études" },
    company: "Discovery Intech",
    place: { en: "Tunis, Tunisia", fr: "Tunis, Tunisie" },
    period: { en: "Feb 2024 – Aug 2024", fr: "Fév 2024 – Août 2024" },
    bullets: {
      en: [
        "Designed and deployed a complete CI/CD infrastructure.",
        "Containerized frontend/backend applications and orchestrated multiple environments with Kubernetes.",
        "Implemented monitoring with real-time alerting through Slack.",
      ],
      fr: [
        "Conception et déploiement d'une infrastructure CI/CD complète.",
        "Conteneurisation d'applications frontend/backend et orchestration multi-environnements avec Kubernetes.",
        "Mise en place d'une solution de monitoring avec alerting temps réel via Slack.",
      ],
    },
    tags: ["Docker", "Kubernetes", "Jenkins", "Gitea", "SonarQube", "Nexus", "Prometheus", "Grafana", "AlertManager"],
  },
  {
    title: { en: "DevOps Engineer — Internship", fr: "Ingénieur DevOps — Stage" },
    company: "Primatec Engineering",
    place: { en: "Sfax, Tunisia", fr: "Sfax, Tunisie" },
    period: { en: "Jun 2023 – Aug 2023", fr: "Juin 2023 – Août 2023" },
    bullets: {
      en: [
        "Migrated CI/CD pipelines to a containerized architecture.",
        "Dockerized a multi-platform testing application.",
        "Configured Jenkins and GitLab CI pipelines tailored to team constraints.",
      ],
      fr: [
        "Migration des pipelines CI/CD vers une architecture conteneurisée.",
        "Dockerisation d'une application de test multi-plateforme.",
        "Configuration de pipelines Jenkins et GitLab CI adaptés aux contraintes de l'équipe.",
      ],
    },
    tags: ["Docker", "Jenkins", "GitLab CI", "C++"],
  },
  {
    title: { en: "Software Developer — Internship", fr: "Développeur logiciel — Stage" },
    company: "Lauterbach Consulting",
    place: { en: "Sfax, Tunisia", fr: "Sfax, Tunisie" },
    period: { en: "Jul 2022 – Aug 2022", fr: "Juil 2022 – Août 2022" },
    bullets: {
      en: [
        "Developed a supervision dashboard for Jenkins build results with automatic data refresh.",
        "Transformed and normalized CSV data into JSON for automated processing.",
      ],
      fr: [
        "Développement d'un tableau de bord de supervision des builds Jenkins avec rafraîchissement automatique.",
        "Transformation et normalisation de données CSV en JSON pour traitement automatisé.",
      ],
    },
    tags: ["Jenkins", "Python", "CSV/JSON", "Dashboard"],
  },
];

export const projects = [
  {
    title: { en: "MLOps CI/CD Platform on Kubernetes", fr: "Plateforme MLOps CI/CD sur Kubernetes" },
    period: { en: "Mar 2026 — Personal project", fr: "Mars 2026 — Projet personnel" },
    bullets: {
      en: [
        "End-to-end MLOps pipeline for training and deploying machine learning models.",
        "CI/CD workflow with GitHub Actions automating model testing and Kubernetes deployment.",
        "ML inference API containerized with FastAPI and deployed on a Kubernetes cluster.",
        "ML and system metrics monitored with Prometheus and Grafana.",
      ],
      fr: [
        "Pipeline MLOps de bout en bout pour l'entraînement et le déploiement de modèles de machine learning.",
        "Workflow CI/CD avec GitHub Actions automatisant les tests et le déploiement des modèles sur Kubernetes.",
        "API d'inférence ML conteneurisée avec FastAPI et déployée sur un cluster Kubernetes.",
        "Supervision des métriques ML et système avec Prometheus et Grafana.",
      ],
    },
    tags: ["Kubernetes", "Docker", "GitHub Actions", "FastAPI", "Prometheus", "Grafana", "Python"],
  },
];

export const skills: { category: L<string>; items: string[] }[] = [
  { category: { en: "Cloud", fr: "Cloud" }, items: ["AWS", "Azure", "GCP"] },
  { category: { en: "Containerization", fr: "Conteneurisation" }, items: ["Docker", "Kubernetes", "Docker Compose"] },
  { category: { en: "CI/CD & GitOps", fr: "CI/CD & GitOps" }, items: ["Jenkins", "GitLab CI/CD", "ArgoCD", "GitHub Actions", "SonarQube", "Nexus", "Gitea", "Git"] },
  { category: { en: "MLOps", fr: "MLOps" }, items: ["MLflow", "FastAPI", "Model Deployment", "Model Monitoring"] },
  { category: { en: "IaC & Automation", fr: "IaC & Automatisation" }, items: ["Ansible", "Terraform", "Bash", "Python"] },
  { category: { en: "Monitoring", fr: "Monitoring" }, items: ["Zabbix", "AlertManager"] },
  { category: { en: "Observability", fr: "Observabilité" }, items: ["Grafana", "Prometheus", "Loki", "ELK Stack", "Datadog", "Jaeger", "OpenTelemetry"] },
  { category: { en: "Systems & Virtualization", fr: "Systèmes & Virtualisation" }, items: ["Linux (RHEL, Ubuntu, CentOS)", "Windows", "KVM", "VMware", "Proxmox"] },
  { category: { en: "Networking", fr: "Réseaux" }, items: ["TCP/IP", "DNS", "VPN", "Nginx Proxy Manager", "SSL/TLS"] },
  { category: { en: "Databases", fr: "Bases de données" }, items: ["MySQL", "PostgreSQL"] },
];

export const education = [
  {
    degree: { en: "Engineering Degree in Telecommunications", fr: "Diplôme d'ingénieur en Télécommunications" },
    school: { en: "National Engineering School of Tunis (ENIT)", fr: "École Nationale d'Ingénieurs de Tunis (ENIT)" },
    period: { en: "Sep 2021 – Jun 2024", fr: "Sep 2021 – Juin 2024" },
    note: { en: "", fr: "" },
  },
  {
    degree: { en: "Preparatory Classes — Physics & Chemistry", fr: "Classes préparatoires — Physique & Chimie" },
    school: { en: "Preparatory Institute for Engineering Studies of Sfax (IPEIS)", fr: "Institut Préparatoire aux Études d'Ingénieurs de Sfax (IPEIS)" },
    period: { en: "Sep 2019 – Jul 2021", fr: "Sep 2019 – Juil 2021" },
    note: {
      en: "Ranked 109 / 1,300 in the National Entrance Examination to Engineering Schools.",
      fr: "Classé 109 / 1 300 au concours national d'entrée aux écoles d'ingénieurs.",
    },
  },
];

export const certifications = [
  { name: "Linux Foundation (LFS101)", issuer: "Linux Foundation" },
  { name: "Introduction to Kubernetes", issuer: "DataCamp" },
  { name: "Red Hat OpenShift", issuer: "Udemy" },
];

export const activities = [
  {
    name: "FabLab ENIT",
    period: { en: "2021 – Present", fr: "2021 – Aujourd'hui" },
    text: {
      en: "Technical projects and digital fabrication workshops.",
      fr: "Projets techniques et ateliers de fabrication numérique.",
    },
  },
  {
    name: { en: "Independent High Authority for Elections (ISIE)", fr: "Instance Supérieure Indépendante pour les Élections (ISIE)" },
    period: { en: "Sep 2019 – Dec 2019", fr: "Sep 2019 – Déc 2019" },
    text: {
      en: "Supported electoral operations and administrative processes during national elections.",
      fr: "Soutien aux opérations électorales et aux processus administratifs lors des élections nationales.",
    },
  },
];

export const languages: { name: L<string>; level: L<string> }[] = [
  { name: { en: "Arabic", fr: "Arabe" }, level: { en: "Native", fr: "Natif" } },
  { name: { en: "French", fr: "Français" }, level: { en: "B2", fr: "B2" } },
  { name: { en: "English", fr: "Anglais" }, level: { en: "B2", fr: "B2" } },
];

export const ui = {
  nav: {
    about: { en: "About", fr: "Profil" },
    experience: { en: "Experience", fr: "Expérience" },
    projects: { en: "Projects", fr: "Projets" },
    skills: { en: "Skills", fr: "Compétences" },
    education: { en: "Education", fr: "Formation" },
    contact: { en: "Contact", fr: "Contact" },
  },
  downloadCv: { en: "Download CV", fr: "Télécharger le CV" },
  getInTouch: { en: "Get in touch", fr: "Me contacter" },
  availability: { en: "Available for DevOps / SRE / MLOps roles", fr: "Disponible pour des postes DevOps / SRE / MLOps" },
  sections: {
    about: { en: "Profile", fr: "Profil" },
    experience: { en: "Experience", fr: "Expérience" },
    projects: { en: "Projects", fr: "Projets" },
    skills: { en: "Skills", fr: "Compétences" },
    education: { en: "Education & Certifications", fr: "Formation & Certifications" },
    activities: { en: "Activities", fr: "Activités associatives" },
    languages: { en: "Languages", fr: "Langues" },
    contact: { en: "Contact", fr: "Contact" },
  },
  contactIntro: {
    en: "Building reliable platforms, pipelines and observability. Reach out for opportunities or collaboration.",
    fr: "Plateformes fiables, pipelines et observabilité. Écrivez-moi pour toute opportunité ou collaboration.",
  },
  certTitle: { en: "Certifications", fr: "Certifications" },
  rights: { en: "All rights reserved.", fr: "Tous droits réservés." },
} satisfies Record<string, unknown>;
