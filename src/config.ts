export const siteConfig = {
  name: "Ken Newman - Cloud & DevOps Engineer ",
  title: "Strategic IT Leader | Cloud & DevOps Engineer",
  description:
    "Portfolio website of Ken Newman, a Strategic IT Leader and Cloud & DevOps Engineer specializing in secure, scalable, and automated infrastructure across AWS and Azure.",
  accentColor: "#1d4ed8",

  social: {
    email: "newmankendrick2@gmail.com",
    linkedin: "https://linkedin.com/in/kendrick-newman",
    twitter: "", // leave blank if not used
    github: "https://github.com/K-Newman43",
  },

  aboutMe:
    "I am a Strategic IT Leader and Cloud & DevOps Engineer with over 20 years of enterprise experience designing, automating, and securing cloud infrastructure across AWS and Azure. I specialize in CI/CD pipelines, Infrastructure as Code, Kubernetes orchestration, and cloud governance frameworks that improve reliability, reduce costs, and accelerate delivery. I combine hands-on engineering with executive-level leadership to modernize legacy systems, automate workflows, and drive cloud adoption across complex organizations.",

  skills: [
    // Cloud Platforms
    "AWS (EC2, S3, VPC, RDS, Lambda, CloudFormation)",
    "Azure (VMs, Blob Storage, AKS, Functions, Azure DevOps)",

    // Infrastructure as Code
    "Terraform (AWS & Azure)",
    "AWS CloudFormation",
    "Azure Resource Manager (ARM)",

    // CI/CD & DevOps
    "Azure DevOps Pipelines",
    "GitHub Actions",
    "Jenkins",
    "GitLab CI/CD",
    "AWS CodePipeline",

    // Containers & Orchestration
    "Docker",
    "Kubernetes (EKS, AKS)",
    "Helm",

    // Configuration Management
    "Ansible",
    "Azure Automation",

    // Monitoring & Security
    "Azure Monitor",
    "Azure Security Center",
    "AWS CloudWatch",
    "Prometheus",
    "Grafana",

    // Scripting & OS
    "Bash",
    "PowerShell",
    "Python",
    "Linux (Ubuntu, RHEL)",
    "Windows Server",

    // Methods & Frameworks
    "DevSecOps",
    "Agile",
    "SCRUM",
    "ITIL",
    "Risk Management",

    // Certifications
    "AWS Cloud Practitioner",
    "Microsoft Azure Fundamentals (AZ-900)",
    "AWS Solutions Architect – Associate (In Progress)",
    "Microsoft Azure Administrator (AZ-104 - In Progress)",
  ],

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
    },
    {
      name: "Azure DevOps Pipeline for Legacy Application Modernization",
      description:
        "Architected an Azure DevOps pipeline for a legacy .NET application, automating build, test, security scanning, and deployment to Azure App Service. Integrated Azure Key Vault for secrets and Azure Container Registry for image storage, establishing a complete DevSecOps workflow with governance via Azure Policy.",
      link: "",
      skills: [
        "Azure DevOps",
        ".NET",
        "Azure App Service",
        "Azure Key Vault",
        "Azure Container Registry",
        "DevSecOps",
        "Azure Policy",
      ],
    },
    {
      name: "Terraform-Driven Multi-Cloud Infrastructure",
      description:
        "Developed reusable Terraform modules for provisioning Azure Virtual Networks, Azure SQL Database, Azure Storage, and equivalent AWS services. Integrated cost management tagging and reporting with Azure Cost Management and AWS Cost Explorer, achieving a 25% reduction in cloud spending.",
      link: "",
      skills: [
        "Terraform",
        "Azure Virtual Network",
        "Azure SQL Database",
        "Azure Storage",
        "AWS",
        "Cost Optimization",
        "Azure Cost Management",
        "AWS Cost Explorer",
      ],
    },
  ],

  experience: [
    {
      company: "CloudSpace Consulting",
      title: "Cloud Engineer",
      dateRange: "2021 – 2024",
      bullets: [
        "Engineered and maintained automated CI/CD pipelines using Azure DevOps and GitHub Actions for multi-tier applications, achieving a 90% reduction in deployment time and enabling zero-downtime releases.",
        "Designed and deployed multi-cloud architectures using Terraform across AWS and Azure, managing VMs, storage, networking, and Kubernetes clusters (EKS/AKS).",
        "Migrated legacy on-premises applications to Azure Kubernetes Service (AKS) using Helm charts, reducing infrastructure costs by 35% through optimized resource allocation.",
        "Implemented Azure DevOps for end-to-end application lifecycle management, including Boards, Repos, and Pipelines for build and release automation.",
        "Configured Azure Security Center and AWS GuardDuty for continuous security monitoring and vulnerability assessment, resolving 50+ security findings.",
        "Developed Terraform templates for consistent environment provisioning across multiple business units, reducing manual setup time by 80%.",
      ],
    },
    {
      company: "Naval Sea Systems Command (NAVSEA)",
      title: "IT Asset Manager",
      dateRange: "2010 – 2020",
      bullets: [
        "Modernized IT service management using Azure Automation for routine maintenance and Azure Monitor for system performance tracking, improving operational efficiency by 40%.",
        "Led cloud adoption initiatives including migration of collaboration tools to Microsoft 365 and Azure Active Directory, enhancing security posture and user accessibility.",
        "Developed hybrid cloud strategies integrating on-premises infrastructure with Azure Arc-enabled services for unified management across environments.",
      ],
    },
  ],

  education: [
    {
      school: "Johns Hopkins University, Baltimore, MD",
      degree: "Master of Business Administration (MBA), Information Systems Management",
      dateRange: "Completed",
      achievements: [
        "Focused on Information Systems Management and technology leadership.",
        "Combined business strategy with cloud modernization and DevOps engineering.",
        "Strengthened expertise in organizational transformation and IT operations.",
      ],
    },
  ],
};
