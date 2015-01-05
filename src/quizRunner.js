QuizRunner = {
  getRadioOptionContainer: function(name, value, text){
    return "<label class='choice'><input type='radio' value='" + value + "' name='" + name + "'>" + text + "</label>";
  },
  getChoicesForQuestion: function(questionId){
    return _.filter(EngineNameSpace.listOfChoices, function(choice){ if ( choice.questionId == questionId ) { return choice;} });
  },
  getElementFromListById: function(list, elementId){
    return _.find(list, function(q){ if ( q.pid == elementId ) { return q; }});
  },
  fillQuestionContainer: function(questionId){
    $('#question-text').text(QuizRunner.getElementFromListById(EngineNameSpace['listOfQuestions'], questionId).questionText);
    $('#quiz-status').text('QUESTION ' + questionId + '/' + EngineNameSpace.listOfQuestions.length.toString());
    var choices = QuizRunner.shuffle(QuizRunner.getChoicesForQuestion(questionId));
    $('#choices').empty();
    _.each(choices, function(choice){ $("#choices").append(QuizRunner.getRadioOptionContainer(choice.questionId, choice.pid, choice.choiceText))})
  },
  pushChosenChoice : function(choiceId){
    var choice = QuizRunner.getElementFromListById(EngineNameSpace['listOfChoices'], choiceId);
    Utils.pushObjectToList('listOfChosenChoices', choice);
  },
  showNextQuestion: function(){
    if (EngineNameSpace.currentQuestion < EngineNameSpace.listOfQuestions.length) {
      $('#start-container').hide();
      $('#results-container').hide();
      $('#quiz-container').show();
      EngineNameSpace.currentQuestion += 1;
      QuizRunner.fillQuestionContainer((EngineNameSpace.currentQuestion).toString());
    }
    else {
      $('#start-container').hide();
      $('#quiz-container').hide();
      QuizRunner.displayResults();
      $('#results-container').show();
    }
  },
  groupChoicesByQuestionTypes: function(){
    return _.groupBy(EngineNameSpace.listOfChosenChoices, function(choice){
      return choice.questionTypeId;
    });
  },
  groupChoicesByRoles: function(choices){
    return _.groupBy(choices, function(choice){
      return choice.roleId;
    });
  },
  findMostSuitableRole: function(groupByRoles){
    var roleCounts = [];
    _.each(groupByRoles, function(value, key){
      var roleData = {'roleId' : key, 'numberOfElements' : value.length};
      roleCounts.push(roleData);
    });
    return (_.max(roleCounts, function(role){ return role.numberOfElements})).roleId;
  },
  displayResults: function(){
    var groupByQuestionTypes = QuizRunner.groupChoicesByQuestionTypes();
    _.each(groupByQuestionTypes, function(value, key) {
      var result = $("<li class='result'></li>");
      var qType = QuizRunner.getElementFromListById(EngineNameSpace.listOfQuestionTypes, key);
      var qTypeElement = "<span class='question-type-text'>" + qType.ptype + "</span>";
      var groupByRoles = QuizRunner.groupChoicesByRoles(value);
      var chosenRoleId = QuizRunner.findMostSuitableRole(groupByRoles);
      var chosenRole = QuizRunner.getElementFromListById(EngineNameSpace.listOfRoles, chosenRoleId);
      var roleElement = "<span class='role-text'>" + chosenRole.roleText + "</span>";
      result.append(qTypeElement).append(roleElement);
      $("#results-section").append(result);
    });
  },
  //Added from http://stackoverflow.com/a/2450976
  shuffle: function(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
};
