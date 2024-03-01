var question1 = {
  type: "RADIO",
  title: "QUESTÃO 1",
  description:
    "O que caracteriza o modelo de segurança da informação baseado em padrões e regulamentações?",
  feedbacks: [
    {
      optionId: "q1-option-1",
      feedBackId: "q1-box-feedback",
      title: "Exato!",
      message:
        "O padrão Decorator diciona responsabilidades adicionais aos objetos do jogo sem alterar seu código.",
      type: "success",
    },
    {
      optionId: "q1-option-2",
      feedBackId: "q1-box-feedback",
      title: "Errado!",
      message:
        "Errado. Essa descrição se refere ao padrão Singleton, que garante que apenas uma instância de um objeto é criada.",
      type: "error",
    },
    {
      optionId: "q1-option-3",
      feedBackId: "q1-box-feedback",
      title: "Errado!",
      message:
        "Opa, é melhor revisar o assunto! Essa não é uma característica do padrão Decorator.",
      type: "error",
    },
    {
      optionId: "q1-option-4",
      feedBackId: "q1-box-feedback",
      title: "Errado!",
      message:
        "Você errou, mas não desanime! O decorator é um padrão que permite a adição de novos estados e comportamentos. E não criar uma interface.",
      type: "error",
    },
  ],
};
