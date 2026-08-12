import project1 from '../assets/img/project1.png';
import project2 from '../assets/img/project2.png';
import project3 from '../assets/img/project3.png';
import projectDataPipeline from '../assets/img/project_data_pipeline.png';

export const featuredProjects = [
    {
        title: "Lakehouse Data Pipeline",
        category: "DATA ENGINEERING",
        description: "A cloud-based data engineering pipeline demonstrating distributed processing, lakehouse architecture, and scalable data transformation using Spark-based technologies.",
        highlights: [
            "Distributed processing with PySpark and Apache Spark",
            "Cloud-based data storage and pipeline architecture",
            "Apache Iceberg for reliable analytical tables and schema evolution"
        ],
        technologies: ["PySpark", "Databricks", "AWS (S3/EC2)", "Apache Iceberg"],
        image: projectDataPipeline,
        accent: "indigo",
        links: [
            { label: "See Experience", href: "#experience", type: "href" }
        ]
    },
    {
        title: "Real-Time Chat Application",
        category: "FULL-STACK APPLICATION",
        description: "A full-stack real-time messaging platform with Google OAuth, Socket.IO, and MongoDB.",
        highlights: [
            "Implemented Google OAuth authentication and persistent chat history.",
            "Built real-time messaging, media sharing, and online status indicators.",
            "Designed incognito mode for transient, memory-only conversations."
        ],
        technologies: ["React", "Node.js", "Socket.IO", "MongoDB", "Google OAuth"],
        image: project1,
        accent: "cyan",
        links: [
            { label: "Live Demo", href: "https://vishwas-frontend-whats.netlify.app/", type: "live" },
            { label: "Frontend", href: "https://github.com/VKspyder2003/whatsapp-frontend", type: "github" },
            { label: "Backend", href: "https://github.com/VKspyder2003/whatsapp-backend", type: "github" }
        ]
    }
];

export const otherProjects = [
    {
        title: "AI Chess Arena",
        category: "AI / FULL-STACK",
        description: "An interactive AI-powered chess platform enabling autonomous gameplay between Large Language Models (LLMs).",
        highlights: [
            "Implemented FEN-based game state management and dynamic move generation.",
            "Multi-provider LLM integrations (OpenAI, Groq, and OpenRouter APIs).",
            "Built a live dashboard for move history, model response time, and game state."
        ],
        technologies: ["React", "Node.js", "LLM APIs", "Chess.js", "Socket.IO"],
        image: project3,
        accent: "purple",
        links: [
            { label: "Live Demo", href: "https://chess-vishwas.netlify.app/", type: "live" },
            { label: "Frontend", href: "https://github.com/VKspyder2003/chess-frontend", type: "github" },
            { label: "Backend", href: "https://github.com/VKspyder2003/chess-backend", type: "github" }
        ]
    },
    {
        title: "Vulnerability Scanner",
        category: "CYBERSECURITY",
        description: "Python-based web security assessment tool for crawling websites and identifying reflected XSS patterns.",
        highlights: [
            "Automated crawling of internal URLs and form elements.",
            "Reflected XSS detection using payload insertion and DOM verification.",
            "CLI reporting summarizing crawled paths and detected vulnerabilities."
        ],
        technologies: ["Python", "Cybersecurity", "Networking", "Automation"],
        image: project2,
        accent: "orange",
        links: [
            { label: "Source Code", href: "https://github.com/VKspyder2003/", type: "github" }
        ]
    }
];
