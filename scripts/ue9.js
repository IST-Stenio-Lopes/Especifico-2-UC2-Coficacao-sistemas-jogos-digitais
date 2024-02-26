var question1 = {
    type: "RADIO",
    title: "Verdadeiro ou Falso",
    description:
      "Avalie se a afirmação a seguir é verdadeira ou falsa.",
    feedbacks: [
      {
        optionId: "q1-option-1",
        feedBackId: "q1-box-feedback",
        title: "Ops",
        message:
          "Os jogadores na verdade são os clientes externos.",
        type: "error"
      },
      {
        optionId: "q1-option-2",
        feedBackId: "q1-box-feedback",
        title: "Parabéns",
        message:
          "Isso mostra que prestou atenção ao assunto, parabéns.",
        type: "success"
      },
    ],
};

var question2 = {
    type: "COMPLETE",
    title:
      "Escolha a palavra que é a resposta correta para completar as sentenças a seguir:",
    subQuestions: [
      {
        subQuestionId: "q2-sq1",
        title:
          "1. Microfone, mouse, webcam são exemplos de periférico de _________",
        description: "",
        feedbackEmpty: {
          feedBackId: "q2-sq1-box-feedback",
          title: "OPS!",
          message: "Complete todos os campos da frase.",
          type: "error",
        },
        feedBackElementsId: ["q2-sq1-box-feedback"],
        userAnswers: [],
        rightAnswers: [
          {
            id: "q2-sq1-block-1",
            value: "Pincéis virtuais",
            feedbacks: [
              {
                feedBackId: "q2-sq1-box-feedback",
                title: "Ops",
                message:
                  "Essa relação se refere à interação e colaboração com os colegas de equipe.",
                type: "error",
                value: "Relação com clientes internos"
              },
              {
                feedBackId: "q2-sq1-box-feedback",
                title: "Não é isso",
                message: "Pois os clientes externos são os jogadores por exemplo.",
                type: "error",
                value: "Relação com clientes externos"
              },
              {
                feedBackId: "q2-sq1-box-feedback",
                title: "Você acertou",
                message:
                  "É muito importante compreender a importância de se ter uma boa relação com subordinados.",
                type: "success",
                value: "Relação com subordinados"
              },
            ],
          },
        ],
      },
    ],
};