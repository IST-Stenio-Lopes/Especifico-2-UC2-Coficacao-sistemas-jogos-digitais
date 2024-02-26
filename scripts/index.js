/* ----------------------- BEGIN GLOBAL SCRIPT CODE ----------------------- */
loadPage();
var aulaAtual = doLMSGetLessonLocation() || 1;
var lessonStatus = doLMSGetLessonStatus();
var lastPage = 9;

function updateLessonPage() {
  doLMSSetLessonLocation(aulaAtual);

  if (lessonStatus != "completed" && aulaAtual >= lastPage) {
    doLMSSetLessonStatus("completed");
  } else {
    doLMSSetLessonStatus("incomplete");
  }
}

// Change theme to Dark-Mode
function changeTheme() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  if (document.querySelectorAll(".cubeBlack").length > 0) {
    const boxes = document.querySelectorAll(".cubeBlack");
    boxes.forEach(function (box) {
      box.classList.replace("cubeBlack", "cubeWhite");
    });
  } else {
    const boxes = document.querySelectorAll(".cubeWhite");
    boxes.forEach(function (box) {
      box.classList.replace("cubeWhite", "cubeBlack");
    });
  }
}

// Change theme to grayscale
function changeGray() {
  var element = document.documentElement;
  element.classList.toggle("grayScale");
}

// Open Navigation Menu
function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
}

// Close Navigation Menu
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// Define if the scroll button should be visible
function shouldShowScrollButton() {
  if (document.documentElement.scrollTop > 10) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

window.onscroll = () => {
  shouldShowScrollButton();
};

// Change font Size
function changeFontSize() {
  const elementBtnIncreaseFont = document.getElementById("increase-font");
  const elementBtnDecreaseFont = document.getElementById("decrease-font");

  let size = 100;
  const increaseDecrease = 10;
  const minFontSize = 80;
  const maxFontSize = 120;

  const updateFontSize = () => {
    document.body.style.fontSize = `${size}%`;
    elementBtnDecreaseFont.style.cursor =
      size <= minFontSize ? "not-allowed" : "pointer";
    elementBtnIncreaseFont.style.cursor =
      size >= maxFontSize ? "not-allowed" : "pointer";
  };

  const adjustFontSize = (increment) => {
    size = Math.max(minFontSize, Math.min(maxFontSize, size + increment));
    updateFontSize();
  };

  elementBtnIncreaseFont.addEventListener("click", () =>
    adjustFontSize(increaseDecrease)
  );
  elementBtnDecreaseFont.addEventListener("click", () =>
    adjustFontSize(-increaseDecrease)
  );
}

// Open Summary List
function openList() {
  if (
    document.getElementById("panelBtn").style.display === "none" ||
    document.getElementById("panelBtn").style.display === ""
  ) {
    document.getElementById("panelBtn").style.display = "block";
  } else {
    document.getElementById("panelBtn").style.display = "none";
  }
}

// Return to top of page
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*Inicio do script referente as questões */

function handleSelectOptionQuestionT1(question) {
  if (question.answerIndex === undefined) {
    document.getElementById(question.ids.correctBoxId).style.display = "none";
    document.getElementById(question.ids.falseBoxId).style.display = "block";
    document
      .getElementById(question.ids.falseBoxId)
      .getElementsByClassName("question-box-error-text")[0].innerHTML =
      "Selecione ao menos um campo!";
  } else {
    if (question.answerIndex === question.indexCorrectAnswer) {
      question.ids.answerId &&
        (document.getElementById(question.ids.answerId).innerHTML =
          question.correctValue);
      document.getElementById(question.ids.falseBoxId).style.display = "none";
      document.getElementById(question.ids.correctBoxId).style.display =
        "block";
      document
        .getElementById(question.ids.correctBoxId)
        .getElementsByClassName("question-box-correct-text")[0].innerHTML =
        question.answersMsg[question.indexCorrectAnswer];
    } else {
      question.ids.answerId &&
        (document.getElementById(question.ids.answerId).innerHTML =
          question.defaultValue);
      document.getElementById(question.ids.correctBoxId).style.display = "none";
      document.getElementById(question.ids.falseBoxId).style.display = "block";
      document
        .getElementById(question.ids.falseBoxId)
        .getElementsByClassName("question-box-error-text")[0].innerHTML =
        question.answersMsg[question.answerIndex];
    }
  }
}

function handleAnswerTypeOneQuestion(question, indexQuestion) {
  /**
   * :Tipo de questão de marcar
   *
   * 1-  A question vai ser o objeto questão referente a pergunta, contendo o index corretor para ser marcado, o valor
   * que será atribuido a questão, e as mensagens personalizadas por cada questão que será marcada.
   *
   * 2- O indexQuestion vai ser o index passado manualmente no input de tipo radio referente a alternativa selecionada. Que será
   * checado na funcão se é igual ao indexCorrectAnswer da question passada como parametro, caso seja, será exibida o box de resposta
   * correta.
   *
   * 3- O answerValue é o valor do input selecionado, que será preenchido na parte sublinhada caso a resposta esteja correta.
   *
   * 4- O answerId vai ser o id do campo de resposta cuja resposta será inserida no html
   */

  question.answerIndex = indexQuestion;

  // if(indexQuestion === question.indexCorrectAnswer){

  //     question.ids.answerId && (document.getElementById(question.ids.answerId).innerHTML = answerValue);
  //     document.getElementById(question.ids.falseBoxId).style.display='none';
  //     document.getElementById(question.ids.correctBoxId).style.display='block';

  // }else{
  //     question.ids.answerId && (document.getElementById(question.ids.answerId).innerHTML = question.defaultValue);
  //     document.getElementById(question.ids.correctBoxId).style.display='none';
  //     document.getElementById(question.ids.falseBoxId).style.display='block';
  //     document.getElementById(question.ids.falseBoxId).getElementsByClassName('question-box-error-text')[0].innerHTML = question.answersMsg[indexQuestion]
  // }
}

function handleExpandPseudoSelect(question, index) {
  let element = document
    .getElementById(question.ids.questionId)
    .getElementsByClassName("expand")[index];

  if (question.expandedSelect[index]) {
    question.expandedSelect[index] = false;
    element.style.display = "none";
  } else {
    question.expandedSelect[index] = true;
    element.style.display = "block";
  }
}

function handleSelectOptionQuestionT2(question, index, value) {
  let element = document
    .getElementById(question.ids.questionId)
    .getElementsByClassName("pseudo-select")[index];
  element.getElementsByClassName("answer")[0].innerHTML = value;
  question.answered[index] = value;
  if (question.answered.every((element) => !!element)) {
    if (
      question.answered.every(
        (element, index) => element === question.correctAnswers[index]
      )
    ) {
      document.getElementById(question.ids.falseBoxId).style.display = "none";
      document.getElementById(question.ids.correctBoxId).style.display =
        "block";
    } else {
      document.getElementById(question.ids.correctBoxId).style.display = "none";
      document.getElementById(question.ids.falseBoxId).style.display = "block";
    }
  }
}

function handleSelectOptionQuestionT3(question) {
  if (
    question.answered.every((element, index) => {
      return (
        question.answered.length === question.correctAnswers.length &&
        question.correctAnswers[index] === element
      );
    })
  ) {
    document.getElementById(question.ids.falseBoxId).style.display = "none";
    document.getElementById(question.ids.correctBoxId).style.display = "block";
  } else {
    document.getElementById(question.ids.correctBoxId).style.display = "none";
    document.getElementById(question.ids.falseBoxId).style.display = "block";
  }
}

function checkAllAnsArrayQuestionIsTrue(questionsArr) {
  //função recem adicionada pelo chat gpt 05-04-23
  for (let question of questionsArr) {
    if (question.answered.length !== question.correctAnswers.length) {
      return false;
    }
    for (let i = 0; i < question.answered.length; i++) {
      if (question.answered[i] !== question.correctAnswers[i]) {
        return false;
      }
    }
  }
  return true;
}

function handleSelectOptionMultiQuestionT3(questionsArr) {
  //função modificada para o caso da questão ser dividida em mais de uma pergunta, vai receber como parametro um Array com N questões
  // if(question.answered.every((element, index) => {
  //     return question.answered.length === question.correctAnswers.length && question.correctAnswers[index] === element
  // }))
  if (checkAllAnsArrayQuestionIsTrue(questionsArr)) {
    document.getElementById(
      questionsArr[questionsArr.length - 1].ids.falseBoxId
    ).style.display = "none";
    document.getElementById(
      questionsArr[questionsArr.length - 1].ids.correctBoxId
    ).style.display = "block";
  } else {
    document.getElementById(
      questionsArr[questionsArr.length - 1].ids.falseBoxId
    ).style.display = "block";
    document.getElementById(
      questionsArr[questionsArr.length - 1].ids.correctBoxId
    ).style.display = "none";
  }
}

function checkAnsweredArrIsFull(question) {
  //Checa se o array de respostas está completamente preenchido
  return question.answered.includes("");
}

function handleCheckOptionQuestionT3(question, opt, buttonIndex) {
  if (opt.checks >= 1 && checkAnsweredArrIsFull(question)) {
    //checa se a opção pode ser selecionada
    let value = opt.name;
    for (i = 0; i < question.answered.length; i++) {
      if (question.answered[i] === "") {
        //checa se o campo de resposta está vazio
        question.answered[i] = value; //atribui o valor da opção selecionada ao array de respostas
        let answerField = document.getElementsByClassName(
          question.ids.answerId
        )[i]; //seleciona o campo de resposta especifico no HTML
        answerField.innerHTML = value; //atribui a opção correspondente no campo de repsosta do HTML
        answerField.classList.add("ans-t3-box"); //adiciona estilização para marcação da da resposta no html
        opt.checks -= 1;
        if (opt.checks === 0) {
          document
            .getElementsByClassName("opt-t3")
            [buttonIndex].classList.add("desabled-opt-t3");
        }
        break;
      }
    }
  }
}

function resetAnsweredQuestionT3Arr(question, value) {
  //percorre o array de respostas
  for (let i = 0; i < question.answered.length; i++) {
    //percorre o array de respostas
    if (question.answered[i] === value) {
      //checa se a posição no array possui o mesmo valor que estava no campo de respostas da página
      question.answered[i] = ""; //remove a resposta do array de respondidos
    }
  }
  /**
   * Essa função reseta todas as respostas do array de respostas da questão, caso a resposta do array de questões
   * seja igual ao value passado no parametro. Observação: em questões que podem ser respondidas com o mesmo valor, ele vai mais de um valor
   * então foi criada a função setAnswersByReadingPageT3 para solucionar esse problema. pois ela vai pegar os valores preenchidos no
   * html da página, e povoar o array de respostas.
   */
}

function setAnswersByReadingPageT3(question) {
  //Pega o que foi preenchido nos campos e seta no array de respostas
  for (i = 0; i < question.answered.length - 1; i++) {
    if (
      document
        .getElementById(question.ids.questionId)
        .getElementsByClassName(question.ids.answerId)[i].innerHTML !==
      question.defaultValue
    ) {
      question.answered[i] = document
        .getElementById(question.ids.questionId)
        .getElementsByClassName(question.ids.answerId)[i].innerHTML;
    }
  }
  /**
   * essa função foi criada para corrigir o bug da resetAnsweredQuestionAT3r, que dava problema quando tinha
   * uma alternativa que pudesse selecionar mais de uma vez, pois tava percorrendo e limpando todos os registros dela no array de respostas
   */
}

function removeStyleUnselectedButtonT3(question) {
  for (
    i = 0;
    i <
    document
      .getElementById(question.ids.questionId)
      .getElementsByClassName("opt-t3").length;
    i++
  ) {
    if (
      document
        .getElementById(question.ids.questionId)
        .getElementsByClassName("opt-t3")
        [i].classList.contains("desabled-opt-t3")
    ) {
      let optValue = document
        .getElementById(question.ids.questionId)
        .getElementsByClassName("opt-t3")[i].innerHTML;
      question.options.forEach((element) => {
        if (element.name === optValue) {
          if (element.checks >= 1) {
            document
              .getElementById(question.ids.questionId)
              .getElementsByClassName("opt-t3")
              [i].classList.remove("desabled-opt-t3");
          }
        }
      });
    }
  }
  // document.getElementById(question.ids.questionId).getElementsByClassName('opt-t3')[index].classList.('desabled-opt-t3');
}

/* 
  question: Object of question, 
  opt: opção escolhida ()
*/
function handleUncheckOptionQuestionT3(question, opt, index) {
  let value = document.getElementsByClassName(question.ids.answerId)[index]
    .innerHTML; //Pega o texto no html
  question.options.forEach((element) => {
    if (element.name === value) {
      //checa se algumas das opções tem o texto igual ao que está no value
      element.checks++; //caso tenha, adiciona um valor a mais no numero de checks que aquela opção possui
      resetAnsweredQuestionT3Arr(question, value);
      document
        .getElementsByClassName(question.ids.answerId)
        [index].classList.remove("ans-t3-box"); //Depois remove a estilização do box da resposta
      document.getElementsByClassName(question.ids.answerId)[index].innerHTML =
        question.defaultValue; //Depois reseta o valor que está no campo de resposta

      optButtons = document
        .getElementById(question.ids.questionId)
        .getElementsByClassName("opt-t3");

      setAnswersByReadingPageT3(question);

      removeStyleUnselectedButtonT3(question);
    }
  });
}

/*Fim do script referente as questões */

/*Inicio do script referente aos slides de imagem */

// função para exibir a imagem atual
function exibirImagem(interableImage) {
  //A função vai receber o objeto contendo as informações referentes a imagem que ele vai fazer as interações
  const imagem = document.getElementById(interableImage.htmlImageId); //Pega o id da imagem que está na página html, referente aquela interação especifica (pois pode haver mais de uma interação com imagens na página)
  imagem.src = interableImage.images[interableImage.index]; //muda a source da imagem para a que está no array de imagems do objeto, na posição do index do objeto.
}

// função para exibir a próxima imagem
function proximaImagem(interableImage) {
  //A função vai receber o objeto contendo as informações referentes a imagem que ele vai fazer as interações
  if (interableImage.index < interableImage.images.length - 1) {
    //checa se o index atual é a ultima posição do array
    interableImage.index++; //caso seja, ele aumenta o valor do index para que a próxima imagem exibida, seja a da posição correspondente ao novo index no array.
  } else {
    interableImage.index = 0; //caso não, ele volta o index para 0, exibindo a primeira imagem do array
  }

  exibirImagem(interableImage);
}

// função para exibir a imagem anterior
function imagemAnterior(interableImage) {
  //A função vai receber o objeto contendo as informações referentes a imagem que ele vai fazer as interações
  if (interableImage.index > 0) {
    //checa se o index atual é a primeira posição do array
    interableImage.index--; //caso seja, ele diminui uma posição no index atual, para que a próxima imagem exibida, seja a da posição correspondente ao novo index no array.
  } else {
    interableImage.index = interableImage.images.length - 1; //caso não, ele volta o index para a quantidade de elementos que tem no array - 1, exibindo a ultima imagem do array
  }

  exibirImagem(interableImage);
}

/*Fim do script referente aos slides de imagem */
