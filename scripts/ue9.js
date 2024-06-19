var question1 = {
  type: "RADIO",
  title: "QUESTÃO 1",
  description:
    "Qual é considerada a primeira engine de jogos aberta ao público?",
  feedbacks: [
    {
      optionId: "q1-option-1",
      feedBackId: "q1-box-feedback",
      title: "Ops!",
      message:
        "Errou! Apesar de PONG ter sido o primeiro jogo popular, não é o primeiro motor de desenvolvimento",
      type: "error",
    },
    {
      optionId: "q1-option-2",
      feedBackId: "q1-box-feedback",
      title: "Você acertou",
      message:
        "Certa Resposta! Pinball Construction Set é considerada a primeira engine de jogos aberta ao público.",
      type: "success",
    },
    {
      optionId: "q1-option-3",
      feedBackId: "q1-box-feedback",
      title: "Não é isso",
      message: "Errou! A Unreal é uma famosa engine, porém não foi a primeira.",
      type: "error",
    },
    {
      optionId: "q1-option-4",
      feedBackId: "q1-box-feedback",
      title: "Não é isso",
      message: "Errado! A DOOM Engine marcou época, mas não foi a primeira",
      type: "error",
    },
  ],
};

var question2 = {
  type: "RADIO",
  title: "QUESTÃO 2",
  description: "Qual dessas afirmativas melhor define uma engine de Jogos?",
  feedbacks: [
    {
      optionId: "q2-option-1",
      feedBackId: "q2-box-feedback",
      title: "OPS!",
      message:
        "Errado. Para este fim, usam-se softwares de criação como Photoshop, Krita ou FireAlpaca.",
      type: "error",
    },
    {
      optionId: "q2-option-2",
      feedBackId: "q2-box-feedback",
      title: "Não é isso",
      message: "Errado. Muitas engines já possuem suporte a microtransações",
      type: "error",
    },
    {
      optionId: "q2-option-3",
      feedBackId: "q2-box-feedback",
      title: "Você acertou",
      message:
        "Certo. Também conhecidos como motores de jogos, as engines são softwares para desenvolvimento de games.",
      type: "success",
    },
    {
      optionId: "q2-option-4",
      feedBackId: "q2-box-feedback",
      title: "Opa!",
      message:
        "Errado. Para este fim, são usados softwares como Blender e 3Dmax.",
      type: "error",
    },
  ],
};

var question3 = {
  type: "RADIO",
  title: "QUESTÃO 3",
  description:
    "“Esta aba permite a visualização do produto final, exatamente como será visto pelo jogador. Quando você reproduz o jogo dentro do editor da Unity, é nesta aba que você poderá testá-lo.”  Esta afirmativa se refere a qual importante aba da Unity?",
  feedbacks: [
    {
      optionId: "q3-option-1",
      feedBackId: "q3-box-feedback",
      title: "OPS!",
      message:
        "Errado. Aba Hierarchy lista todos os objetos presentes na cena atual.",
      type: "error",
    },
    {
      optionId: "q3-option-2",
      feedBackId: "q3-box-feedback",
      title: "Não é isso",
      message:
        "Errado. A aba Inspector é usada para visualizar e editar as propriedades dos objetos que você selecionou.",
      type: "error",
    },
    {
      optionId: "q3-option-3",
      feedBackId: "q3-box-feedback",
      title: "Opa!",
      message:
        "Errado. A aba Scene é o espaço de trabalho principal onde você pode visualizar e editar sua cena em 3D ou 2D.",
      type: "error",
    },
    {
      optionId: "q3-option-4",
      feedBackId: "q3-box-feedback",
      title: "Você acertou",
      message:
        "Certa resposta! A aba Game é essencial para a fase de testes, pois permite aos desenvolvedores ver e interagir com o jogo em tempo real.",
      type: "success",
    },
  ],
};

var question4 = {
  type: "RADIO",
  title: "QUESTÃO 4 - Verdadeiro ou Falso",
  description:
    "Em jogos digitais, uma biblioteca exige que o programador programe todos os recursos que precisa do zero.",
  feedbacks: [
    {
      optionId: "q4-option-1",
      feedBackId: "q4-box-feedback",
      title: "CORRETO",
      message:
        "Correto! Em jogos digitais, as bibliotecas são conjuntos de funções e procedimentos pré-inscritos que um desenvolvedor de jogos pode usar para realizar tarefas comuns, em vez de ter que escrever seu próprio código do zero.",
      type: "success",
    },
    {
      optionId: "q4-option-2",
      feedBackId: "q4-box-feedback",
      title: "Não é isso",
      message:
        "Incorreto! Na verdade, é justamente o contrário. As bibliotecas servem para que o programador não tenha que escrever os códigos do zero.",
      type: "error",
    },
  ],
};

var question5 = {
  type: "RADIO",
  title: "QUESTÃO 5 - Verdadeiro ou Falso",
  description:
    "Com a ferramenta Move Tool, você pode alterar o tamanho de um objeto em qualquer direção.",
  feedbacks: [
    {
      optionId: "q5-option-1",
      feedBackId: "q5-box-feedback",
      title: "CORRETO",
      message: "Correto! Essa descrição se refere à ferramenta Scale Tool.",
      type: "success",
    },
    {
      optionId: "q5-option-2",
      feedBackId: "q5-box-feedback",
      title: "Ops!",
      message:
        "Incorreto! Estude um pouco mais, esta descrição se refere a outra ferramenta, a Scale tool.",
      type: "error",
    },
  ],
};
