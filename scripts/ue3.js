var question1 = {
  type: "RADIO",
  title: "QUESTÃO 1",
  description:
    "Qual dos seguintes padrões de projeto NÃO é um padrão criacional?",
  feedbacks: [
    {
      optionId: "q1-option-1",
      feedBackId: "q1-box-feedback",
      title: "Errado!",
      message:
        "O padrão Builder é sim um padrão criacional. Sua característica é permitir a construção de objetos complexos passo a passo, isolando a complexidade.",
      type: "error",
    },
    {
      optionId: "q1-option-2",
      feedBackId: "q1-box-feedback",
      title: "Exato!",
      message:
        "O Mediator é, na verdade, um padrão de projetos comportamental.",
      type: "success",
    },
    {
      optionId: "q1-option-3",
      feedBackId: "q1-box-feedback",
      title: "Errado!",
      message: "O padrão factory é um clássico padrão criacional.",
      type: "error",
    },
    {
      optionId: "q1-option-4",
      feedBackId: "q1-box-feedback",
      title: "Errado!",
      message:
        "O Singleton é um padrão criacional que garante que uma classe tenha apenas uma instância e fornece um ponto de acesso global a ela.",
      type: "error",
    },
  ],
};

var question2 = {
  type: "RADIO",
  title: "QUESTÃO 2 - Avalie se a afirmação a seguir é verdadeira ou falsa.",
  description:
    "O Padrão Singleton garante que uma classe tenha apenas uma instância e fornece um ponto de acesso global a ela.",
  feedbacks: [
    {
      optionId: "q2-option-1",
      feedBackId: "q2-box-feedback",
      title: "OPS!",
      message:
        "De fato, o padrão Singleton garante que apenas uma instância seja criada para uma classe.",
      type: "error",
    },
    {
      optionId: "q2-option-2",
      feedBackId: "q2-box-feedback",
      title: "Exato!",
      message:
        "O Padrão Singleton de fato garante que uma classe tenha apenas uma instância e fornece um ponto de acesso global a ela.",
      type: "success",
    },
  ],
};

var question3 = {
  type: "RADIO",
  title: "QUESTÃO 3 - Avalie se a afirmação a seguir é verdadeira ou falsa.",
  description:
    "O Padrão Factory é um padrão criacional que usa métodos de fábrica para lidar com o processo de criação de objetos, permitindo que uma classe delegue a instanciamento para subclasses.",
  feedbacks: [
    {
      optionId: "q3-option-1",
      feedBackId: "q3-box-feedback",
      title: "OPS!",
      message:
        "A afirmativa é verdadeira, pois o padrão Factory usa métodos para lidar com o processo de criação de objetos.",
      type: "error",
    },
    {
      optionId: "q3-option-2",
      feedBackId: "q3-box-feedback",
      title: "Exato!",
      message:
        "O Padrão Factory é um padrão criacional que usa métodos de fábrica para lidar com o processo de criação de objetos, permitindo que uma classe delegue a instanciamento para subclasses.",
      type: "success",
    },
  ],
};
