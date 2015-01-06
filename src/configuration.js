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
    'numberOfArgs' : 2
  },
  'question' : {
    'listName' : 'listOfQuestions',
    'numberOfArgs' : 3
  },
  'role' : {
    'listName' : 'listOfRoles',
    'numberOfArgs' : 4
  },
  'choice' : {
    'listName' : 'listOfChoices',
    'numberOfArgs' : 5
  },
  'chosenChoice' : {
    'listName' : 'listOfChosenChoices',
    'numberOfArgs' : 5
  }
};
