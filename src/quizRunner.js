quizRunner = {
  getRadioOptionContainer: function(name, value, text){
    return "<div><input type='radio' value='" + value + "' name='" + name + "'>" + text + "</div>";
  },
  getChoicesForQuestion: function(questionId){
    return _.filter(EngineNameSpace.listOfChoices, function(choice){ if ( choice.questionId == questionId ) { return choice;} });
  },
  getElementFromListById: function(list, elementId){
    return _.find(list, function(q){ if ( q.pid == elementId ) { return q; }});
  },
  fillQuestionContainer: function(questionId){
    $("#question-text").text(quizRunner.getElementFromListById(EngineNameSpace['listOfQuestions'], questionId).questionText);
    var choices = quizRunner.getChoicesForQuestion(questionId);
    _.each(choices, function(choice){ $("#choices").append(quizRunner.getRadioOptionContainer(choice.questionId, choice.pid, choice.choiceText))})
  },
  pushChosenChoice : function(choiceId){
    var choice = quizRunner.getElementFromListById(EngineNameSpace['listOfChoices'], choiceId);
    console.log(choice);
    utils.pushObjectToList('listOfChosenChoices', choice);
  }
};
