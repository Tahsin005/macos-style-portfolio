const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Articles", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: false,
    },
];

const blogPosts = [
    {
        id: 1,
        date: "Jan 2, 2026",
        title:
            "REST API Design: Building Intuitive and Consistent Interfaces",
        image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*Dn-E0HeJVWPg7yvWyk3dDw.png",
        link: "https://purpleonion.vercel.app/post/-rest-api-design-building-intuitive-and-consistent-interfaces",
    },
    {
        id: 2,
        date: "Dec 18, 2025",
        title: "gRPC: The Complete Guide for Backend Engineers",
        image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*4xVhhj5OMkVYXGZVYX-BGQ.png",
        link: "https://purpleonion.vercel.app/post/-grpc-the-complete-guide-for-backend-engineers",
    },
    {
        id: 3,
        date: "July 9, 2026",
        title: "Understanding Celery: Asynchronous Task Queues in Django",
        image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*aTH9Reaz_urPtQKtePoh4w.png",
        link: "https://purpleonion.vercel.app/post/-understanding-celery-asynchronous-task-queues-in-django",
    },
];

const techStack = [
    {
        category: "Languages",
        items: ["Python", "C++", "JavaScript", "TypeScript", "Golang"],
    },
    {
        category: "Frontend",
        items: ["React.js", "Next.js", "Tailwind CSS"],
    },
    {
        category: "Backend",
        items: [
            "Django",
            "DRF",
            "Gin",
            "Express.js",
            "Node.js",
            "Drizzle",
        ],
    },
    {
        category: "Databases",
        items: ["PostgreSQL", "MongoDB", "Redis"],
    },
    {
        category: "Tools & Platforms",
        items: ["Docker", "Git", "GitHub", "gRPC", "Stripe", "SSLCOMMERZ"],
    },
    {
        category: "Problem Solving",
        items: ["Codeforces", "Codechef", "Leetcode"],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/Tahsin005",
    },
    {
        id: 2,
        text: "Platform",
        icon: "/icons/atom.svg",
        bg: "#4bcb63",
        link: "https://tahsin-exe.vercel.app",
    },
    {
        id: 3,
        text: "Twitter/X",
        icon: "/icons/twitter.svg",
        bg: "#ff866b",
        link: "https://x.com/tahsin_cpp",
    },
    {
        id: 4,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://www.linkedin.com/in/md-tahsin-ferdous/",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];

const gallery = [
    {
        id: 1,
        img: "/images/gal1.png",
    },
    {
        id: 2,
        img: "/images/gal2.png",
    },
    {
        id: 3,
        img: "/images/gal3.png",
    },
    {
        id: 4,
        img: "/images/gal4.png",
    },
    {
        id: 5,
        img: "/images/gal5.png",
    },
];

export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1 (Affpilot)
        {
            id: 5,
            name: "Affpilot AI SaaS",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-5",
            windowPosition: "top-[5vh] left-5",
            children: [
                {
                    id: 1,
                    name: "Affpilot.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "Implemented Shopify, WordPress, and Blogger publishing integrations for AI-generated blog content automation.",
                        "Built a centralized Stripe and SSLCOMMERZ payment system.",
                        "Manages transactions across the product suite for over 1,000 active users.",
                        "Tech Stack: Django, PostgreSQL, React.js, Material UI, Stripe, SSLCOMMERZ.",
                    ],
                },
                {
                    id: 2,
                    name: "app.affpilot.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://app.affpilot.com",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "affpilot.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-1.png",
                },
                {
                    id: 5,
                    name: "GitHub.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://app.affpilot.com",
                    position: "top-60 right-20",
                },
            ],
        },

        // ▶ Project 2 (Northwind)
        {
            id: 6,
            name: "Northwind E-Commerce",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-32",
            windowPosition: "top-[10vh] left-10",
            children: [
                {
                    id: 1,
                    name: "Northwind.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "A modern retail platform that seamlessly integrates product management, secure checkout, and real-time customer support capabilities.",
                        "Architected a high-performance e-commerce ecosystem using React, Express, and PostgreSQL.",
                        "Engineered real-time customer support features by integrating Stream Chat and Video SDKs.",
                        "Tech Stack: React.js, Node.js, Express.js, PostgreSQL, Drizzle ORM, Tailwind CSS, Zustand, TanStack Query, Clerk, Polar API, Stream SDK, ImageKit, Sentry.",
                    ],
                },
                {
                    id: 2,
                    name: "northwind.vercel.app",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://northwind-kappa.vercel.app/",
                    position: "top-20 left-20",
                },
                {
                    id: 4,
                    name: "northwind.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/project-2.png",
                },
                {
                    id: 5,
                    name: "GitHub.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://github.com/Tahsin005/northwind",
                    position: "top-60 left-5",
                },
            ],
        },

        // ▶ Project 3 (Microservices)
        {
            id: 7,
            name: "Microservices Platform",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-60",
            windowPosition: "top-[15vh] left-15",
            children: [
                {
                    id: 1,
                    name: "Microservices.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "A robust, scalable, and containerized e-commerce backend platform built utilizing a microservices architecture.",
                        "Engineered a modular microservices architecture utilizing Node.js and Express.js.",
                        "Orchestrated inter-service communication by implementing gRPC for low-latency synchronous calls and an event-driven architecture using RabbitMQ.",
                        "Stack: Node.js, Express.js, JavaScript, MongoDB, Mongoose, Redis, RabbitMQ, gRPC, Docker.",
                    ],
                },
                {
                    id: 2,
                    name: "github.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/Tahsin005/ecommerce-microservices",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "microservices.jpg",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-3.jpg",
                },
                {
                    id: 5,
                    name: "GitHub.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://github.com/Tahsin005/ecommerce-microservices",
                    position: "top-60 right-20",
                },
            ],
        },

        // ▶ Project 4 (RAG Search Engine)
        {
            id: 8,
            name: "RAG Search Engine",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-[22rem]",
            windowPosition: "top-[20vh] left-20",
            children: [
                {
                    id: 1,
                    name: "RAG Engine.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "Engineered a comprehensive Retrieval-Augmented Generation (RAG) search engine implementing keyword (BM25/TF-IDF), semantic, and hybrid search paradigms.",
                        "Integrated Google GenAI and CLIP embeddings to enable complex multimodal image-to-text queries.",
                        "Generates context-aware, conversational responses with accurate source citations.",
                        "Stack: Python, Sentence Transformers, Google GenAI API, NLTK, NumPy, Pillow.",
                    ],
                },
                {
                    id: 4,
                    name: "rag.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/project-4.png",
                },
                {
                    id: 5,
                    name: "GitHub.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://github.com/Tahsin005/rag-search-engine",
                    position: "top-60 left-5",
                },
            ],
        },

        // ▶ Project 5 (Real-Time Weather Dashboard)
        {
            id: 12,
            name: "Weather Dashboard",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-40 left-5",
            windowPosition: "top-[40vh] left-20",
            children: [
                {
                    id: 1,
                    name: "Weather.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "Engineered a high-performance weather dashboard using React 19, TypeScript, and TanStack Query.",
                        "Seamlessly integrating OpenWeather APIs to deliver real-time metrics, comprehensive forecasts, and localized air quality indicators.",
                        "Developed an interactive Leaflet map system featuring dynamic weather tile overlays and coordinate-based location selection.",
                        "Stack: React 19, TypeScript, Vite, TanStack Query, Tailwind CSS, Leaflet, Zod, OpenWeather API.",
                    ],
                },
                {
                    id: 2,
                    name: "weather.vercel.app",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://realtime-weather-dashboard-delta.vercel.app/",
                    position: "top-20 left-20",
                },
                {
                    id: 4,
                    name: "weather.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/project-5.png",
                },
                {
                    id: 5,
                    name: "GitHub.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://github.com/Tahsin005/realtime-weather-dashboard",
                    position: "top-60 left-5",
                },
            ],
        },

        // ▶ Project 6 (AI Agent) - No Image
        {
            id: 9,
            name: "Autonomous AI Agent",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-40 left-32",
            windowPosition: "top-[25vh] left-5",
            children: [
                {
                    id: 1,
                    name: "AI Agent.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "A lightweight, autonomous AI agent that interprets natural language prompts to independently navigate codebases, find bugs, and execute code fixes.",
                        "Engineered an autonomous coding agent using the Google GenAI SDK (Gemini 2.5 Flash).",
                        "Developed a robust tool-calling architecture enabling the agent to autonomously explore directories, modify code, and safely execute Python scripts.",
                        "Stack: Python, Google GenAI SDK, Gemini API, python-dotenv, uv.",
                    ],
                },
                {
                    id: 5,
                    name: "GitHub.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://github.com/Tahsin005/somewhat-simple-ai-agent",
                    position: "top-60 right-20",
                },
            ],
        },

        // ▶ Project 7 (Database Backup Tool) - No Image
        {
            id: 10,
            name: "Database Backup Tool",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-40 left-60",
            windowPosition: "top-[30vh] left-10",
            children: [
                {
                    id: 1,
                    name: "Backup Tool.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "A command-line utility for automating PostgreSQL database backups, scheduling, and continuous health monitoring.",
                        "Engineered a Go-based CLI tool using Cobra to automate scheduled PostgreSQL backups, implementing background daemon management.",
                        "Developed a continuous database health monitoring system that triggers real-time alerts via Discord webhooks.",
                        "Stack: Go, PostgreSQL, Cobra, Discord API, Linux Daemons.",
                    ],
                },
                {
                    id: 5,
                    name: "GitHub.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://github.com/Tahsin005/database-backup-tool",
                    position: "top-60 left-5",
                },
            ],
        },

        // ▶ Project 8 (Leet-Daemon) - No Image
        {
            id: 11,
            name: "Leet-Daemon",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-40 left-[22rem]",
            windowPosition: "top-[35vh] left-15",
            children: [
                {
                    id: 1,
                    name: "Leet-Daemon.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "A scalable, LeetCode-style microservices platform for securely evaluating untrusted user code against predefined test cases.",
                        "Architected a distributed backend system using three Node.js/TypeScript microservices communicating via gRPC.",
                        "Engineered a highly secure, containerized evaluation worker using Docker to safely execute untrusted user code in complete isolation.",
                        "Stack: Node.js, TypeScript, Express.js, Docker, gRPC, BullMQ, Redis, MongoDB.",
                    ],
                },
                {
                    id: 5,
                    name: "GitHub.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://github.com/Tahsin005/leet-daemon",
                    position: "top-60 right-20",
                },
            ],
        },
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/tahsin.png",
        },
        {
            id: 2,
            name: "casual-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-28 right-72",
            imageUrl: "/images/tahsin-2.jpg",
        },
        {
            id: 3,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "Meet the Developer Behind the Code",
            image: "/images/tahsin.png",
            description: [
                "Hey! I’m Tahsin 👋, a Full Stack Developer who enjoys building scalable SaaS platforms and production-grade APIs.",
                "I specialize in Python, Django, and modern React.js/Node.js ecosystems—building everything from microservices to distributed task queues.",
                "I've designed end-to-end systems that serve over 1,000+ active users, and I'm backed by a strong competitive programming foundation.",
                "Outside of architecting backend workflows, you'll probably find me solving problems on Codeforces or tweaking UI layouts at 2AM 😅",
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            // href: "/files/resume.pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-40 left-80",
            imageUrl: "/images/trash-2.png",
        },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };