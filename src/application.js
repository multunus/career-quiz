$(document).ready( function(){
  $('#start-here').click(function(){
    EngineNameSpace.currentQuestion = 0;
    QuizRunner.showNextQuestion();
  });
});
