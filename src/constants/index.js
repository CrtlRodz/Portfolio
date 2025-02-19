import { meta, Gic, CloudSmiths, tesla } from "../assets/images";
import {
    camera,
    car,
    contact,
    css,
    estate,
    portfolio,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    handshake,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    gym,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        id: "0",
        title: "Software Engineer",
        company_name: "CloudSmiths",
        icon: CloudSmiths,
        iconBg: "#accbe1",
        date: "Aug 2022 -Present",
        points: [
            "Developing and maintaining full-stack applications using Django, FastAPI, React, and TypeScript.",
            "Integrating third-party APIs, designing secure authentication systems, and optimizing application performance.",
            "Implementing automated testing with Cypress, Jest, and Pytest to ensure software reliability and quality.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        id: "1",
        title: "Software Developer",
        company_name: "Gap Infrastructure Corporation - GIC",
        icon: Gic,
        iconBg: "#fbc3bc",
        date: "Feb 2022 - Jul 2022",
        points: [
            "Developing custom tools and features to enhance software functionality and user experience.",
            "Building front-end solutions with Angular and back-end services using FastAPI and Python.",
            "Diagnosing and resolving complex system issues to ensure stability and minimize disruptions."
        ]
    },
    {
        id: "2",
        title: "Web Developer",
        company_name: "Gap Infrastructure Corporation - GIC",
        icon: Gic,
        iconBg: "#b7e4c7",
        date: "Apr 2021 - Jan 2022",
        points: [
            "Designing, developing, and maintaining scalable and efficient software systems.",
            "Managing SQL and NoSQL databases, ensuring optimal data architecture and performance.",
            "Automating system maintenance and monitoring to enhance efficiency and reliability."
        ]
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/CrtlRodz',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/cari-anne-moore/',
    }
];

export const projects = [
    {
        iconUrl: camera,
        theme: 'btn-back-red',
        name: 'CaptureIT',
        description: 'CaptureIT is a full-stack application designed for capturing, storing, and managing multimedia data (images, videos, documents) efficiently. The front-end is developed using Angular, providing a responsive and interactive user experience, while the back-end, built with Python and Flask, handles data processing, storage, and retrieval ',
        link: 'https://github.com/CrtlRodz/CaptureIT',
    },
    {
        iconUrl: gym,
        theme: 'btn-back-green',
        name: 'EvoGym',
        description: 'EvoGym is a dynamic fitness platform offering exclusive access to live and on-demand gym classes for all fitness levels. With a user-friendly experience, EvoGym connects you to top trainers and personalized workouts, helping you achieve your fitness goals anytime, anywhere. ',
        link: 'https://github.com/CrtlRodz/EvoGym',
    },
    {
        iconUrl: handshake,
        theme: 'btn-back-blue',
        name: 'Grogu voice activated assistant',
        description: 'Grogu is a Python-powered voice assistant capable of performing tasks like playing YouTube videos, telling jokes, retrieving stock prices, and more—all through voice commands.',
        link: 'https://github.com/CrtlRodz/GroguVAassitant',
    },
    {
        iconUrl: portfolio,
        theme: 'btn-back-pink',
        name: 'First Portfolio',
        description: 'The first version of ctrlrodz.dev, built with Angular and hosted on Vercel. It features a simple setup using Angular CLI, NVM for Node management, and supports both development and production builds.',
        link: 'https://github.com/CrtlRodz/FirstPortfolio',
    },
];