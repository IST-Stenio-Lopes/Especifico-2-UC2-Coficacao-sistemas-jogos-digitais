var question1 = {
  type: "RADIO",
  title: "QUESTÃO 1 - Verdadeiro ou Falso",
  description:
    "O Kanban é uma metodologia ágil que usa um quadro para visualizar o fluxo de trabalho.",
  feedbacks: [
    {
      optionId: "q1-option-1",
      feedBackId: "q1-box-feedback",
      title: "Opa!",
      message:
        "Resposta errada! O Kanban usa um quadro com colunas para visualizar o fluxo de trabalho e identificar gargalos.",
      type: "error",
    },
    {
      optionId: "q1-option-2",
      feedBackId: "q1-box-feedback",
      title: "CORRETO",
      message:
        "Certa resposta! O Kanban usa um quadro com colunas para visualizar o fluxo de trabalho e identificar gargalos.",
      type: "success",
    },
  ],
};

var question2 = {
  type: "RADIO",
  title: "QUESTÃO 2 - Verdadeiro ou Falso",
  description:
    "Considerando a origem do Scrum, assinale se a seguinte afirmação é verdadeira ou falsa: 'O Scrum foi originalmente desenvolvido na Toyota no Japão'.",
  feedbacks: [
    {
      optionId: "q2-option-1",
      feedBackId: "q2-box-feedback",
      title: "CORRETO",
      message:
        "Resposta certa! O Scrum foi concebido por Hirotaka Takeuchi e Ikujiro Nonaka e não desenvolvido pela Toyota.",
      type: "success",
    },
    {
      optionId: "q2-option-2",
      feedBackId: "q2-box-feedback",
      title: "Não é isso",
      message:
        "Resposta errada! O Scrum foi concebido por Hirotaka Takeuchi e Ikujiro Nonaka, mas o sistema Kanban foi o que se originou na Toyota.",
      type: "error",
    },
  ],
};

var question3 = {
  type: "RADIO",
  title: "QUESTÃO 3 - Verdadeiro ou Falso",
  description:
    "A metodologia Lean se concentra em maximizar o trabalho, não o valor para o cliente.",
  feedbacks: [
    {
      optionId: "q3-option-1",
      feedBackId: "q3-box-feedback",
      title: "CORRETO",
      message:
        "Certa Resposta! A metodologia Lean se concentra em maximizar o valor para o cliente e eliminar o desperdício.",
      type: "success",
    },
    {
      optionId: "q3-option-2",
      feedBackId: "q3-box-feedback",
      title: "Não é isso",
      message:
        "Errado! A metodologia Lean se concentra em maximizar o valor para o cliente e eliminar o desperdício.",
      type: "error",
    },
  ],
};
