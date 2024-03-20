var question1 = {
  type: "RADIO",
  title: "Questão 1 - Avalie se a afirmação a seguir é verdadeira ou falsa.",
  description: "A função Start é chamada uma vez a cada quadro.",
  feedbacks: [
    {
      optionId: "q1-option-1",
      feedBackId: "q1-box-feedback",
      title: "OPS!",
      message:
        "Você está confundindo! A função Start é chamada apenas uma vez, no início da execução do jogo.",
      type: "error",
    },
    {
      optionId: "q1-option-2",
      feedBackId: "q1-box-feedback",
      title: "Exato!",
      message: "A Função Start só é executada uma vez.",
      type: "success",
    },
  ],
};

var question2 = {
  type: "RADIO",
  title: "Questão 2 - Avalie se a afirmação a seguir é verdadeira ou falsa.",
  description: "Em Unity, cada GameObject pode ter apenas um componente?",
  feedbacks: [
    {
      optionId: "q2-option-1",
      feedBackId: "q2-box-feedback",
      title: "Exato!",
      message: "Em Unity, um GameObject pode ter vários componentes",
      type: "success",
    },
    {
      optionId: "q2-option-2",
      feedBackId: "q2-box-feedback",
      title: "OPS!",
      message: "Em Unity, um GameObject pode ter vários componentes",
      type: "error",
    },
  ],
};

var question3 = {
  type: "RADIO",
  title: "Questão 3",
  description: "Na engine de jogos Unity, o que é um GameObject?",
  feedbacks: [
    {
      optionId: "q3-option-1",
      feedBackId: "q3-box-feedback",
      title: "OPS!",
      message: "GameObjects não são ferramentas.",
      type: "error",
    },
    {
      optionId: "q3-option-2",
      feedBackId: "q3-box-feedback",
      title: "OPS!",
      message: "GameObject na verdade agregam componentes.",
      type: "error",
    },
    {
      optionId: "q3-option-3",
      feedBackId: "q3-box-feedback",
      title: "Resposta correta!",
      message:
        "Na engine de jogos Unity, qualquer objeto é considerado um GameObject: personagens, luzes, efeitos especiais, adereço. Logo, um conjunto de componentes juntos. ",
      type: "success",
    },
    {
      optionId: "q3-option-4",
      feedBackId: "q3-box-feedback",
      title: "OPS!",
      message: "GameObject definitivamente não é uma linguagem de programação.",
      type: "error",
    },
  ],
};

var question4 = {
  type: "RADIO",
  title: "Questão 4",
  description: "Na engine de jogos Unity, o que é um GameObject?",
  feedbacks: [
    {
      optionId: "q4-option-1",
      feedBackId: "q4-box-feedback",
      title: "OPS!",
      message: "Um GameObject pode ter vários componentes e tipos diferentes.",
      type: "error",
    },
    {
      optionId: "q4-option-2",
      feedBackId: "q4-box-feedback",
      title: "Exato!",
      message:
        "Parabéns. Os componentes são módulos autônomos e reutilizáveis, e a funcionalidade de um GameObject é definida pela combinação de componentes que ele possui",
      type: "success",
    },
    {
      optionId: "q4-option-3",
      feedBackId: "q4-box-feedback",
      title: "OPS!",
      message:
        "A interação entre diversos componentes representa o quão potentes são os GameObjects. ",
      type: "error",
    },
    {
      optionId: "q4-option-4",
      feedBackId: "q4-box-feedback",
      title: "OPS!",
      message:
        "Na verdade, a funcionalidade de um GameObject é definida pela combinação de componentes que ele possui.",
      type: "error",
    },
  ],
};
