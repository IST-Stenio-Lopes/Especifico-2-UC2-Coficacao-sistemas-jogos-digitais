var question1 = {
    type: "RADIO",
    title: "Verdadeiro ou Falso",
    description:
      "Avalie se a afirmação a seguir é verdadeira ou falsa.",
    feedbacks: [
      {
        optionId: "q1-option-1",
        feedBackId: "q1-box-feedback",
        title: "Você acertou",
        message:
          "A técnica entrevista é bastante utilizada na etapa de levantamento de requisitos por ser considerada simples, onde os participantes podem ser entrevistados de forma privada. Isso faz com que as respostas sejam mais reais e verdadeiras.",
        type: "success"
      },
      {
        optionId: "q1-option-2",
        feedBackId: "q1-box-feedback",
        title: "Ops",
        message:
          "É importante considerar a técnica entrevista como sendo uma das mais utilizadas no levantamento de requisitos por não ser complexa e permitir ao entrevistado responder de forma individual e privada as perguntas que lhe são apresentadas.",
        type: "error"
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
          "Ter uma pauta é realmente importante para o workshop.",
        type: "error"
      },
      {
        optionId: "q2-option-2",
        feedBackId: "q2-box-feedback",
        title: "Parabéns",
        message:
          "Você acertou, mostra que está atento sobre a aplicação do workshop.",
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
                  "Os questionários são normalmente usados para coletar dados de opiniões e informações de forma estruturada e não foca em gerar ideias.",
                type: "error",
                value: "Questionário"
              },
              {
                feedBackId: "q3-sq1-box-feedback",
                title: "Não é isso",
                message: "A entrevista não é uma técnica específica para gerar ideias criativas e soluções inovadoras de forma aberta e livre.",
                type: "error",
                value: "Entrevista"
              },
              {
                feedBackId: "q3-sq1-box-feedback",
                title: "Você acertou",
                message:
                  "A técnica de brainstorm é especificamente projetada para gerar ideias criativas e soluções inovadoras.",
                type: "success",
                value: "Brainstorm"
              },
            ],
          },
        ],
      },
    ],
};