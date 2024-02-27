var question1 = {
  type: "RADIO",
  title: "QUESTÃO 1",
  description:
    "Sobre a coleta de dados em jogos digitais, o que a LGPD exige dos desenvolvedores?",
  feedbacks: [
    {
      optionId: "q1-option-1",
      feedBackId: "q1-box-feedback",
      title: "Errado!",
      message:
        "Não é bem assim. A LGPD pede exatamente o oposto: que só sejam coletados os dados estritamente necessários.",
      type: "error",
    },
    {
      optionId: "q1-option-2",
      feedBackId: "q1-box-feedback",
      title: "Exato!",
      message:
        "A LGPD exige transparência na coleta de dados e o consentimento dos jogadores.",
      type: "success",
    },
    {
      optionId: "q1-option-3",
      feedBackId: "q1-box-feedback",
      title: "Errado!",
      message:
        "A LGPD exige que o consentimento seja obtido antes de qualquer coleta de dados, independentemente da finalidade.",
      type: "error",
    },
    {
      optionId: "q1-option-4",
      feedBackId: "q1-box-feedback",
      title: "Errado!",
      message:
        "Isso não está de acordo com a LGPD. Os jogadores precisam ser informados sobre como seus dados serão utilizados.",
      type: "error",
    },
  ],
};

var question2 = {
  type: "RADIO",
  title: "QUESTÃO 2",
  description:
    "Qual dos seguintes cenários é um exemplo de um ataque de negação de serviço (DoS)?",
  feedbacks: [
    {
      optionId: "q2-option-1",
      feedBackId: "q2-box-feedback",
      title: "Errado!",
      message:
        "Isso é um exemplo de um ataque de phishing, não um ataque de negação de serviço.",
      type: "error",
    },
    {
      optionId: "q2-option-2",
      feedBackId: "q2-box-feedback",
      title: "Errado!",
      message:
        "Isso é um exemplo de roubo de conta, não um ataque de negação de serviço.",
      type: "error",
    },
    {
      optionId: "q2-option-3",
      feedBackId: "q2-box-feedback",
      title: "Exato!",
      message:
        "Isso é um exemplo de um ataque de negação de serviço. O objetivo de um ataque DoS é tornar um serviço indisponível sobrecarregando os servidores com tráfego malicioso.",
      type: "success",
    },
    {
      optionId: "q2-option-4",
      feedBackId: "q2-box-feedback",
      title: "Errado!",
      message:
        "Isso é um exemplo de um vazamento de dados, não um ataque de negação de serviço.",
      type: "error",
    },
  ],
};

var question3 = {
  type: "RADIO",
  title: "QUESTÃO 3",
  description:
    "Quando dois conjuntos de dados distintos resultam numa mesma função hash criptografada, esse ataque se chama Man-in-the-Middle.",
  feedbacks: [
    {
      optionId: "q3-option-1",
      feedBackId: "q3-box-feedback",
      title: "OPS!",
      message:
        "O Man-in-the-Middle (MitM) é um tipo de ataque cibernético em que um terceiro malicioso intercepta e, potencialmente, modifica a comunicação entre duas partes sem o conhecimento delas.",
      type: "error",
    },
    {
      optionId: "q3-option-2",
      feedBackId: "q3-box-feedback",
      title: "Exato!",
      message:
        "O Man-in-the-Middle (MitM) é um tipo de ataque em que o atacante pode monitorar, alterar ou injetar dados na troca de informações.",
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
      title: "Errado!",
      message: "Esse é o modelo adaptado à organização.",
      type: "error",
    },
    {
      optionId: "q4-option-2",
      feedBackId: "q4-box-feedback",
      title: "Errado!",
      message: "Esse é o modelo baseado em frameworks de boas práticas.",
      type: "error",
    },
    {
      optionId: "q4-option-3",
      feedBackId: "q4-box-feedback",
      title: "Exato!",
      message:
        "O modelo baseado em padrões e regulamentações se adequar a normas e regulamentos estipulados por entidades governamentais ou setoriais.",
      type: "success",
    },
    {
      optionId: "q4-option-4",
      feedBackId: "q4-box-feedback",
      title: "Errado!",
      message: "Esse é o modelo baseado em boas práticas.",
      type: "error",
    },
  ],
};

var interableImages1 = {
  //objeto para controle da função de interação de imagems
  images: [
    "./img/ue1/Slide 1.png",
    "./img/ue1/Slide 2.png",
    "./img/ue1/Slide 3.png",
  ], //as src das imagens que serão interadas
  htmlImageId: "interable1", //o id da tag img que está sendo exibido no html da página
  index: 0, //o current index referente a qual imagem está sendo exibida no momento
};
