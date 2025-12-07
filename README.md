### Example structures

Here's what the config data structure looks like for each section:

```typescript
name: "Ken Newman - Cloud & DevOps Engineer ",
title: "Strategic IT Leader | Cloud & DevOps Engineer",
description:
  "Portfolio website of Ken Newman, a Strategic IT Leader and Cloud & DevOps Engineer specializing in secure, scalable, and automated infrastructure across AWS and Azure.",
accentColor: "#1d4ed8",

social: {
  email: "newmankendrick2@gmail.com",
  linkedin: "https://linkedin.com/in/kendrick-newman",
  github: "https://github.com/K-Newman43",
  twitter: "", // leave blank if not used
},

aboutMe:
  "I am a Strategic IT Leader and Cloud & DevOps Engineer with over 20 years of enterprise experience designing, automating, and securing cloud infrastructure across AWS and Azure. I specialize in CI/CD pipelines, Infrastructure as Code, Kubernetes orchestration, and cloud governance frameworks that improve reliability, reduce costs, and accelerate delivery. I combine hands-on engineering with executive-level leadership to modernize legacy systems, automate workflows, and drive cloud adoption across complex organizations.",
```

#### Skills
```typescript
skills: [
  "AWS (EC2, S3, VPC, RDS, Lambda, CloudFormation)",
  "Azure (VMs, Blob Storage, AKS, Functions, Azure DevOps)",
  "Terraform (AWS & Azure)",
  "Docker",
  "Kubernetes (EKS, AKS)",
  // ... and more
]
```

#### Projects
```typescript
projects: [
  {
    name: "Multi-Cloud Kubernetes Cluster Automation",
    description:
      "Built Terraform modules to deploy highly available Kubernetes clusters on AWS EKS and Azure AKS, enabling workload portability and disaster recovery. Implemented Azure DevOps pipelines with Helm-based deployments and configured Prometheus and Grafana for cross-cloud monitoring, reducing MTTR by 45%.",
    link: "",
    skills: [
      "Terraform",
      "AWS EKS",
      "Azure AKS",
      "Azure DevOps",
      "Helm",
      "Prometheus",
      "Grafana",
      "Kubernetes",
    ],
  }
]
```
#### Experience
```typescript
experience: [
  {
    company: "CloudSpace Consulting",
    title: "Cloud Engineer",
    dateRange: "2021 – 2024",
    bullets: [
      "Engineered and maintained automated CI/CD pipelines using Azure DevOps and GitHub Actions for multi-tier applications, achieving a 90% reduction in deployment time and enabling zero-downtime releases.",
      "Designed and deployed multi-cloud architectures using Terraform across AWS and Azure, managing VMs, storage, networking, and Kubernetes clusters (EKS/AKS).",
      "Migrated legacy on-premises applications to Azure Kubernetes Service (AKS) using Helm charts, reducing infrastructure costs by 35% through optimized resource allocation.",
    ],
  }
]
```

## Project Structure

```
devportfolio/
├── public/
│   └── favicon.svg          # Site favicon
├── src/
│   ├── components/          # Astro components
│   │   ├── About.astro      # About section
│   │   ├── Education.astro  # Education section
│   │   ├── Experience.astro # Work experience section
│   │   ├── Footer.astro     # Site footer
│   │   ├── Header.astro     # Navigation header
│   │   ├── Hero.astro       # Hero/intro section
│   │   └── Projects.astro   # Projects showcase
│   ├── pages/
│   │   └── index.astro      # Main page layout
│   ├── styles/
│   │   └── global.css       # Global styles
│   └── config.ts            # Site configuration
├── astro.config.mjs         # Astro configuration
├── package.json             # Project dependencies
├── tailwind.config.js       # Tailwind configuration
└── tsconfig.json            # TypeScript configuration
```

## Local Development

If you'd like to run it locally:

```
git clone https://github.com/K-Newman43
cd devportfolio
npm install
```

After that, start up the Astro dev server with:

```
npm run dev
```

## Changelog

To view the changelog, see CHANGELOG.md.

## License

This project is fully and completely MIT. See LICENSE.md.

