import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
    DiSass 
} from 'react-icons/di'


import '../styles/components/tecnologiescontainer.sass'

const technologies = [
{ id: "html", name: "HTML5", icon:<DiHtml5/>, description: "HTML5 é a  linguagem de marcação padrão para a criação de páginas web. No dia a dia, uso HTML5 para estruturar e organizar o conteúdo das páginas web, incorporando semântica e acessibilidade."},
{ id: "css", name: "CSS3", icon:<DiCss3/>, description: "CSS3 é, responsável pela apresentação e estilo de documentos HTML. Com recursos como transições, animações, flexbox e grid, CSS3 permite criar designs mais flexíveis e interativos. No trabalho diário, uso CSS3 para estilizar e tornar visualmente atraentes os elementos HTML, garantindo uma experiência de usuário agradável." },
{ id: "js", name: "JavaScript", icon:<DiJsBadge/>, description: "JavaScript é uma linguagem de programação de alto nível amplamente usada para tornar páginas web dinâmicas e interativas. No dia a dia, utilizo JavaScript para manipular o DOM, gerenciar eventos, realizar chamadas assíncronas e criar lógica de interação do usuário em aplicações web."},

{ id: "node", name: "Node.js", icon:<DiNodejsSmall/>, description: "Node.js é um ambiente de execução JavaScript no lado do servidor, permitindo a construção de aplicações escaláveis e eficientes. Utilizo Node.js para chamadas de  APIs e outras soluções do lado do servidor, aproveitando sua arquitetura baseada em eventos e o ecossistema npm." },

{ id: "mysql", name: "MySQL", icon:<DiMysql/>, description: 'MySQL é um sistema de gerenciamento de banco de dados relacional de código aberto. No cotidiano, utilizo MySQL para armazenar, consultar e gerenciar dados em aplicações web, garantindo a integridade e eficiência na manipulação de informações.'},

{ id: "react", name: "React", icon:<DiReact/>, description: 'React é uma biblioteca JavaScript para construir interfaces de usuário declarativas e componentizadas. No trabalho diário, uso React para manter o site da empresa e para criar componentes reutilizáveis, gerenciar o estado da aplicação de forma eficiente e construir interfaces interativas e responsivas.'},

{ id: "sass", name: "Sass", icon:<DiSass />, description: "Sass é uma linguagem de folhas de estilo que estende o CSS, oferecendo recursos como variáveis, mixins e aninhamento. Utilizo Sass para escrever estilos mais eficientes e modularizados, facilitando a manutenção e organização de estilos em projetos web." }

];

const TechnologiesContainer = () => {
  return (
   <section className='tecnologies-container'>
    <h2>Tecnologias</h2>
    <div className='tecnologies-grid'>
    {technologies.map((tech) => (
        <div className='technology-card' id={tech.id} key={tech.id}>
        {tech.icon}
        <div className='technology-info'>
            <h3>{tech.name}</h3>
            <p>{tech.description}</p>
        </div>
        </div>
    ))}
    </div>
    </section>
    );

}

export default TechnologiesContainer
