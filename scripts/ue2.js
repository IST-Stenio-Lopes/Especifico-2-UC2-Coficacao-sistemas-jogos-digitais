var question1 = {
  type: "RADIO",
  title: "Verdadeiro ou Falso",
  description: "Avalie se a afirmação a seguir é verdadeira ou falsa.",
  feedbacks: [
    {
      optionId: "q1-option-1",
      feedBackId: "q1-box-feedback",
      title: "OPS!",
      message:
        "Os padrões criacionais objetivam resolver questões relacionadas com a criação de objetos.",
      type: "error",
    },
    {
      optionId: "q1-option-2",
      feedBackId: "q1-box-feedback",
      title: "Exato!",
      message: "Observer é enquadrado com um padrão comportamental.",

      type: "success",
    },
  ],
};

var question2 = {
  type: "RADIO",
  title: "Verdadeiro ou Falso",
  description: "Avalie se a afirmação a seguir é verdadeira ou falsa.",
  feedbacks: [
    {
      optionId: "q2-option-1",
      feedBackId: "q2-box-feedback",
      title: "OPS!",
      message:
        "O padrão Strategy permite que um objeto mude seu comportamento em tempo de execução.",
      type: "error",
    },
    {
      optionId: "q2-option-2",
      feedBackId: "q2-box-feedback",
      title: "Exato!",
      message:
        "Permitir que um elemento de jogo altere seu comportamento durante a execução do mesmo é a característica marcante do padrão de projetos Strategy.",
      type: "success",
    },
  ],
};

var question3 = {
  type: "RADIO",
  title: "Verdadeiro ou Falso",
  description: "Avalie se a afirmação a seguir é verdadeira ou falsa.",
  feedbacks: [
    {
      optionId: "q3-option-1",
      feedBackId: "q3-box-feedback",
      title: "OPS!",
      message:
        "A afirmação é verdadeira, pois o Padrão Visitor permite que uma nova operação seja executada em um grupo de objetos, sem que esses objetos precisem ser modificados.",
      type: "error",
    },
    {
      optionId: "q3-option-2",
      feedBackId: "q3-box-feedback",
      title: "Exato!",
      message:
        "Isso é feito ao permitir que um objeto &#34;visitante&#34; seja passado para o grupo de objetos e execute a operação.",
      type: "success",
    },
  ],
};

var question4 = {
  type: "RADIO",
  title: "QUESTÃO 4",
  description:
    "O que caracteriza o modelo de segurança da informação baseado em padrões e regulamentações?",
  feedbacks: [
    {
      optionId: "q4-option-1",
      feedBackId: "q4-box-feedback",
      title: "OPS!",
      message:
        "Essa afirmação descreve o Design Pattern Adapter, não o Mediator.",
      type: "error",
    },
    {
      optionId: "q4-option-2",
      feedBackId: "q4-box-feedback",
      title: "Acertou!",
      message:
        "O padrão Mediator define um objeto que encapsula como um conjunto de objetos interage. Além disso, esse padrão promove o acoplamento fraco evitando que os objetos se refiram explicitamente uns aos outros, permitindo sua interação de forma independente.",
      type: "success",
    },
    {
      optionId: "q4-option-3",
      feedBackId: "q4-box-feedback",
      title: "OPS!",
      message:
        "Essa afirmação descreve o Design Pattern Factory Method, não o Mediator.",
      type: "error",
    },
    {
      optionId: "q4-option-4",
      feedBackId: "q4-box-feedback",
      title: "OPS!",
      message:
        "Essa afirmação descreve o Design Pattern Composite, não o Mediator.",
      type: "error",
    },
  ],
};
