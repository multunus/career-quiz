describe("JsonHandler", function(){

  beforeEach(function() {
    EngineNameSpace = {
      listOfQuestionTypes : [],
      listOfQuestions : [],
      listOfChoices : [],
      listOfAnswers : [],
      listOfChosenChoices : []
    };
    Types = {
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
  });

  describe("createQuestionTypeObjects", function(){
    var data = {
      feed: {
        entry : [
          { gs$cell : { $t : 'pid', col: '1', row: '1' } },
          { gs$cell : { $t : 'ptype', col: '2', row: '1' } },
          { gs$cell : { $t : '1', col: '1', row: '2'  } },
          { gs$cell : { $t : 'Profession', col: '1', row: '2' } }
        ]
      }
    };
    
    it("should create a list of objects in listOfQuestionTypes", function(){
      JsonHandler.createQuestionTypeObjects(data);
      expect(EngineNameSpace['listOfQuestionTypes'][0]['pid']).toEqual('1');
      expect(EngineNameSpace['listOfQuestionTypes'][0]['ptype']).toEqual('Profession');
    });
  });

  describe("createAnswerObjects", function(){
    var data = {
      feed: {
        entry : [
          { gs$cell : { $t : 'pid', col: '1', row: '1' } },
          { gs$cell : { $t : 'questionTypeId', col: '2', row: '1' } },
          { gs$cell : { $t : 'answerName', col: '3', row: '1' } },
          { gs$cell : { $t : 'answerText', col: '4', row: '1' } },
          { gs$cell : { $t : '1', col: '1', row: '2' } },
          { gs$cell : { $t : '1', col: '2', row: '2' } },
          { gs$cell : { $t : 'programmer', col: '3', row: '2' } },
          { gs$cell : { $t : 'Programmer.', col: '4', row: '2' } }
        ]
      }
    };
    
    it("should create a list of objects in listOfAnswers", function(){
      JsonHandler.createAnswerObjects(data);
      expect(EngineNameSpace['listOfAnswers'][0]['pid']).toEqual('1');
      expect(EngineNameSpace['listOfAnswers'][0]['questionTypeId']).toEqual('1');
      expect(EngineNameSpace['listOfAnswers'][0]['answerName']).toEqual('programmer');
      expect(EngineNameSpace['listOfAnswers'][0]['answerText']).toEqual('Programmer.');
    });
  });

  describe("createQuestionObjectss", function(){
    var data = {
      feed: {
        entry : [
          { gs$cell : { $t : 'pid', col: '1', row: '1' } },
          { gs$cell : { $t : 'questionTypeId', col: '2', row: '1' } },
          { gs$cell : { $t : 'questionText', col: '3', row: '1' } },
          { gs$cell : { $t : '1', col: '1', row: '2' } },
          { gs$cell : { $t : '1', col: '2', row: '2' } },
          { gs$cell : { $t : 'How do you spend your time?', col: '3', row: '2' } }
        ]
      }
    };
    
    it("should create a list of objects in listOfQuestions", function(){
      JsonHandler.createQuestionObjects(data);
      expect(EngineNameSpace['listOfQuestions'][0]['pid']).toEqual('1');
      expect(EngineNameSpace['listOfQuestions'][0]['questionTypeId']).toEqual('1');
      expect(EngineNameSpace['listOfQuestions'][0]['questionText']).toEqual('How do you spend your time?');
    });
  });

  describe("createChoiceObjectss", function(){
    var data = {
      feed: {
        entry : [
          { gs$cell : { $t : 'pid', col: '1', row: '1' } },
          { gs$cell : { $t : 'questionTypeId', col: '2', row: '1' } },
          { gs$cell : { $t : 'questionId', col: '3', row: '1' } },
          { gs$cell : { $t : 'answerId', col: '4', row: '1' } },
          { gs$cell : { $t : 'choiceText', col: '5', row: '1' } },
          { gs$cell : { $t : '1', col: '1', row: '2' } },
          { gs$cell : { $t : '1', col: '2', row: '2' } },
          { gs$cell : { $t : '1', col: '3', row: '2' } },
          { gs$cell : { $t : '1', col: '4', row: '2' } },
          { gs$cell : { $t : 'You enjoy finding solutions to problems.', col: '5', row: '2' } }
        ]
      }
    };
    
    it("should create a list of objects in listOfChoices", function(){
      JsonHandler.createChoiceObjects(data);
      expect(EngineNameSpace['listOfChoices'][0]['pid']).toEqual('1');
      expect(EngineNameSpace['listOfChoices'][0]['questionTypeId']).toEqual('1');
      expect(EngineNameSpace['listOfChoices'][0]['questionId']).toEqual('1');
      expect(EngineNameSpace['listOfChoices'][0]['answerId']).toEqual('1');
      expect(EngineNameSpace['listOfChoices'][0]['choiceText']).toEqual('You enjoy finding solutions to problems.');
    });
  });
});
