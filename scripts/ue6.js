var question1 = {
    type: "RADIO",
    title: "Qual das opções abaixo corresponde à janela que exibe mensagens de depuração, avisos e erros do jogo na Unity?",
    description: "",
    feedbacks: [
      {
        optionId: "q1-option-1",
        feedBackId: "q1-box-feedback",
        title: "OPS!",
        message:
          "A fase de lançamento é quando o jogo é oficialmente disponibilizado para o público.",
        type: "error",
      },
      {
        optionId: "q1-option-2",
        feedBackId: "q1-box-feedback",
        title: "Não é isso",
        message:
          "A fase de marketing é quando a estratégia de marketing é definida para promover o jogo antes do lançamento.",
        type: "error",
      },
      {
        optionId: "q1-option-3",
        feedBackId: "q1-box-feedback",
        title: "Você acertou",
        message:
          "Nessa fase deve-se garantir que o jogo esteja livre de bugs e que a experiência do usuário seja satisfatória.",
        type: "success",
      },
      {
        optionId: "q1-option-4",
        feedBackId: "q1-box-feedback",
        title: "Atenção",
        message:
            "A fase de pós-lançamento é quando o jogo é monitorado e avaliado quanto ao seu desempenho depois que lançado.",
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
        title: "Ops",
        message:
          "Os jogos para consoles geralmente têm requisitos de certificação mais rigorosos.",
        type: "error"
      },
      {
        optionId: "q2-option-2",
        feedBackId: "q2-box-feedback",
        title: "Parabéns",
        message:
          "Mostra que está atento sobre as plataformas que apresentamos.",
        type: "success"
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
                title: "Ops",
                message:
                  "Embora o método de publicação seja um aspecto importante na publicação de um jogo digital, ele não é o elemento central que garante o sucesso do jogo.",
                type: "error",
                value: "O método de publicação"
              },
              {
                feedBackId: "q3-sq1-box-feedback",
                title: "Você acertou",
                message: "Um bom planejamento entre outros aspectos são fundamentais para o sucesso do jogo.",
                type: "success",
                value: "O planejamento"
              },
              {
                feedBackId: "q3-sq1-box-feedback",
                title: "Não é isso",
                message:
                  "A escolha da plataforma também é importante na publicação de um jogo digital, ela não é o elemento central que garante o sucesso do jogo.",
                type: "error",
                value: "A escolha da plataforma"
              },
            ],
          },
        ],
      },
    ],
};