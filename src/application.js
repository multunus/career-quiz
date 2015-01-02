$(document).ready( function(){
  $('#start-here').click(function(){
    EngineNameSpace.currentQuestion = 0;
    QuizRunner.showNextQuestion();
  });

  $('#submit-choice').click(function(){
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
});
