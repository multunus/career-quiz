quizRunner = {
  getRadioOptionContainer: function(name, value, text){
    return "<div><input type='radio' value='" + value + "' name='" + name + "'>" + text + "</div>";
  },
  getChoicesForQuestion: function(questionId){
    return _.filter(EngineNameSpace.listOfChoices, function(choice){ return choice.questionId == questionId });
  },
  getElementFromListById: function(list, elementId){
    return _.find(list, function(q){ return q.pid == elementId });
  },
  fillQuestionContainer: function(questionId){
    $("#question-text").text(quizRunner.getElementFromListById(EngineNameSpace['listOfQuestions'], questionId).questionText);
    var choices = quizRunner.getChoicesForQuestion(questionId);
    _.each(choices, function(choice){ $("#choices").append(quizRunner.getRadioOptionContainer(choice.questionId, choice.pid, choice.choiceText))})
  }
};
