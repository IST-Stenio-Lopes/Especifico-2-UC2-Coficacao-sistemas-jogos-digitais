var question1 = {
  type: "RADIO",
  title: "QUESTÃO 1",
  description: "O que é um GameObject no Unity?",
  feedbacks: [
    {
      optionId: "q1-option-1",
      feedBackId: "q1-box-feedback",
      title: "Não é isso",
      message: "Errado! GameObject não são ferramentas de depuração",
      type: "error",
    },
    {
      optionId: "q1-option-2",
      feedBackId: "q1-box-feedback",
      title: "Ops!",
      message:
        "Errado! GameObject não são animações. Porém eles podem ser animados.",
      type: "error",
    },
    {
      optionId: "q1-option-3",
      feedBackId: "q1-box-feedback",
      title: "Você acertou",
      message:
        "Certa resposta! O principal tipo de objeto no Unity. Tudo no seu jogo, desde personagens e itens até luzes e câmeras, é um GameObject.",
      type: "success",
    },
    {
      optionId: "q1-option-4",
      feedBackId: "q1-box-feedback",
      title: "Opa!",
      message:
        "Errado! Os game objects são representações dos elementos do jogo.",
      type: "error",
    },
  ],
};

var question2 = {
  type: "RADIO",
  title: "QUESTÃO 2 - Verdadeiro ou Falso",
  description:
    "Key Frames são pontos específicos em uma linha do tempo de animação que marcam onde uma propriedade de um objeto (como posição, rotação ou escala) deve ser num dado momento, servindo como pilares para criar movimentos animados.",
  feedbacks: [
    {
      optionId: "q2-option-1",
      feedBackId: "q2-box-feedback",
      title: "Não é isso",
      message:
        "Errado! A afirmativa está correta, pois Key Frames são pontos essenciais na linha do tempo de animação onde as propriedades específicas dos objetos são definidas.",
      type: "error",
    },
    {
      optionId: "q2-option-2",
      feedBackId: "q2-box-feedback",
      title: "CORRETO",
      message:
        "Certa resposta! De fato, os key frames são pontos essenciais na linha do tempo de animação onde as propriedades específicas dos objetos são definidas.",
      type: "success",
    },
  ],
};

var question3 = {
  type: "RADIO",
  title: "QUESTÃO 3 - Verdadeiro ou Falso",
  description:
    "No Unity, a entrada e saída de dados é como você se comunica com seu jogo.",
  feedbacks: [
    {
      optionId: "q3-option-1",
      feedBackId: "q3-box-feedback",
      title: "OPS!",
      message:
        "Errou! A entrada e saída de dados é como você se comunica com seu jogo.",
      type: "error",
    },
    {
      optionId: "q3-option-2",
      feedBackId: "q3-box-feedback",
      title: "CORRETO",
      message:
        "Certa resposta! A entrada e saída de dados é como você se comunica com seu jogo.",
      type: "success",
    },
  ],
};

var question4 = {
  type: "RADIO",
  title: "QUESTÃO 4 - Verdadeiro ou Falso",
  description:
    "No Unity, um RigidBody é um componente que você pode adicionar a um GameObject para aplicar animações",
  feedbacks: [
    {
      optionId: "q4-option-1",
      feedBackId: "q4-box-feedback",
      title: "CORRETO",
      message:
        "Certa Resposta! O RigidBody é usado para adicionar elementos de física a um GameObject",
      type: "success",
    },
    {
      optionId: "q4-option-2",
      feedBackId: "q4-box-feedback",
      title: "OPS!",
      message:
        "Errou! O RigidBody é um componente ligado a física do GameObject, não a animação.",
      type: "error",
    },
  ],
};
