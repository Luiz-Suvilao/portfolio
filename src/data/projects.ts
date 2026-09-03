import AG from "../public/preview-projects/a-g.png";
import AJM from "../public/preview-projects/ajm.png";
import LojaPreview from "../public/preview-projects/loja_preview.png";
import {Project} from "../components/ProjectCard";

export const projects: Project[] = [
    {
        id: 1,

        featured: true,

        title: "MAG Seguros",

        company: "MAG Seguros",

        role: "Full Stack Developer",

        period: "2020 - Atual",

        description:
            "Atuação no desenvolvimento e manutenção dos canais digitais da MAG Seguros, participando da evolução de aplicações utilizadas por milhares de clientes e corretores.",

        technologies: [
            "React",
            "Angular",
            "TypeScript",
            "PHP",
            "Laravel",
            ".NET",
            "SQL Server",
        ],

        website: "https://loja.mag.com.br/magpravoce",

        github: null,

        image: LojaPreview,
    },

    {
        id: 2,

        featured: false,

        title: "AJM Machine",

        company: "Cliente",

        role: "Frontend Developer",

        period: "Freelancer",

        description:
            "Desenvolvimento de uma landing page responsiva para a AJM Machine, empresa especializada em soluções de vending machines.",

        technologies: [
            "Next.js",
            "Tailwind CSS"
        ],

        website: "https://www.ajmmachine.com.br/",

        image: AJM,

    },

    {
        id: 3,

        featured: false,

        title: "A & G Construções",

        company: "Cliente",

        role: "Frontend Developer",

        period: "Freelancer",

        description:
            "Website institucional desenvolvido para apresentar os serviços da empresa, destacando projetos executados e facilitando o contato com novos clientes.",

        technologies: [
            "React",
            "TypeScript",
            "SCSS",
            "Vercel",
        ],

        website: "https://a-g-construcoes.vercel.app/",

        github: null,

        image: AG,
    },
];