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
});