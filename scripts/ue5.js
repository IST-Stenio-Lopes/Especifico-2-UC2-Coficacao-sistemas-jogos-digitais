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
          "A cobrança para ter acesso a versões de teste é possível e até bastante comum no mercado.",
        type: "error",
      },
      {
        optionId: "q1-option-2",
        feedBackId: "q1-box-feedback",
        title: "Não é isso",
        message:
          "O acesso antecipado a um jogo geralmente é concedido quando a maioria do seu conteúdo já foi integrado e testado.",
        type: "error",
      },
      {
        optionId: "q1-option-3",
        feedBackId: "q1-box-feedback",
        title: "Você acertou",
        message:
          "É muito importante respeitar a fase de testes e todo o tempo necessário para testar o jogo corretamente.",
        type: "success",
      },
      {
        optionId: "q1-option-4",
        feedBackId: "q1-box-feedback",
        title: "Atenção",
        message:
            "A versão alfa não é a primeira versão finalizada mas sim a primeira para testar a implementação dos elementos.",
        type: "error",
      },
    ],
};

var question2 = {
    type: "RADIO",
    title: "Verdadeiro ou Falso",
    description:
      "Avalie se a afirmação a seguir é verdadeira ou falsa.",
    feedbacks: [
      {
        optionId: "q2-option-1",
        feedBackId: "q2-box-feedback",
        title: "Cuidado",
        message:
          "Na verdade o principal ponto é checar se o jogo realmente funciona sem problemas e se não há nada de errado ou ofensivo com o seu conteúdo.",
        type: "error"
      },
      {
        optionId: "q2-option-2",
        feedBackId: "q2-box-feedback",
        title: "Parabéns",
        message:
          "A  diversão é importante, mas nesse caso não é o foco.",
        type: "success"
      },
    ],
};

var question3 = {
    type: "COMPLETE",
    title:
      "Escolha a palavra que é a resposta correta para completar as sentenças a seguir:",
    subQuestions: [
      {
        subQuestionId: "q3-sq1",
        title:
          "1. Microfone, mouse, webcam são exemplos de periférico de _________",
        description: "",
        feedbackEmpty: {
          feedBackId: "q3-sq1-box-feedback",
          title: "OPS!",
          message: "Complete todos os campos da frase.",
          type: "error",
        },
        feedBackElementsId: ["q3-sq1-box-feedback"],
        userAnswers: [],
        rightAnswers: [
          {
            id: "q3-sq1-block-1",
            value: "Pincéis virtuais",
            feedbacks: [
              {
                feedBackId: "q3-sq1-box-feedback",
                title: "Não é isso",
                message:
                  "Esse tipo serve para avaliar se o jogo está com desafios bem equilibrados, por exemplo.",
                type: "error",
                value: "Balanceamento"
              },
              {
                feedBackId: "q3-sq1-box-feedback",
                title: "Você acertou",
                message: "Ao passar nos testes de compatibilidade o jogo não terá problemas para ser executado.",
                type: "success",
                value: "Compatibilidade"
              },
              {
                feedBackId: "q3-sq1-box-feedback",
                title: "Ops",
                message:
                  "Esse tipo seria usado para avaliar como os jogadores interagem com o jogo.",
                type: "error",
                value: "Usabilidade"
              },
            ],
          },
        ],
      },
    ],
};