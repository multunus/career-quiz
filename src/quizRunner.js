quizRunner = {
  getRadioOptionContainer: function(name, value, text){
    return "<div><input type='radio' value='" + value + "' name='" + name + "'>" + text + "</div>";
  },
  getChoicesForQuestion: function(questionId){
    return _.filter(EngineNameSpace.listOfChoices, function(choice){ return choice.questionId == questionId })
  }
};
