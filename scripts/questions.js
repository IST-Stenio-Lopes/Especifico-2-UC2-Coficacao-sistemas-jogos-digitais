// função que configura o painel de feedback
function configFeedbackPanel(feedback, display) {
    const feedbackPanel = document.getElementById(feedback.feedBackId);
  
    if(display === 'none') {
        feedbackPanel.style.display = display;
        return;
    }
  
    const iconError = feedbackPanel.getElementsByClassName('feedback-success-icon')[0];
    const iconSuccess = feedbackPanel.getElementsByClassName('feedback-error-icon')[0];
  
    if(feedback.type === 'success') {
        feedbackPanel.classList.add('feedback-success');
        feedbackPanel.classList.remove('feedback-error');
        iconError.style.display = "block";
        iconSuccess.style.display = "none";
    } else {
        feedbackPanel.classList.remove('feedback-success');
        feedbackPanel.classList.add('feedback-error');
        iconError.style.display = "none";
        iconSuccess.style.display = "block";
    }
  
    feedbackPanel.getElementsByClassName("feedback-title")[0].innerHTML = feedback.title;
    feedbackPanel.getElementsByClassName("feedback-message")[0].innerHTML = feedback.message;
    feedbackPanel.style.display = display;
  }
  
  // Nova função para submeter as questões to tipo radio
  function handleSubmitRadioTypeQuestion(question) {
  
    let selectedOptions = [];
  
    question.feedbacks.forEach(feedback => {
        const radioInput = document.getElementById(feedback.optionId);
        document.getElementById(feedback.feedBackId).style.display = 'none';
  
        if(radioInput.checked) {
            selectedOptions.push(feedback);
        }
    })
  
    selectedOptions.forEach(feedback => {
        configFeedbackPanel(feedback, 'block');
    })
    
  }
  
  // Nova função para submeter as questões do tipo checkbox
  function handleSubmitCheckboxTypeQuestion(question) {
    question.feedbacks.forEach(feedback => {
        const radioInput = document.getElementById(feedback.optionId);
  
        configFeedbackPanel(feedback,  radioInput.checked ? 'block': 'none');
    });
  }
  
  // Função para checar se alguma questão do tipo complete tem campos vazios
  function questionCompleteTypeHasEmptyField(subQuestion) {
    let hasEmptyFields = false;
  
    const blocks = document.getElementsByClassName(subQuestion.subQuestionId)[0].getElementsByClassName('block');
  
    for (const block of blocks) {
        if (block.innerHTML.includes('_')) {
            hasEmptyFields = true;
        }
    }
  
    return hasEmptyFields;
  }
  
  // Nova função para submeter as questões do tipo complete
  function handleSubmitCompleteTypeQuestion(question) {
  
    question.subQuestions.forEach(subQuestion => {
        subQuestion.feedBackElementsId.forEach(id => {
            configFeedbackPanel({feedBackId: id}, 'none')
        })
  
        if(questionCompleteTypeHasEmptyField(subQuestion)) {
            configFeedbackPanel(subQuestion.feedbackEmpty, 'block')
        }
        else {
            subQuestion.rightAnswers.forEach(rightAnswer => {
                const answer = document.getElementById(rightAnswer.id);
                
                const feedbackType = (answer.innerHTML.trim() === rightAnswer.value.trim()) ? 'success' : 'error';
                
                const feedbackFound = rightAnswer.feedbacks.find(feedback => {
                  return feedback.value ? answer.innerHTML.trim() === feedback.value : feedback.type === feedbackType
  
                })
                configFeedbackPanel(feedbackFound, 'block')
            })
        }
    })
  }
  
  // Nova função para adicionar o valor selecionado na linha da pergunta 
  function handleFillAnswer(subQuestion, value, input) {
    const blocks = document.getElementsByClassName(subQuestion.subQuestionId)[0].getElementsByClassName('block');
  
    for (const block of blocks) {
        if(block.classList.contains(value.id)) {
            block.innerHTML = '_____________';
            block.classList.remove('ans-t3-box');
            block.classList.remove(value.id);
            return;
        } else if (input && block.innerHTML.includes('_') && input.checked) {
            block.innerHTML = value.field;
            block.classList.add('ans-t3-box');
            block.classList.add(value.id);
            return;
        }
    }
  }
  
  function handleCleanAnswer(subQuestion, value) {
    const blocks = document.getElementsByClassName(subQuestion.subQuestionId)[0].getElementsByClassName('block');
  
    for (const block of blocks) {
        if(block.classList.contains(value.id)) {
            block.innerHTML = '_____________';
            block.classList.remove('ans-t3-box');
            block.classList.remove(value.id);
        }
    }
  
    unselectLastCheckFromCompleteTypeQuestion(subQuestion, value, false);
  }
  
  
  function unselectLastCheckFromCompleteTypeQuestion(subQuestion, value, fill = true) {
    const inputs = document.getElementsByClassName(subQuestion.subQuestionId + '-options')[0].getElementsByClassName('question-select-type-opt-input');
    
    for (const input of inputs) {
        if(input.id === value.id) {
            input.checked = false;
        } 
    }
  
    if(fill) {
       handleFillAnswer(subQuestion, value);
    }
  }
  
  // função chamada quando se clica no span preenchido da questão
  function unselectCheckFromCompleteTypeQuestion(element, subQuestion) {
    const value = Array.from(element.classList)
        .find(className => className.includes('sq'));
  
    subQuestion.userAnswers  = subQuestion.userAnswers.filter(answer => answer.id !== value);
    handleCleanAnswer(subQuestion, {id: value});
  }
  
  // Nova função para selecionar as opções das questões do tipo complete
  function handleSelectOptionCompleteTypeQuestion(input, subQuestion) {
    const value = { 
        id: input.id,
        field: input.labels[0].innerHTML
    };
    
  
    if(subQuestion.userAnswers.find(answer => answer.id === value.id)) {
        subQuestion.userAnswers  = subQuestion.userAnswers.filter(answer => answer.id !== value.id);
    }
    else if(subQuestion.userAnswers.length < subQuestion.rightAnswers.length) {
        subQuestion.userAnswers.push(value);
    } else {
        const lastAnswer = subQuestion.userAnswers[subQuestion.userAnswers.length - 1];
        unselectLastCheckFromCompleteTypeQuestion(subQuestion, lastAnswer);
        subQuestion.userAnswers  = subQuestion.userAnswers.slice(0, subQuestion.userAnswers.length - 1);
        subQuestion.userAnswers.push(value);
    }
    
    handleFillAnswer(subQuestion, value, input);
  }
  
  
  function handleUncheckOptionQuestionT3(question, opt, index){
  let value = document.getElementsByClassName(question.ids.answerId)[index].innerHTML; //Pega o texto no html
  question.options.forEach(element => {
      if(element.name === value){ //checa se algumas das opções tem o texto igual ao que está no value
          element.checks++; //caso tenha, adiciona um valor a mais no numero de checks que aquela opção possui
          resetAnsweredQuestionT3Arr(question, value);
          document.getElementsByClassName(question.ids.answerId)[index].classList.remove('ans-t3-box'); //Depois remove a estilização do box da resposta
          document.getElementsByClassName(question.ids.answerId)[index].innerHTML = question.defaultValue; //Depois reseta o valor que está no campo de resposta 
      
          optButtons = document.getElementById(question.ids.questionId).getElementsByClassName('opt-t3');
  
          setAnswersByReadingPageT3(question);
  
          removeStyleUnselectedButtonT3(question);
      }
  });
  }
  
  function resetAnsweredQuestionT3Arr(question, value){ //percorre o array de respostas
  for(let i = 0; i< question.answered.length; i++){//percorre o array de respostas
      if(question.answered[i] === value){//checa se a posição no array possui o mesmo valor que estava no campo de respostas da página
          question.answered[i] = '';//remove a resposta do array de respondidos
      }
  }
  /**
   * Essa função reseta todas as respostas do array de respostas da questão, caso a resposta do array de questões
   * seja igual ao value passado no parametro. Observação: em questões que podem ser respondidas com o mesmo valor, ele vai mais de um valor
   * então foi criada a função setAnswersByReadingPageT3 para solucionar esse problema. pois ela vai pegar os valores preenchidos no
   * html da página, e povoar o array de respostas.
   */
  }
  
  function handleSelectOptionQuestionT2(question, index, value){
  let element = document.getElementById(question.ids.questionId).getElementsByClassName("pseudo-select")[index];
  element.getElementsByClassName('answer')[0].innerHTML = value;
  question.answered[index] = value;
  if(question.answered.every((element) => !!element)){
      if(question.answered.every((element, index) => element === question.correctAnswers[index])){
          document.getElementById(question.ids.falseBoxId).style.display='none';
          document.getElementById(question.ids.correctBoxId).style.display='block';
      }else{
          document.getElementById(question.ids.correctBoxId).style.display='none';
          document.getElementById(question.ids.falseBoxId).style.display='block';
      }
  }
  }
  
  
  function handleCheckOptionQuestionT3(question, opt, buttonIndex){
  
  if(opt.checks >= 1 && checkAnsweredArrIsFull(question)){ //checa se a opção pode ser selecionada
      let value = opt.name;
      for(i = 0; i<question.answered.length; i++){
          if(question.answered[i] === ''){ //checa se o campo de resposta está vazio
              question.answered[i] = value; //atribui o valor da opção selecionada ao array de respostas
              let answerField = document.getElementsByClassName(question.ids.answerId)[i]; //seleciona o campo de resposta especifico no HTML
              answerField.innerHTML = value; //atribui a opção correspondente no campo de repsosta do HTML
              answerField.classList.add('ans-t3-box'); //adiciona estilização para marcação da da resposta no html
              opt.checks -= 1;
              if(opt.checks === 0){
                  document.getElementsByClassName('opt-t3')[buttonIndex].classList.add('desabled-opt-t3');
              }
              break;
          }
      }
  }
  }
  
  function handleSelectOptionQuestionT1(question){
  
  if(question.answerIndex === undefined){
      document.getElementById(question.ids.correctBoxId).style.display='none';
      document.getElementById(question.ids.falseBoxId).style.display='block';
      document.getElementById(question.ids.falseBoxId).getElementsByClassName('question-box-error-text')[0].innerHTML = 'Selecione ao menos um campo!'
  }else{
      if(question.answerIndex === question.indexCorrectAnswer){
          question.ids.answerId && (document.getElementById(question.ids.answerId).innerHTML = question.correctValue);
          document.getElementById(question.ids.falseBoxId).style.display='none';
          document.getElementById(question.ids.correctBoxId).style.display='block';
          document.getElementById(question.ids.correctBoxId).getElementsByClassName('question-box-correct-text')[0].innerHTML = question.answersMsg[question.indexCorrectAnswer]
      }else{
          question.ids.answerId && (document.getElementById(question.ids.answerId).innerHTML = question.defaultValue);
          document.getElementById(question.ids.correctBoxId).style.display='none';
          document.getElementById(question.ids.falseBoxId).style.display='block';
          document.getElementById(question.ids.falseBoxId).getElementsByClassName('question-box-error-text')[0].innerHTML = question.answersMsg[question.answerIndex]
      }
  }
  }
  
  function handleAnswerTypeOneQuestion(question, indexQuestion){ 
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
  
  function checkAllAnsArrayQuestionIsTrue(questionsArr){ //função recem adicionada pelo chat gpt 05-04-23
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
  
  function checkAnsweredArrIsFull(question){ //Checa se o array de respostas está completamente preenchido
    return question.answered.includes('');
  }
  
  function handleSelectOptionMultiQuestionT3(questionsArr){ //função modificada para o caso da questão ser dividida em mais de uma pergunta, vai receber como parametro um Array com N questões
  // if(question.answered.every((element, index) => {
  //     return question.answered.length === question.correctAnswers.length && question.correctAnswers[index] === element
  // }))
  if(checkAllAnsArrayQuestionIsTrue(questionsArr))
  {
      document.getElementById(questionsArr[questionsArr.length -1].ids.falseBoxId).style.display = 'none';
      document.getElementById(questionsArr[questionsArr.length -1].ids.correctBoxId).style.display = 'block';
  }else
  { 
      document.getElementById(questionsArr[questionsArr.length -1].ids.falseBoxId).style.display = 'block';
      document.getElementById(questionsArr[questionsArr.length -1].ids.correctBoxId).style.display = 'none';
  }
  
  }
  
  function handleSelectOptionQuestionT3(question){
  if(question.answered.every((element, index) => {
      return question.answered.length === question.correctAnswers.length && question.correctAnswers[index] === element
  })){
      document.getElementById(question.ids.falseBoxId).style.display='none';
      document.getElementById(question.ids.correctBoxId).style.display='block';
  }else{
      document.getElementById(question.ids.correctBoxId).style.display='none';
      document.getElementById(question.ids.falseBoxId).style.display='block';
  }
  }

// Função para submeter a resposta da questão tipo Select
function handleSubmitSelectTypeQuestion(question) {
    let isCorrect = true;
  
    question.rightAnswers.forEach((answer) => {
      const select = document.getElementById(answer.selectId);
  
      if (select.value != answer.value) {
        isCorrect = false;
      }
  
      if (!isCorrect) return;
    });
  
    const feedbackType = isCorrect ? "success" : "error";
  
    const feedbackFound = question.feedbacks.find(
      (feedback) => feedback.type === feedbackType
    );
  
    configFeedbackPanel(feedbackFound, "block");
  }
  