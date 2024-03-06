var question1 = {
  type: "RADIO",
  title: "QUESTÃO 1",
  description:
    "Qual das seguintes afirmações é verdadeira sobre classes e objetos?",
  feedbacks: [
    {
      optionId: "q1-option-1",
      feedBackId: "q1-box-feedback",
      title: "OPS!",
      message: "O objeto é que instancia uma classe.",
      type: "error",
    },
    {
      optionId: "q1-option-2",
      feedBackId: "q1-box-feedback",
      title: "OPS!",
      message: "As classes é que são planos para a criação de objetos.",
      type: "error",
    },
    {
      optionId: "q1-option-3",
      feedBackId: "q1-box-feedback",
      title: "Exato!",
      message:
        "Uma classe define os atributos e comportamentos que um objeto deve ter.",
      type: "success",
    },
    {
      optionId: "q1-option-4",
      feedBackId: "q1-box-feedback",
      title: "OPS!",
      message: "Objetos podem ter atributos ou comportamentos.",
      type: "error",
    },
  ],
};

var question2 = {
  type: "RADIO",
  title: "QUESTÃO 2 - Avalie se a afirmação a seguir é verdadeira ou falsa.",
  description:
    "Em Programação Orientada a Objetos, a herança permite que uma classe herde todos os atributos e métodos de outra classe, mas a classe filha não pode ter atributos ou métodos adicionais próprios.",
  feedbacks: [
    {
      optionId: "q2-option-1",
      feedBackId: "q2-box-feedback",
      title: "Exato!",
      message:
        "A classe filha também pode definir seus próprios atributos e métodos adicionais.",
      type: "success",
    },
    {
      optionId: "q2-option-2",
      feedBackId: "q2-box-feedback",
      title: "OPS!",
      message:
        "Na verdade, a classe filha também pode definir seus próprios atributos e métodos adicionais.",
      type: "error",
    },
  ],
};

var question3 = {
  type: "RADIO",
  title: "QUESTÃO 3 - Avalie se a afirmação a seguir é verdadeira ou falsa.",
  description:
    "Em Programação Orientada a Objetos, o polimorfismo permite que métodos com o mesmo nome tenham comportamentos diferentes dependendo da classe do objeto que os está chamando.",
  feedbacks: [
    {
      optionId: "q3-option-1",
      feedBackId: "q3-box-feedback",
      title: "OPS!",
      message:
        "O polimorfismo é um conceito que permite que métodos com o mesmo nome tenham comportamentos diferentes.",
      type: "error",
    },
    {
      optionId: "q3-option-2",
      feedBackId: "q3-box-feedback",
      title: "Exato!",
      message:
        "O polimorfismo é um conceito fundamental da Programação Orientada a Objetos que permite que métodos com o mesmo nome tenham comportamentos diferentes dependendo da classe do objeto que os está chamando.",
      type: "success",
    },
  ],
};

var question4 = {
  type: "RADIO",
  title: "QUESTÃO 4 - Avalie se a afirmação a seguir é verdadeira ou falsa.",
  description:
    "Em Programação Orientada a Objetos, o encapsulamento é um princípio de POO que permite que uma classe herde atributos e métodos de outra classe.",
  feedbacks: [
    {
      optionId: "q4-option-1",
      feedBackId: "q4-box-feedback",
      title: "Exato!",
      message:
        "Muito bem, você está atento! Essa definição se refere ao princípio da Herança em POO",
      type: "success",
    },
    {
      optionId: "q4-option-2",
      feedBackId: "q4-box-feedback",
      title: "OPS!",
      message:
        "É melhor você rever o material! O princípio do encapsulamento refere-se à prática de ocultar os detalhes internos do funcionamento de um objeto e expor apenas aquelas partes que são seguras e necessárias para a interação externa.",
      type: "error",
    },
  ],
};
