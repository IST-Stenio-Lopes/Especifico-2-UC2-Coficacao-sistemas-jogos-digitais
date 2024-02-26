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
          "A etapa em que os personagens e objetos criados em 3D ganham movimento é a animação.",
        type: "error"
      },
      {
        optionId: "q1-option-2",
        feedBackId: "q1-box-feedback",
        title: "Parabéns",
        message:
          "Você acertou! A texturização serve para dar mais vida e realismo aos objetos e personagens.",
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
                title: "Você acertou",
                message:
                  "Pois é na produção multimídia que tudo que será implementado, é produzido.",
                type: "success",
                value: "Uma sequência direta"
              },
              {
                feedBackId: "q2-sq1-box-feedback",
                title: "Ops",
                message: "O processo de implementação é totalmente relacionado a produção multimídia.",
                type: "error",
                value: "Independente"
              },
              {
                feedBackId: "q2-sq1-box-feedback",
                title: "Atenção",
                message:
                  "A implementação é feita depois da produção multimídia.",
                type: "error",
                value: "Realizado antes"
              },
            ],
          },
        ],
      },
    ],
};