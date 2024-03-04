var question1 = {
  type: "RADIO",
  title: "QUESTÃO 1 - Avalie se a afirmação a seguir é verdadeira ou falsa.",
  description:
    "Uma árvore de decisão é um diagrama que ajuda a visualizar e mapear possíveis resultados de uma série de escolhas relacionadas.",
  feedbacks: [
    {
      optionId: "q1-option-1",
      feedBackId: "q1-box-feedback",
      title: "OPS!",
      message: "Na verdade, esta é uma boa definição de árvores de decisão.",
      type: "error",
    },
    {
      optionId: "q1-option-2",
      feedBackId: "q1-box-feedback",
      title: "Exato!",
      message:
        "Isso mesmo, as árvores de decisão são diagramas que auxiliam na visualização de possíveis resultados de dentre várias escolhas.",
      type: "success",
    },
  ],
};

var question2 = {
  type: "RADIO",
  title: "QUESTÃO 2 - Avalie se a afirmação a seguir é verdadeira ou falsa.",
  description:
    "Todas as decisões em uma árvore de decisão devem ter apenas um resultado possível.",
  feedbacks: [
    {
      optionId: "q1-option-1",
      feedBackId: "q1-box-feedback",
      title: "OPS!",
      message:
        "Em uma árvore de decisão, cada nó de decisão pode ter múltiplos resultados possíveis, dependendo das diferentes opções ou caminhos que podem ser seguidos a partir desse nó.",
      type: "error",
    },
    {
      optionId: "q1-option-2",
      feedBackId: "q1-box-feedback",
      title: "Exato!",
      message:
        "Na verdade, uma árvore pode ter vários resultados possíveis, essa é a finalidade das árvores.",
      type: "success",
    },
  ],
};

var question3 = {
  type: "RADIO",
  title: "QUESTÃO 3",
  description:
    "Qual das seguintes afirmações descreve melhor a principal característica das árvores de decisão utilizadas em jogos?",
  feedbacks: [
    {
      optionId: "q3-option-1",
      feedBackId: "q3-box-feedback",
      title: "OPS!",
      message:
        "A essência das árvores de decisão é precisamente a ramificação com base em diferentes condições ou decisões.",
      type: "error",
    },
    {
      optionId: "q3-option-2",
      feedBackId: "q3-box-feedback",
      title: "Exato!",
      message:
        "As árvores de decisão permitem modelar uma variedade de comportamentos para NPCs, tomando decisões com base em várias condições ou contextos.",
      type: "success",
    },
    {
      optionId: "q3-option-3",
      feedBackId: "q3-box-feedback",
      title: "OPS!",
      message:
        "Enquanto árvores de decisão podem ser usadas em outras áreas para visualizar dados, em jogos, elas desempenham um papel crucial no design de comportamentos e decisões de NPCs.",
      type: "error",
    },
    {
      optionId: "q3-option-4",
      feedBackId: "q3-box-feedback",
      title: "OPS!",
      message:
        "Árvores de decisão, por natureza, têm múltiplas ramificações e não são lineares. Dependendo da implementação, pode ser possível reavaliar e retornar a decisões anteriores.",
      type: "error",
    },
  ],
};
