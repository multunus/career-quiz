$(document).ready( function(){
  Utils.populateList('questionType', PrefetchedJsonData.QuestionTypesSpreadsheet);
  Utils.populateList('answer', PrefetchedJsonData.AnswersSpreadsheet);
  Utils.populateList('question', PrefetchedJsonData.QuestionsSpreadsheet);
  Utils.populateList('choice', PrefetchedJsonData.ChoicesSpreadsheet);
  
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
