$(document).ready( function(){
  Utils.populateList('questionType', FetchedJsonData.QuestionTypesSpreadsheet);
  Utils.populateList('answer', FetchedJsonData.AnswersSpreadsheet);
  Utils.populateList('question', FetchedJsonData.QuestionsSpreadsheet);
  Utils.populateList('choice', FetchedJsonData.ChoicesSpreadsheet);
  
  EngineNameSpace.currentQuestion = 0;
  QuizRunner.showNextQuestion();

  $('#submit-choice').click(function(event){
    event.preventDefault();
    var radioChecked = $('#questionnaire input[type=radio]:checked');
    if ( radioChecked.length === 0  ){
      $("#error-field").show();
    }
    else {
      $("#error-field").hide();
      QuizRunner.pushChosenChoice(radioChecked[0].value);
      QuizRunner.showNextQuestion();
    }
  });
  $('#results-screen-next').click(function(event){
    event.preventDefault();
    $('.screen').hide();
    $('#cta-container').show();
  });
  $('#cta-screen-next').click(function(event){
    event.preventDefault();
    $('.screen').hide();
    $('#share-container').show();
  });
  $('#share-screen-back').click(function(event){
    event.preventDefault();
    $('.screen').hide();
    $('#results-container').show();
  });
});
