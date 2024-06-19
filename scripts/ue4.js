var question1 = {
  type: "RADIO",
  title: "QUESTÃO 1",
  description:
    "Qual das seguintes afirmações melhor descreve o padrão de projeto Decorator?",
  feedbacks: [
    {
      optionId: "q1-option-1",
      feedBackId: "q1-box-feedback",
      title: "Exato!",
      message:
        "O padrão Decorator adiciona responsabilidades adicionais aos objetos do jogo sem alterar seu código.",
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

var question2 = {
  type: "RADIO",
  title: "QUESTÃO 2 - Avalie se a afirmação a seguir é verdadeira ou falsa.",
  description:
    "O Design Pattern Adapter é um padrão de design estrutural que permite que a interface de uma classe existente seja usada como outra interface, mas requer que o código-fonte da classe existente seja modificado.",
  feedbacks: [
    {
      optionId: "q2-option-1",
      feedBackId: "q2-box-feedback",
      title: "OPS!",
      message:
        "O Design Pattern Adapter permite que a interface de uma classe existente seja usada como outra interface, sem precisar modificar o código-fonte da classe existente.",
      type: "error",
    },
    {
      optionId: "q2-option-2",
      feedBackId: "q2-box-feedback",
      title: "Exato!",
      message:
        "Design Pattern Adapter é um padrão de design estrutural que permite que a interface de uma classe existente seja usada como outra interface, permitindo que classes existentes trabalhem com outras sem modificar seu código-fonte.",
      type: "success",
    },
  ],
};

var question3 = {
  type: "RADIO",
  title: "QUESTÃO 3 - Avalie se a afirmação a seguir é verdadeira ou falsa.",
  description:
    "O Padrão de Projetos Facade é um padrão de design estrutural que fornece uma interface simples para um sistema complexo, ocultando suas complexidades e fornecendo ao cliente uma maneira mais fácil de acessar o sistema.",
  feedbacks: [
    {
      optionId: "q3-option-1",
      feedBackId: "q3-box-feedback",
      title: "OPS!",
      message: "Leia novamente sobre o padrão de projetos Facade.",
      type: "error",
    },
    {
      optionId: "q3-option-2",
      feedBackId: "q3-box-feedback",
      title: "Exato!",
      message:
        "O Padrão de Projetos Facade é como uma capa que esconde a parte complicada de um programa de computador e mostra ao usuário apenas o que é fácil de entender e usar.",
      type: "success",
    },
  ],
};
