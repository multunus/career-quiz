describe("jsonHandler", function(){

  beforeEach(function() {
    EngineNameSpace = {
      listOfQuestionTypes : [],
      listOfQuestions : [],
      listOfChoices : [],
      listOfRoles : [],
      listOfChosenChoices : []
    };
  });

  describe("createQuestionTypes", function(){
    var data = {
      feed: {
        entry : [
          { gs$cell : { $t : 'pid' } },
          { gs$cell : { $t : 'ptype' } },
          { gs$cell : { $t : '1' } },
          { gs$cell : { $t : 'Profession' } }
        ]
      }
    };
    
    it("should create a list of objects in listOfQuestionTypes", function(){
      jsonHandler.createQuestionTypes(data);
      expect(EngineNameSpace['listOfQuestionTypes'][0]['pid']).toEqual('1');
      expect(EngineNameSpace['listOfQuestionTypes'][0]['ptype']).toEqual('Profession');
    });
  });

  describe("createRoles", function(){
    var data = {
      feed: {
        entry : [
          { gs$cell : { $t : 'pid' } },
          { gs$cell : { $t : 'questionTypeId' } },
          { gs$cell : { $t : 'roleName' } },
          { gs$cell : { $t : 'roleText' } },
          { gs$cell : { $t : '1' } },
          { gs$cell : { $t : '1' } },
          { gs$cell : { $t : 'programmer' } },
          { gs$cell : { $t : 'Programmer.' } }
        ]
      }
    };
    
    it("should create a list of objects in listOfRoles", function(){
      jsonHandler.createRoles(data);
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
          { gs$cell : { $t : 'pid' } },
          { gs$cell : { $t : 'questionTypeId' } },
          { gs$cell : { $t : 'questionText' } },
          { gs$cell : { $t : '1' } },
          { gs$cell : { $t : '1' } },
          { gs$cell : { $t : 'How do you spend your time?' } }
        ]
      }
    };
    
    it("should create a list of objects in listOfQuestions", function(){
      jsonHandler.createQuestions(data);
      expect(EngineNameSpace['listOfQuestions'][0]['pid']).toEqual('1');
      expect(EngineNameSpace['listOfQuestions'][0]['questionTypeId']).toEqual('1');
      expect(EngineNameSpace['listOfQuestions'][0]['questionText']).toEqual('How do you spend your time?');
    });
  });

  describe("createChoices", function(){
    var data = {
      feed: {
        entry : [
          { gs$cell : { $t : 'pid' } },
          { gs$cell : { $t : 'questionId' } },
          { gs$cell : { $t : 'roleId' } },
          { gs$cell : { $t : 'choiceText' } },
          { gs$cell : { $t : '1' } },
          { gs$cell : { $t : '1' } },
          { gs$cell : { $t : '1' } },
          { gs$cell : { $t : 'You enjoy finding solutions to problems.' } }
        ]
      }
    };
    
    it("should create a list of objects in listOfChoices", function(){
      jsonHandler.createChoices(data);
      expect(EngineNameSpace['listOfChoices'][0]['pid']).toEqual('1');
      expect(EngineNameSpace['listOfChoices'][0]['questionId']).toEqual('1');
      expect(EngineNameSpace['listOfChoices'][0]['roleId']).toEqual('1');
      expect(EngineNameSpace['listOfChoices'][0]['choiceText']).toEqual('You enjoy finding solutions to problems.');
    });
  });
});
