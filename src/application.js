$(document).ready( function(){
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

  $('#fb-share').click(function(){
    FB.ui({
      method: 'share',
      href: 'http://www.dudeonbench.com/careerquiz'
    }, function(response){});
  });
});