var question1 = {
    type: "RADIO",
    title: "Verdadeiro ou Falso",
    description:
      "Avalie se a afirmação a seguir é verdadeira ou falsa.",
    feedbacks: [
      {
        optionId: "q1-option-1",
        feedBackId: "q1-box-feedback",
        title: "Você acertou",
        message:
          "Isso mostra que prestou atenção ao assunto.",
        type: "success"
      },
      {
        optionId: "q1-option-2",
        feedBackId: "q1-box-feedback",
        title: "Ops",
        message:
          "Atenção, pois a instalação de um jogo em um console geralmente é diferente da instalação em um computador, por exemplo.",
        type: "error"
      },
    ],
};

var question2 = {
    type: "RADIO",
    title: "Qual das opções abaixo corresponde à janela que exibe mensagens de depuração, avisos e erros do jogo na Unity?",
    description: "",
    feedbacks: [
      {
        optionId: "q2-option-1",
        feedBackId: "q2-box-feedback",
        title: "OPS!",
        message:
          "Antes de configurar a monetização, é necessário realizar outros passos fundamentais, como criar uma conta de desenvolvedor.",
        type: "error",
      },
      {
        optionId: "q2-option-2",
        feedBackId: "q2-box-feedback",
        title: "Não é isso",
        message:
          "Mesmo sendo importante no processo de publicação de um jogo, criar uma página de informações sobre o jogo não é o primeiro passo.",
        type: "error",
      },
      {
        optionId: "q2-option-3",
        feedBackId: "q2-box-feedback",
        title: "Você acertou",
        message:
          "É necessário criar uma conta na plataforma para poder publicar o jogo.",
        type: "success",
      },
      {
        optionId: "q2-option-4",
        feedBackId: "q2-box-feedback",
        title: "Atenção",
        message:
            "Preparar arquivos e materiais promocionais não é o primeiro passo, pois antes é fundamental realizar outras ações.",
        type: "error",
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
                title: "Atenção",
                message:
                  "A instalação é a etapa em que o jogador vai instalar o jogo no seu dispositivo, ou seja antes de ser executado.",
                type: "error",
                value: "Instalação"
              },
              {
                feedBackId: "q3-sq1-box-feedback",
                title: "Você acertou",
                message: "Graças a ela o jogador consegue jogar o jogo sem erros, com o jogo sendo aberto e executado corretamente.",
                type: "success",
                value: "Integração de sistemas"
              },
              {
                feedBackId: "q3-sq1-box-feedback",
                title: "Ops",
                message:
                  "A Configuração refere-se às opções de configuração disponíveis na hora da publicação do jogo e não garante que ele vá funcionar sem erros.",
                type: "error",
                value: "Configuração"
              },
            ],
          },
        ],
      },
    ],
};