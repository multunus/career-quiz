describe("application", function(){

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
      createQuestionTypes(data);
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
    
    it("should create a list of objects in listOfQuestionTypes", function(){
      createRoles(data);
      expect(EngineNameSpace['listOfRoles'][0]['pid']).toEqual('1');
      expect(EngineNameSpace['listOfRoles'][0]['questionTypeId']).toEqual('1');
      expect(EngineNameSpace['listOfRoles'][0]['roleName']).toEqual('programmer');
      expect(EngineNameSpace['listOfRoles'][0]['roleText']).toEqual('Programmer.');
    });
  });
});
