
type ICard = {
    imgUrl: string,
    orderImg: string
    title: string,
    descriptionTop: string,
    features: string[],
    descriptionBottom: string
}

//cards - product page
const cards: ICard[] = [
    {
        imgUrl: "/img/product-page/crm-card.png",
        orderImg: '2',
        title: "UM PODEROSO SISTEMA DE CRM",
        descriptionTop: "A Tropical Tech pode ajudá-lo a alcançar um nível mais alto de satisfação do cliente com nosso sistema de CRM. Um módulo para toda a sua organização fornecerá integração perfeita com seus outros sistemas e poderá ser acessado em qualquer lugar do mundo.",
        features: [
            "Clique na integração com outros sistemas",
            "Design amigável",
            "Placa de soluções",
            "Prototipagem",
            "Validação do usuário"
        ],
        descriptionBottom: "Integre facilmente seu novo sistema de CRM com sua infraestrutura de TI existente. Isso agilizará a eficiência operacional e levará a clientes mais satisfeitos."
    },
    {
        imgUrl: "/img/product-page/marketing.png",
        orderImg: "1",
        title: "UM ASSISTENTE DE MARKETING PERSONALIZADO",
        descriptionTop: "O assistente de marketing personalizado da Tropical Tech está aqui para ajudá-lo a orientar seus clientes pelo cenário digital.",
        features: [
            "Análise competitiva",
            'Usuários “pessoais”',
            "Documentação das Tarefas do Usuário",
            "Esboçar histórias de usuário",
            "Protótipo de wireframe clicável mainstream",
            "Feedback qualitativo e feedback quantitativo do usuário",
            "IA que ouve você e fala sua língua"
        ],
        descriptionBottom: "Se você está procurando uma melhor compreensão do mercado, uma nova perspectiva sobre o seu negócio ou apenas quer ver o que é possível, estamos aqui para ajudar. Analisaremos os números, forneceremos insights e ofereceremos recomendações estratégicas com base em nossa pesquisa robusta e insights sofisticados."
    },
    {
        imgUrl: "/img/product-page/automacao.png",
        orderImg: "2",
        title: "UMA PLATAFORMA DE AUTOMAÇÃO DE E-MAIL EM RÁPIDO CRESCIMENTO",
        descriptionTop: "Uma plataforma de automação de e-mail verdadeiramente personalizada deve ser capaz de falar seu idioma, ouvi-lo e entendê-lo. Com a plataforma de e-mail com inteligência artificial da Tropical Tech, todos os três são garantidos!",
        features: [
            "Design de branding/interface do usuário (UI) para a maioria das telas",
            "Protótipo clicável de fidelidade total",
            "Modelos de e-mail totalmente personalizáveis",
            "Envie boletins informativos em massa e campanhas de e-mail"
        ],
        descriptionBottom: ""
    },
    {
        imgUrl: "/img/product-page/img-products.png",
        orderImg: "1",
        title: "UM PACOTE DE SOFTWARE DE GERENCIAMENTO DE PROJETOS EFICAZ",
        descriptionTop: "Você sente que sua equipe está fazendo tudo manualmente e desperdiçando horas de produtividade? Deixe a Tropical Tech cuidar do planejamento e execução.",
        features: [
            "Gerenciamento de projetos facilitado",
            "Conecte-se com sua equipe em qualquer lugar, a qualquer hora",
            "Não há mais suposições ou falsos começos"
        ],
        descriptionBottom: "Gerenciar um projeto pode ser complexo sem as ferramentas certas. É por isso que oferecemos um conjunto de softwares de gerenciamento de projetos poderosos para ajudar você e sua equipe a se manterem atualizados."
    },
    {
        imgUrl: "/img/product-page/img-products-2.png",
        orderImg: "2",
        title: "UM GERENCIADOR DE MÍDIA SOCIAL INOVADOR",
        descriptionTop: "Não somos seu gerente de mídia social regular. Somos uma casa de software, você sabe, como os criadores de sua ferramenta de edição de fotos favorita. É por isso que somos tão apaixonados pelo que estamos construindo.",
        features: [
            "Apresentações para os parceiros de marketing certos com o conjunto de habilidades e estratégias de teste necessárias para o produto",
            "Garantir uma estratégia de marketing orientada a testes, permitindo aprendizado rápido e uso eficiente de capital",
            "Ajude a priorizar o desenvolvimento de novos recursos com base em aprendizados de marketing"
        ],
        descriptionBottom: "Dê uma nova vida às suas redes sociais. Simplifique e automatize as tarefas tediosas. Mantenha-se sempre conectado aos insights do público."
    },
]

export default cards