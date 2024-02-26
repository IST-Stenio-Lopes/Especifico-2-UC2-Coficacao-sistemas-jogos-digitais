var question1 = {
  type: "RADIO",
  title: "Marque a alternativa que contém APENAS requisitos funcionais do sistema de um jogo digital.",
  description: "",
  feedbacks: [
    {
      optionId: "q1-option-1",
      feedBackId: "q1-box-feedback",
      title: "OPS!",
      message:
        "Este conjunto de requisitos inclui a política de reembolso, que não é um requisito funcional.",
      type: "error",
    },
    {
      optionId: "q1-option-2",
      feedBackId: "q1-box-feedback",
      title: "Não é isso",
      message:
        "Este conjunto de requisitos inclui o horário de trabalho, que não é um requisito funcional.",
      type: "error"
    },
    {
      optionId: "q1-option-3",
      feedBackId: "q1-box-feedback",
      title: "Você acertou",
      message:
        "Mostra que prestou atenção ao assunto, parabéns.",
      type: "success",
    },
    {
      optionId: "q1-option-4",
      feedBackId: "q1-box-feedback",
      title: "Não é isso",
      message:
      "Este conjunto de requisitos inclui o horário de trabalho, que não é um requisito funcional.",
      type: "error",
    },
  ],
};

var question2 = {
  type: "RADIO",
  title: "Verdadeiro ou Falso",
  description:
    "Avalie se a afirmação a seguir é verdadeira ou falsa.",
  feedbacks: [
    {
      optionId: "q2-option-1",
      feedBackId: "q2-box-feedback",
      title: "Você acertou",
      message:
        "Isso mostrou que entendeu os requisitos não funcionais.",
      type: "success"
    },
    {
      optionId: "q2-option-2",
      feedBackId: "q2-box-feedback",
      title: "Não é isso",
      message:
        "É importante entender como os requisitos não funcionais podem beneficiar a organização do projeto.",
      type: "error"
    },
  ],
};

var question3 = {
  type: "COMPLETE",
  title:
    "Escolha a palavra que é a resposta correta para completar as sentenças a seguir:",
  subQuestions: [
    {
      subQuestionId: "q3-sq1",
      title:
        "1. Microfone, mouse, webcam são exemplos de periférico de _________",
      description: "",
      feedbackEmpty: {
        feedBackId: "q3-sq1-box-feedback",
        title: "OPS!",
        message: "Complete todos os campos da frase.",
        type: "error",
      },
      feedBackElementsId: ["q3-sq1-box-feedback"],
      userAnswers: [],
      rightAnswers: [
        {
          id: "q3-sq1-block-1",
          value: "Pincéis virtuais",
          feedbacks: [
            {
              feedBackId: "q3-sq1-box-feedback",
              title: "Cuidado",
              message:
                "Nesse caso, os testes não são voltados para identificar requisitos de software, que servem quando vamos criar um novo, mas sim para um software já desenvolvido.",
              type: "error",
              value: "Requisitos de Software"
            },
            {
              feedBackId: "q3-sq1-box-feedback",
              title: "Opa",
              message: "Os testes relacionados ao software do jogo, e não aos requisitos de hardware.",
              type: "error",
              value: "Requisitos de hardware"
            },
            {
              feedBackId: "q3-sq1-box-feedback",
              title: "Você acertou",
              message:
                "É importante reconhecer que quando um caso se trata dos requisitos não funcionais, estados falando de um software já desenvolvido, parabéns.",
              type: "success",
              value: "Requisitos não funcionais"
            },
          ],
        },
      ],
    },
  ],
};

var interableImages1 = { //objeto para controle da função de interação de imagems
  images : ["./img/ue1/Slide 1.png", "./img/ue1/Slide 2.png", "./img/ue1/Slide 3.png"], //as src das imagens que serão interadas
  htmlImageId: 'interable1', //o id da tag img que está sendo exibido no html da página
  index: 0 //o current index referente a qual imagem está sendo exibida no momento
}