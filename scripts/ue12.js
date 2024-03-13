var question1 = {
  type: "RADIO",
  title: "QUESTÃO 1",
  description:
    "Qual é a função primária de um Sistema de Gerenciamento de Banco de Dados (SGBD)?",
  feedbacks: [
    {
      optionId: "q1-option-1",
      feedBackId: "q1-box-feedback",
      title: "Não é isso",
      message:
        "Incorreto. Processamento de texto é a função de aplicativos como editores de texto, não de SGBDs.",
      type: "error",
    },
    {
      optionId: "q1-option-2",
      feedBackId: "q1-box-feedback",
      title: "Ops!",
      message:
        "Incorreto. O gerenciamento de recursos do sistema é mais relacionado ao sistema operacional do que ao SGBD.",
      type: "error",
    },
    {
      optionId: "q1-option-3",
      feedBackId: "q1-box-feedback",
      title: "Você acertou",
      message:
        "Correto. Esta é a função principal de um SGBD, fornecendo uma maneira eficiente e organizada de armazenar, recuperar e gerenciar dados em um banco de dados.",
      type: "success",
    },
    {
      optionId: "q1-option-4",
      feedBackId: "q1-box-feedback",
      title: "Opa!",
      message:
        "Incorreto! Renderização gráfica é relacionada a softwares de design gráfico e jogos, não a SGBDs.",
      type: "error",
    },
  ],
};

var question2 = {
  type: "RADIO",
  title: "QUESTÃO 2",
  description:
    "Em um banco de dados SQL, que tipo de dado seria mais apropriado para armazenar um endereço de email?",
  feedbacks: [
    {
      optionId: "q2-option-1",
      feedBackId: "q2-box-feedback",
      title: "Não é isso",
      message:
        "Incorreto! Este tipo de dado serve para armazenar números inteiros",
      type: "error",
    },
    {
      optionId: "q2-option-2",
      feedBackId: "q2-box-feedback",
      title: "Ops!",
      message:
        "Incorreto! Este tipo de dados serve para armazenar números reais",
      type: "error",
    },
    {
      optionId: "q2-option-3",
      feedBackId: "q2-box-feedback",
      title: "Você acertou",
      message:
        "Resposta correta! Como um endereço de e-mail é formado apenas por caracteres, o Varchar é a melhor opção de tipos de dados.",
      type: "success",
    },
    {
      optionId: "q2-option-4",
      feedBackId: "q2-box-feedback",
      title: "Opa!",
      message: "Incorreto! Este tipo serve para armazenar valores lógicos.",
      type: "error",
    },
  ],
};

var question3 = {
  type: "RADIO",
  title: "QUESTÃO 3",
  description: "O que significa a sigla SQL em banco de dados?",
  feedbacks: [
    {
      optionId: "q3-option-1",
      feedBackId: "q3-box-feedback",
      title: "Não é isso",
      message:
        "Ops, você se equivocou! Não é “Sequential” é Structured. Volte até a seção sobre SQL e reforce seu aprendizado.",
      type: "error",
    },
    {
      optionId: "q3-option-2",
      feedBackId: "q3-box-feedback",
      title: "Ops!",
      message:
        "Incorreto! não é “Standard” é Structured. Mas não se preocupe, volte até a seção sobre SQL e reforce seu aprendizado.",
      type: "error",
    },
    {
      optionId: "q3-option-3",
      feedBackId: "q3-box-feedback",
      title: "Você acertou",
      message:
        "Correto! SQL é uma linguagem estruturada para consultas em bancos relacionais.",
      type: "success",
    },
    {
      optionId: "q3-option-4",
      feedBackId: "q3-box-feedback",
      title: "Opa!",
      message:
        "Opa, acho que você deve voltar à seção de SQL! Não, o S de SQL é Structured (estruturado). Volte até a seção sobre SQL e reforce seu aprendizado.",
      type: "error",
    },
  ],
};

var question4 = {
  type: "RADIO",
  title: "QUESTÃO 4 - Verdadeiro ou Falso",
  description:
    "Um índice em um banco de dados é uma estrutura de dados que melhora a velocidade das operações, mas pode resultar em maior uso do armazenamento de dados.",
  feedbacks: [
    {
      optionId: "q4-option-1",
      feedBackId: "q4-box-feedback",
      title: "Opa!",
      message: "Incorreto! Índices ocupam mais espaço de armazenamento.",
      type: "error",
    },
    {
      optionId: "q4-option-2",
      feedBackId: "q4-box-feedback",
      title: "CORRETO",
      message:
        "Correto! Os Índices aceleram as consultas de recuperação de dados, mas como são estruturas de dados adicionais, eles ocupam mais espaço de armazenamento.",
      type: "success",
    },
  ],
};
