import AG from "../public/preview-projects/a-g.png";
import Calc from "../public/preview-projects/calculadora.png";
import Task from "../public/preview-projects/tarefas.png";
import LojaPreview from "../public/preview-projects/loja_preview.png";

export const projects = [
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

    {
        id: 3,

        featured: false,

        title: "Tasks",

        company: "Projeto Pessoal",

        role: "Full Stack Developer",

        period: "2022",

        description:
            "Gerenciador de tarefas desenvolvido para estudar autenticação OAuth utilizando Google e GitHub, com persistência de dados em Firebase.",

        technologies: [
            "React",
            "Firebase",
            "OAuth",
            "Google",
            "GitHub",
        ],

        website: "https://digital-tarefas.vercel.app/",

        github: "https://github.com/Luiz-Suvilao/tasks",

        image: Task,
    },
];