var question1 = {
  type: "RADIO",
  title: "Questão 1 - Avalie se a afirmação a seguir é verdadeira ou falsa.",
  description:
    "Um grafo é composto por vértices (ou nós) e arestas (ou links).",
  feedbacks: [
    {
      optionId: "q1-option-1",
      feedBackId: "q1-box-feedback",
      title: "OPS!",
      message: "Na verdade, vértices e arestas são os componentes de um grafo.",
      type: "error",
    },
    {
      optionId: "q1-option-2",
      feedBackId: "q1-box-feedback",
      title: "Exato!",
      message:
        "Correto! Um grafo é composto por vértices, também conhecidos como nós, e arestas, também conhecidos como links.",
      type: "success",
    },
  ],
};

var question2 = {
  type: "RADIO",
  title: "Questão 2 - Avalie se a afirmação a seguir é verdadeira ou falsa.",
  description:
    "Grafos são usados em jogos digitais para representar mapas de níveis, caminhos de IA, redes de diálogo, sistemas de missão e muito mais.",
  feedbacks: [
    {
      optionId: "q2-option-1",
      feedBackId: "q2-box-feedback",
      title: "OPS!",
      message:
        "Você já deve ter visto jogos como, Super Mario Bros, aquele mapa clássico, é um exemplo dentre vários da aplicação de grafos em Jogos.",
      type: "error",
    },
    {
      optionId: "q2-option-2",
      feedBackId: "q2-box-feedback",
      title: "Exato!",
      message:
        "Os grafos são uma ferramenta versátil usada em muitos aspectos do desenvolvimento de jogos",
      type: "success",
    },
  ],
};

var question3 = {
  type: "RADIO",
  title: "Questão 3",
  description:
    "Qual é a função dos nós em um grafo usado para representar o espaço em um jogo?",
  feedbacks: [
    {
      optionId: "q3-option-1",
      feedBackId: "q3-box-feedback",
      title: "OPS!",
      message:
        "Os obstáculos e desafios do jogo não estão diretamente relacionados aos nós do grafo.",
      type: "error",
    },
    {
      optionId: "q3-option-2",
      feedBackId: "q3-box-feedback",
      title: "Exato!",
      message: "Os nós em um grafo representam os pontos no espaço do jogo",
      type: "success",
    },
    {
      optionId: "q3-option-3",
      feedBackId: "q3-box-feedback",
      title: "OPS!",
      message:
        "Os limites geográficos do mundo do jogo são definidos por outros elementos, como colisões, barreiras ou limites de terreno.",
      type: "error",
    },
    {
      optionId: "q3-option-4",
      feedBackId: "q3-box-feedback",
      title: "OPS!",
      message:
        "Os elementos interativos e objetos no jogo são representados de outras maneiras, como sprites, modelos 3D ou outros componentes específicos do jogo.",
      type: "error",
    },
  ],
};

var question4 = {
  type: "RADIO",
  title: "Questão 4 - Avalie se a afirmação a seguir é verdadeira ou falsa.",
  description: "Em um grafo direcionado, as arestas não têm direção.",
  feedbacks: [
    {
      optionId: "q4-option-1",
      feedBackId: "q4-box-feedback",
      title: "Exato!",
      message:
        "Como o próprio nome sugere, em um grafo direcionado, cada aresta tem uma direção.",
      type: "success",
    },
    {
      optionId: "q4-option-2",
      feedBackId: "q4-box-feedback",
      title: "OPS!",
      message:
        "Na verdade, em um grafo direcionado, cada aresta tem uma direção.",
      type: "error",
    },
  ],
};

var question5 = {
  type: "RADIO",
  title: "Questão 5 - Avalie se a afirmação a seguir é verdadeira ou falsa.",
  description:
    "O algoritmo A* é usado para encontrar o caminho mais longo em um mapa.",
  feedbacks: [
    {
      optionId: "q5-option-1",
      feedBackId: "q5-box-feedback",
      title: "Exato!",
      message:
        "Como se trata de um algoritmo de otimização, o A* é usado para encontrar o caminho mais curto, não o mais longo.",
      type: "success",
    },
    {
      optionId: "q5-option-2",
      feedBackId: "q5-box-feedback",
      title: "OPS!",
      message:
        "O algoritmo A* é usado para encontrar o caminho mais curto, não o mais longo.",
      type: "error",
    },
  ],
};
