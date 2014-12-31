var EngineNameSpace = {
  listOfQuestionTypes : [],
  listOfQuestions : [],
  listOfChoices : [],
  listOfRoles : [],
  listOfChosenChoices : [],
  currentQuestion : 0
};

var Types = {
  'questionType' : {
    'listName' : 'listOfQuestionTypes',
    'args' : 2
  },
  'question' : {
    'listName' : 'listOfQuestions',
    'args' : 3
  },
  'role' : {
    'listName' : 'listOfRoles',
    'args' : 4
  },
  'choice' : {
    'listName' : 'listOfChoices',
    'args' : 4
  },
  'chosenChoice' : {
    'listName' : 'listOfChosenChoices',
    'args' : 4
  }
};
