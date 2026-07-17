import AG from '../public/preview-projects/a-g.png';
import Calc from '../public/preview-projects/calculadora.png';
import Task from '../public/preview-projects/tarefas.png';
import LojaPreview from '../public/preview-projects/loja_preview.png';

export const projects = [
    {
        id: 1,
        title: 'Loja Online MAG Seguros',
        description: 'Esse é o projeto que eu venho atuando a mais de 5 anos. Sigo atuando nos canais de venda da MAG Seguros até os dias atuais.',
        linkView: 'https://loja.mag.com.br/magpravoce',
        linkCodeView: '',
        imagePreview: LojaPreview
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
