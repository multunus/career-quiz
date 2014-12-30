quizRunner = {
  getRadioOptionContainer: function(name, value, text){
    return "<div><input type='radio' value='" + value + "' name='" + name + "'>" + text + "</div>";
  },
  getChoicesForQuestion: function(questionId){
    return _.filter(EngineNameSpace.listOfChoices, function(choice){ return choice.questionId == questionId });
  },
  getQuestionFromId: function(questionId){
    return _.find(EngineNameSpace.listOfQuestions, function(ques){ return ques.pid == questionId });
  },
  fillQuestionContainer: function(questionId){
    $("#question-text").text(quizRunner.getQuestionFromId(questionId).questionText);
    var choices = quizRunner.getChoicesForQuestion(questionId);
    _.each(choices, function(choice){ $("#choices").append(quizRunner.getRadioOptionContainer(choice.questionId, choice.pid, choice.choiceText))})
  }
};
