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
          "Isso mostra que prestou atenção e entendeu o conceito do teste de integração.",
        type: "success"
      },
      {
        optionId: "q1-option-2",
        feedBackId: "q1-box-feedback",
        title: "Ops",
        message:
          "Seu propósito é esse mesmo, o teste de integração é uma etapa fundamental para a qualidade e funcionalidade do jogo.",
        type: "error"
      },
    ],
};

var question2 = {
  type: "SELECT",
  title:
    "Clique nos campos vazios e escolha a opção correspondente ao seu enunciado:",
  description: "",
  questionId: "q2-select",
  rightAnswers: [
    {
      selectId: "q2-select-1",
      value: "3",
    },
    {
      selectId: "q2-select-2",
      value: "4",
    },
    {
      selectId: "q2-select-3",
      value: "1",
    },
    {
      selectId: "q2-select-4",
      value: "2",
    },
  ],
  feedbacks: [
    {
      feedBackId: "q2-box-feedback",
      title: "Ops",
      message: "As ligações não estão corretas",
      type: "error",
    },
    {
      feedBackId: "q2-box-feedback",
      title: "Parabéns!",
      message:
        "Muito bem, você acertou todas as ligações.",
      type: "success",
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
                  "Nessa etapa o foco é a integração das artes finais que foram produzidas para o jogo.",
                type: "error",
                value: "Integração de arte e software"
              },
              {
                feedBackId: "q3-sq1-box-feedback",
                title: "Você acertou",
                message: "Pois é na produção multimídia que tudo que será implementado, é produzido.",
                type: "success",
                value: "Integração de versão"
              },
              {
                feedBackId: "q3-sq1-box-feedback",
                title: "Atenção",
                message:
                  "Integração de componentes contribui bastante na hora de testar efeitos sonoros, por exemplo, mas não garante melhoria na otimização do jogo.",
                type: "error",
                value: "Integração de componentes"
              },
            ],
          },
        ],
      },
    ],
};