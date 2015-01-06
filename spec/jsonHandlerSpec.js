describe("JsonHandler", function(){

  beforeEach(function() {
    EngineNameSpace = {
      listOfQuestionTypes : [],
      listOfQuestions : [],
      listOfChoices : [],
      listOfRoles : [],
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
      'role' : {
        'listName' : 'listOfRoles',
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

  describe("createQuestionTypes", function(){
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
      JsonHandler.createQuestionTypes(data);
      expect(EngineNameSpace['listOfQuestionTypes'][0]['pid']).toEqual('1');
      expect(EngineNameSpace['listOfQuestionTypes'][0]['ptype']).toEqual('Profession');
    });
  });

  describe("createRoles", function(){
    var data = {
      feed: {
        entry : [
          { gs$cell : { $t : 'pid', col: '1', row: '1' } },
          { gs$cell : { $t : 'questionTypeId', col: '2', row: '1' } },
          { gs$cell : { $t : 'roleName', col: '3', row: '1' } },
          { gs$cell : { $t : 'roleText', col: '4', row: '1' } },
          { gs$cell : { $t : '1', col: '1', row: '2' } },
          { gs$cell : { $t : '1', col: '2', row: '2' } },
          { gs$cell : { $t : 'programmer', col: '3', row: '2' } },
          { gs$cell : { $t : 'Programmer.', col: '4', row: '2' } }
        ]
      }
    };
    
    it("should create a list of objects in listOfRoles", function(){
      JsonHandler.createRoles(data);
      expect(EngineNameSpace['listOfRoles'][0]['pid']).toEqual('1');
      expect(EngineNameSpace['listOfRoles'][0]['questionTypeId']).toEqual('1');
      expect(EngineNameSpace['listOfRoles'][0]['roleName']).toEqual('programmer');
      expect(EngineNameSpace['listOfRoles'][0]['roleText']).toEqual('Programmer.');
    });
  });

  describe("createQuestions", function(){
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
      JsonHandler.createQuestions(data);
      expect(EngineNameSpace['listOfQuestions'][0]['pid']).toEqual('1');
      expect(EngineNameSpace['listOfQuestions'][0]['questionTypeId']).toEqual('1');
      expect(EngineNameSpace['listOfQuestions'][0]['questionText']).toEqual('How do you spend your time?');
    });
  });

  describe("createChoices", function(){
    var data = {
      feed: {
        entry : [
          { gs$cell : { $t : 'pid', col: '1', row: '1' } },
          { gs$cell : { $t : 'questionTypeId', col: '2', row: '1' } },
          { gs$cell : { $t : 'questionId', col: '3', row: '1' } },
          { gs$cell : { $t : 'roleId', col: '4', row: '1' } },
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
      JsonHandler.createChoices(data);
      expect(EngineNameSpace['listOfChoices'][0]['pid']).toEqual('1');
      expect(EngineNameSpace['listOfChoices'][0]['questionTypeId']).toEqual('1');
      expect(EngineNameSpace['listOfChoices'][0]['questionId']).toEqual('1');
      expect(EngineNameSpace['listOfChoices'][0]['roleId']).toEqual('1');
      expect(EngineNameSpace['listOfChoices'][0]['choiceText']).toEqual('You enjoy finding solutions to problems.');
    });
  });
});
