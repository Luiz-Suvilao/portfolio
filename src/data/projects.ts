import GIG from '../public/preview-projects/gig.png';
import Calc from '../public/preview-projects/calculadora.png';
import Task from '../public/preview-projects/tarefas.png';

export const projects = [
    {
        id: 1,
        title: 'GIG Music',
        description: 'Esse projeto foi criado para divulgar a escola de música Gig Music, dando total liberdade de edição ao CEO da escola, Carlos Faria, através do CMS Prismic',
        linkView: 'https://gig-music.vercel.app/',
        linkCodeView: 'https://github.com/Luiz-Suvilao/gig_music',
        imagePreview: GIG
    },
    {
        id: 2,
        title: 'Calculadora Penal',
        description: 'Esse projeto foi criado para calcular a pena dos presos no GTA RP. A cidade no qual eu jogava não havia uma calculadora decente então montei uma para o batalhão do norte.',
        linkView: 'https://newcity-calculadora-penal.netlify.app/',
        linkCodeView: 'https://github.com/Luiz-Suvilao/calculadora_penal',
        imagePreview: Calc
    },
    {
        id: 3,
        title: 'Tasks',
        description: 'Esse projeto foi criado com o objetivo de estudar Oauth, esse projeto possui login com Github ou com o Google. Basicamente trata-se de um gerenciador de tarefas pessoal. O banco de dados usado foi o firebase.',
        linkView: 'https://digital-tarefas.vercel.app/',
        linkCodeView: 'https://github.com/Luiz-Suvilao/tasks',
        imagePreview: Task
    }
]
