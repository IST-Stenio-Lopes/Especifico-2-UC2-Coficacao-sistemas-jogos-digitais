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
          "Esses aspectos devem ser avaliados e validados antes mesmo do processo de publicação.",
        type: "error",
      },
      {
        optionId: "q1-option-2",
        feedBackId: "q1-box-feedback",
        title: "Você acertou",
        message:
          "Mostra que você compreendeu que o principal foco da validação de publicação é verificar a conformidade com as leis e regulamentos para publicação.",
        type: "success",
      },
      {
        optionId: "q1-option-3",
        feedBackId: "q1-box-feedback",
        title: "Não é isso",
        message:
          "Mesmo que esses aspectos também sejam importantes, esse não é o foco principal da validação e publicação.",
        type: "error",
      },
      {
        optionId: "q1-option-4",
        feedBackId: "q1-box-feedback",
        title: "Atenção",
        message:
            "Mesmo que isso possa interessar aos desenvolvedores, não é o objetivo da validação de publicação.",
        type: "error",
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
                  "Você acertou, mostra que prestou atenção ao assunto.",
                type: "success",
                value: "A validação"
              },
              {
                feedBackId: "q2-sq1-box-feedback",
                title: "Não é isso",
                message: "Pois a documentação acontece justamente após a realização desses testes.",
                type: "error",
                value: "A documentação"
              },
              {
                feedBackId: "q2-sq1-box-feedback",
                title: "Atenção",
                message:
                  "A análise de plataformas está inserida no processo de validação, que é o requerido para publicação do jogo.",
                type: "error",
                value: "A análise de plataformas"
              },
            ],
          },
        ],
      },
    ],
};