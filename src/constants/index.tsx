import { Code, Briefcase, Cpu, Bot, Database } from "lucide-react";
import image from '../assets/image.png'

export const navItems = [
    {label: "Home", href: "#home"},
    {label: "About Me", href: "#about"},
    {label: "Portfolio", href: "#projects"},
    {label: "Services", href: "#services"},
    

]

export const stats = [
    {label: "Satisfied clients", value: "15"},
    {label: "Projects deployed", value: "20"},
    {label: "Years of experience", value: "3"},
    {label: "AI models built", value: "5"},
]

export interface Project {
    id: number;
  slug: string;
  title: string;
  description: string;
  problem_solved: string;
  fullDescription: string;
  features: string[];
  image: string;
  lessons: string;
  techStack: string[];
  githubLink: string;
  liveLink?: string;
  demo_video: string;
}

export const featured_projects: Project[] = [
      {
    id: 1,
    slug: "igbo-tts-model",
    title: "Igbo TTS Model",
    description: "A text-to-speech model that converts Igbo text into natural-sounding speech using deep learning techniques.",
    problem_solved: "",
    fullDescription: "",
      features: [],
    image: "https://images.unsplash.com/photo-1738574137970-bd59200dc6e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aWdibyUyMGxhbmd1YWdlfGVufDB8fDB8fHww",
    lessons:"",
    techStack: ["OrpheusTTS", "Python", "PyTorch"],
    githubLink: "https://huggingface.co/kosinebolisa/igbo-tts-model-2",
    liveLink: "",
    demo_video: ""
  },
    {
    id: 2,
    slug: "aura",
    title: "AURA",
    description: "An AI-powered human resource agent for HR teams in SME in Africa that streamlines recruitment, employee engagement, and performance evaluation processes.",
    problem_solved: "",
    fullDescription: "",
      features: [],
    image: image,
    lessons:"",
    techStack: ["React", "JavaScript", "N8N Automation"],
    githubLink: "https://github.com/AURA-HR-AI/AURAVersion1.git",
    liveLink: "https://aura-version1.vercel.app/",
    demo_video: ""
  },
  {
    id: 3,
    slug: "dermatology-rag-system",
    title: "Dermatology RAG System",
    description: "A retrieval-augmented generation system that answers patient questions on skin,hair and nail care",
    problem_solved: "The growing popularity of dermatology and skincare content online has led to increased misinformation, self-diagnosis, and advice from unqualified sources. Many individuals struggle to determine when their skin, hair, or nail conditions require professional dermatological care, while access to certified dermatologists remains limited due to high costs and specialist shortages. As a result, people often rely on generalized or unsuitable online recommendations, which may worsen their conditions. There is a need for an accessible and trustworthy system that provides expert-informed, personalized dermatological guidance and directs users to specialists when necessary.",
    fullDescription: "This project presents the design and implementation of a Retrieval-Augmented Generation (RAG)based dermatology assistance system aimed at providing accurate, personalized, and trustworthy information related to skin, hair, and nail conditions. The system is designed to support non-expert users by enabling them to ask natural language questions and receive expert-informed responses grounded in credible dermatological sources. Rather than relying solely on a language models internal knowledge, the system retrieves relevant medical information from a curated dermatology knowledge base and uses this information to generate responses. This approach reduces hallucinations, improves factual accuracy, and ensures recommendations are context-aware and evidence-based.",
      features: [
        "Interactive Q&A: Ask questions about skin, hair, and nail diseases in natural language",
        "Knowledge base: Curated dermatology resources such as Medical articles, Peer-reviewed journals, Trusted clinical guidelines",
        "Advanced Retrieval: Uses a sophisticated retrieval pipeline with a reranker (Cross-Encoder) for highly accurate context finding.",
        "Fast Generation: Powered by the incredibly fast Groq API with Llama 3 for near-instant answers.",
        "Open-Source Embeddings: Utilizes a local, open-source model from Hugging Face for text embeddings.",
        "Simple UI: Built with Streamlit for a clean and easy-to-use web interface."
    ],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    lessons:"",
    techStack: ["FAISS", "LangChain", "Streamlit", "Groq LLM"],
    githubLink: "https://github.com/kosivivian/dermatology_naive_rag_",
    liveLink: "",
    demo_video: "https://youtu.be/fDbByQda2P8"
  },
    {
    id: 4,
    slug: "biometric-attendance-sys",
    title: "Biometric Attendance System",
    description: "A biometric attendance system that uses fingerprint to accurately track employee attendance.",
    problem_solved: "",
    fullDescription: "",
      features: [],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYP_h4pMe5OgLyc4AnhhsbuHR-k_M0edMkDg&s",
    lessons:"",
    techStack: ["Java", "MySQL"],
    githubLink: "https://github.com/kosivivian/dermatology_naive_rag_",
    liveLink: "",
    demo_video: ""
  },
    {
    id: 5,
    slug: "agentic-ai",
    title: "Agentic AI",
    description: "",
    problem_solved: "",
    fullDescription: "",
      features: [],
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop",
    lessons:"",
    techStack: [],
    githubLink: "",
    liveLink: "",
    demo_video: ""
  },

]



interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const my_services: Service[] = [
  {
    icon: <Code className="w-12 h-12 text-[#BE99F9]" />,
    title: "Frontend Development",
    description:
      "Building modern, responsive web applications using React, TypeScript, and cutting-edge technologies. Creating intuitive user interfaces that deliver exceptional user experiences.",
  },
  {
    icon: <Briefcase className="w-12 h-12 text-[#BE99F9]" />,
    title: "Project Management",
    description:
      "Leading cross-functional teams to deliver AI and software projects on time. Implementing agile methodologies and ensuring clear communication between stakeholders.",
  },
  {
    icon: <Cpu className="w-12 h-12 text-[#BE99F9]" />,
    title: "Model Deployment",
    description:
      "Deploying machine learning models to production with scalable infrastructure. Setting up CI/CD pipelines, containerization, and cloud-based solutions for reliable ML systems.",
  },
  {
    icon: <Bot className="w-12 h-12 text-[#BE99F9]" />,
    title: "AI Agent Development",
    description:
      "Creating intelligent AI agents that automate complex tasks and workflows. Building autonomous systems that can reason, plan, and execute multi-step processes.",
  },
  {
    icon: <Database className="w-12 h-12 text-[#BE99F9]" />,
    title: "RAG Applications",
    description:
      "Developing Retrieval-Augmented Generation systems for enterprise knowledge bases. Combining LLMs with custom data sources for accurate, context-aware AI responses.",
  },
];