import { 
  Server, 
  Cloud, 
  Code2, 
  Activity, 
  Shield, 
  Terminal,
  Github,
  Linkedin,
  Mail,
  MessageSquare
} from 'lucide-react';

export const personalInfo = {
  name: "Emmanuel Kwaku Appiah",
  title: "Designing and operating real-world production systems across cloud, networking, and payment infrastructure.",
  location: "Accra, Ghana",
  email: "emmanuel.appiah.dev@gmail.com",
  github: "https://github.com/MrOmarJnr",
  linkedin: "https://www.linkedin.com/in/emmanuel-appiah-884b45aa/",
  whatsapp: "https://wa.me/233543150780",
  resumeUrl: "https://drive.google.com/file/d/1GU7jRG3YwZeN0zS-jI4i2AoP4HJXtK4q/view?usp=drive_link",
  about: "Systems engineer with hands-on experience building and maintaining high-availability cloud infrastructure and automated deployment pipelines. Specialized in bridging the gap between development and operations through container orchestration, infrastructure-as-code, and proactive monitoring. Proven track record of delivering production-grade platforms that scale to meet enterprise and government demands.",
};

export const skillGroups = [
  {
    title: "DevOps & Automation",
    icon: Terminal,
    skills: ["Docker", "Kubernetes", "Terraform", "Ansible", "Jenkins", "GitHub Actions", "CI/CD Pipelines"]
  },
  {
    title: "Cloud Infrastructure",
    icon: Cloud,
    skills: ["AWS (EC2, S3, VPC, IAM)", "CloudFormation", "Linux (Ubuntu/CentOS)", "Nginx", "SSL Automation"]
  },
  {
    title: "Backend & Systems",
    icon: Code2,
    skills: ["Node.js", "Python", "Bash Scripting", "REST APIs", "MySQL", "PostgreSQL", "MariaDB"]
  },
  {
    title: "Monitoring & Insights",
    icon: Activity,
    skills: ["Prometheus", "Grafana", "CloudWatch", "Data Visualization", "Performance Dashboards"]
  },
  {
    title: "Infrastructure & Networking",
    icon: Server,
    skills: ["MikroTik API", "RADIUS", "VPNs", "Network Automation", "Hybrid Cloud Connectivity"]
  }
];

export const productionSystems = [
  "ISP authentication & billing systems (MikroTik + RADIUS)",
  "USSD-based payment integrations (Hubtel)",
  "Real-time user provisioning and access control systems",
  "Hybrid infrastructure combining cloud and network-layer automation"
];

export const projects = [
  {
    title: "Multi-Tenant ISP Authentication & Billing Platform",
    problem: "ISPs and hotspot providers lacked flexible systems for managing user authentication, bandwidth control, and real-time payments.",
    solution: "Designed a platform integrating MikroTik routers with a RADIUS backend, enabling dynamic user authentication and bandwidth control. Integrated USSD-based payment flows (Hubtel) to automate plan activation and user provisioning.",
    impact: "Handled real-time authentication and payment-triggered provisioning across network infrastructure.",
    tech: ["Node.js", "MySQL", "RADIUS", "MikroTik API", "USSD (Hubtel)", "Docker"],
    deployment: "On-Premise + Cloud Hybrid | Dockerized RADIUS",
    flow: ["User (USSD/Web)", "Payment API (Hubtel)", "Radius Server", "MikroTik Router", "Internet Access"]
  },
  {
    title: "ClearEnroll Platform Infrastructure",
    problem: "The client needed a scalable, containerized production environment to handle high-volume enrollment services with zero-downtime deployments.",
    solution: "Architected and deployed a multi-container environment using Docker Compose and Nginx on AWS EC2. Implemented a robust CI/CD pipeline using GitHub Actions and Docker Hub for automated builds and versioned deployments.",
    impact: "Achieved automated deployment workflows with Watchtower, significantly reducing manual overhead and ensuring 99.9% system reliability during peak loads.",
    tech: ["Docker", "AWS EC2", "Nginx", "GitHub Actions", "Node.js", "MySQL"],
    deployment: "Live on AWS EC2 | Docker + Nginx",
    flow: ["User", "Nginx (Reverse Proxy)", "App (Node.js)", "Database (MySQL)", "Watchtower (Auto-update)"]
  },
  {
    title: "Government Digital Performance Dashboards",
    problem: "Government agencies lacked real-time visibility into infrastructure performance and digital service adoption metrics.",
    solution: "Developed a centralized monitoring suite using Node.js, Grafana, and Prometheus. Integrated data from various sources to provide actionable insights via real-time dashboards.",
    impact: "Enhanced data-driven decision-making by 30% for stakeholders and reduced issue resolution time by 20% through proactive alerting.",
    tech: ["Node.js", "Grafana", "Prometheus", "Linux"],
    deployment: "Production Monitoring Stackh",
    flow: ["Infrastructure", "Prometheus (Scraper)", "Grafana (Visualizer)", "Stakeholders (Insights)"]
  },
  {
    title: "Automated SSL & Compliance Engine",
    problem: "Manual SSL certificate renewals and compliance checks were prone to human error, leading to service interruptions and security risks.",
    solution: "Engineered an automation tool for SSL renewal tracking and backup verification. Implemented automated compliance solutions to ensure data integrity.",
    impact: "Reduced manual processes by 50%, improved responsiveness by 70%, and mitigated data loss risks by 90%.",
    tech: ["Python", "Bash", "SSL/TLS", "AWS", "Automation"],
    deployment: "Internal Automation Service ",
    flow: ["Cron/Trigger", "Python Script", "AWS API / SSL Certs", "S3 (Backups)", "Alerts (Slack/Email)"]
  }
];

export const experience = [
  {
    company: "LEF Signature",
    role: "Software Engineer / IT Officer",
    period: "10/2025 - Present",
    description: "Leading the infrastructure design for the ClearEnroll platform. Supervising a cross-functional team building mobile and web applications while ensuring stable production releases on AWS.",
    highlights: [
      "Designed and deployed containerized production environment for ClearEnroll using Docker, Nginx, and MySQL on AWS EC2.",
      "Implemented CI/CD pipelines with GitHub Actions and Docker Hub to automate application builds and deployments.",
      "Automated container updates using Watchtower, reducing manual deployment effort and improving system reliability.",
      "Troubleshoot and maintain Linux-based server environments, ensuring high availability of services."
    ]
  },
  {
    company: "SmartInfraco Limited",
    role: "Project Engineer",
    period: "07/2023 - 12/2025",
    description: "Conducted digital infrastructure assessments for government agencies. Designed containerized deployments that improved release efficiency by 60%.",
    highlights: [
      "Designed containerized deployments using Docker & Kubernetes, improving release efficiency by 60% and reducing downtime.",
      "Developed real-time digital performance dashboards using Node.js and cloud serversfor government clients.",
      "Implemented automated backup and compliance solutions, reducing risks of data loss by 90%.",
      "Automated SSL renewal tracking, cutting manual processes by 50% and improving responsiveness by 70%."
    ]
  },
  {
    company: "Huawei",
    role: "Automations & Operating Systems Engineer",
    period: "05/2019 - 06/2023",
    description: "Led remote team operations during COVID-19 ensuring 99.9% uptime. Automated reporting pipelines that reduced manual workload by 70%.",
    highlights: [
      "Automated pipelines and reporting (Python, Bash), reducing manual reporting workload by 70%.",
      "Led remote team operations during COVID-19, ensuring 99.9% uptime and operational continuity.",
      "Partnered with multi-stakeholder teams to implement monitoring and automation tools, boosting productivity by 90%.",
      "Conducted market analysis of OSS tools and cloud technologies, advising on modernization strategies."
    ]
  }
];
