import Wedding from '../public/preview-projects/wdding-invite.png';
import AG from '../public/preview-projects/a-g.png';
import Calc from '../public/preview-projects/calculadora.png';
import Task from '../public/preview-projects/tarefas.png';

export const projects = [
    {
        id: 1,
        title: 'Convite de casamento',
        description: 'Esse é um projeto pessoal, do meu casamento, o convite foi feito usando Next.js e Sass, o site é responsivo e possui um formulário para confirmação de presença.',
        linkView: 'https://wedding-invite-yyan.vercel.app/',
        linkCodeView: '',
        imagePreview: Wedding
    },
    {
        id: 2,
        title: 'A & G Construções',
        description: 'Esse projeto foi criado para um cliente, o site é um portfólio da empresa de construção.',
        linkView: 'https://a-g-construcoes.vercel.app/',
        linkCodeView: '',
        imagePreview: AG
    },
    {
        id: 3,
        title: 'Calculadora Penal',
        description: 'Esse projeto foi criado para calcular a pena dos presos no GTA RP. A cidade no qual eu jogava não havia uma calculadora decente então montei uma para o batalhão do norte.',
        linkView: 'https://newcity-calculadora-penal.netlify.app/',
        linkCodeView: 'https://github.com/Luiz-Suvilao/calculadora_penal',
        imagePreview: Calc
    },
    {
        id: 4,
        title: 'Tasks',
        description: 'Esse projeto foi criado com o objetivo de estudar Oauth, esse projeto possui login com Github ou com o Google. Basicamente trata-se de um gerenciador de tarefas pessoal. O banco de dados usado foi o firebase.',
        linkView: 'https://digital-tarefas.vercel.app/',
        linkCodeView: 'https://github.com/Luiz-Suvilao/tasks',
        imagePreview: Task
    }
]
