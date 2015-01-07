function QuestionType( options ){
  var self = this;
  Object.keys(options).forEach(function (key) {
    self[key] = options[key] || null;
  });
};
function Question( options ){
  var self = this;
  Object.keys(options).forEach(function (key) {
    self[key] = options[key] || null;
  });
};

function Answer( options ){
  var self = this;
  Object.keys(options).forEach(function (key) {
    self[key] = options[key] || null;
  });
};

function Choice( options ){
  var self = this;
  Object.keys(options).forEach(function (key) {
    self[key] = options[key] || null;
  });
};

var EngineNameSpace = {
  listOfQuestionTypes : [],
  listOfQuestions : [],
  listOfChoices : [],
  listOfAnswers : [],
  listOfChosenChoices : [],
  currentQuestion : 0
};

var Types = {
  'questionType' : {
    'listName' : 'listOfQuestionTypes',
    'args' : []
  },
  'question' : {
    'listName' : 'listOfQuestions',
    'args' : []
  },
  'answer' : {
    'listName' : 'listOfAnswers',
    'args' : []
  },
  'choice' : {
    'listName' : 'listOfChoices',
    'args' : []
  },
  'chosenChoice' : {
    'listName' : 'listOfChosenChoices',
    'args' : []
  }
};

function ObjectFactory() {}

ObjectFactory.prototype.objectClass = QuestionType;

ObjectFactory.prototype.createObject = function( options ){
  switch(options.objectType){
    case 'questionType':
      this.objectType = QuestionType;
      break;
    case 'question':
      this.objectType = Question;
      break;
    case 'answer':
      this.objectType = Answer;
      break;
    case 'choice':
      this.objectType = Choice;
      break;
  }

  return new this.objectType( options );
};

Utils = {
  pushObjectToList : function(listType, givenObject){
    EngineNameSpace[listType].push(givenObject);
  },
  createOptionsForObject : function(type, startIndex, numberOfArguments, entryList){
    var options = {objectType: type};
    for (var i = 0; i < numberOfArguments; i++){
      positionInEntryList = startIndex + i;
      options[Types[type]['args'][i]] = entryList[positionInEntryList].gs$cell.$t;
    }
    return options;
  },
  populateList : function(type, entryList){
    Utils.readHeaders(type, entryList);
    var entriesLength = entryList.length;
    var listType = Utils.getListNameFromType(type);
    var numberOfArguments = Utils.getNumberOfArgumentsFromType(type);
    objectFactory = new ObjectFactory();

    for (var i = numberOfArguments; i < entriesLength; i = i + numberOfArguments){
      Utils.pushObjectToList(listType, objectFactory.createObject(Utils.createOptionsForObject(type, i, numberOfArguments, entryList)));
    }
  },
  getListNameFromType : function(type){
    return Types[type]['listName'];
  },
  getNumberOfArgumentsFromType: function(type){
    return Types[type]['args'].length;
  },
  readHeaders : function(type, entryList){
    Types[type]['args'] = [];
    var i = 0;
    while(entryList[i].gs$cell.row < 2){
      Types[type]['args'].push(entryList[i].gs$cell.$t);
      i += 1;
    }
  }
}

JsonHandler = {
  createQuestionTypeObjects : function(data){
    Utils.populateList('questionType', data.feed.entry);
  },
  createAnswerObjects : function(data){
    Utils.populateList('answer', data.feed.entry);
  },
  createQuestionObjects : function(data){
    Utils.populateList('question', data.feed.entry);
  },
  createChoiceObjects : function(data){
    Utils.populateList('choice', data.feed.entry);
  }
};

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
      $('#results-container').hide();
      $('#quiz-container').show();
      EngineNameSpace.currentQuestion += 1;
      QuizRunner.fillQuestionContainer((EngineNameSpace.currentQuestion).toString());
    }
    else {
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
  groupChoicesByAnswers: function(choices){
    return _.groupBy(choices, function(choice){
      return choice.answerId;
    });
  },
  findMostSuitableAnswer: function(groupByAnswers){
    var answerCounts = [];
    _.each(groupByAnswers, function(value, key){
      var answerData = {'answerId' : key, 'numberOfElements' : value.length};
      answerCounts.push(answerData);
    });
    return (_.max(answerCounts, function(answer){ return answer.numberOfElements})).answerId;
  },
  displayResults: function(){
    var groupByQuestionTypes = QuizRunner.groupChoicesByQuestionTypes();
    _.each(groupByQuestionTypes, function(value, key) {
      var result = $("<li class='result'></li>");
      var qType = QuizRunner.getElementFromListById(EngineNameSpace.listOfQuestionTypes, key);
      var qTypeElement = "<span class='question-type-text'>" + qType.displayText + "</span>";
      var groupByAnswers = QuizRunner.groupChoicesByAnswers(value);
      var chosenAnswerId = QuizRunner.findMostSuitableAnswer(groupByAnswers);
      var chosenAnswer = QuizRunner.getElementFromListById(EngineNameSpace.listOfAnswers, chosenAnswerId);
      var answerElement = "<span class='answer-text'>" + chosenAnswer.answerText + "</span>";
      result.append(qTypeElement).append(answerElement);
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
});