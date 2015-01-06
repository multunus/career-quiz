describe("Utils", function(){
  
  var entries = [
      { gs$cell : { $t : 'pid', col: '1', row: '1' } },
      { gs$cell : { $t : 'ptype', col: '2', row: '1' } },
      { gs$cell : { $t : '1', col: '1', row: '2'  } },
      { gs$cell : { $t : 'Profession', col: '2', row: '2' } }
    ];

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

  describe("pushObjectToList", function(){
    it("add the givenObject to the list listType", function(){
      Utils.pushObjectToList('listOfQuestionTypes', "a");
      expect(EngineNameSpace['listOfQuestionTypes']).toContain("a");
    });
  });

  describe("createOptionsForObject", function(){
    it("returns an options object iterating over entries", function(){
      Types = {
        'questionType' : {
          'listName' : 'listOfQuestionTypes',
          'args' : ['pid', 'ptype']
        }
      };
      var options = Utils.createOptionsForObject('questionType', 2, 2, entries);
      expect(options.objectType).toBe('questionType');
      expect(options['pid']).toBe('1');
    });
  });

  describe("populateList", function(){
    it("creates an object and pushes it to the appropriate list", function(){
      var actual = Utils.populateList('questionType', entries);
      expect(EngineNameSpace['listOfQuestionTypes'][0]['pid']).toEqual('1');
      expect(EngineNameSpace['listOfQuestionTypes'][0]['ptype']).toEqual('Profession');
    });
  });

  describe("getListNameFromType", function(){
    it("get the list name for the EngineNameSpace", function(){
      var type  = 'questionType';
      expect(Utils.getListNameFromType(type)).toBe("listOfQuestionTypes");
    });
  });

  describe("getNumberOfArgumentsFromType", function(){
    it("get the number of Arguments for a question type", function(){
      var type  = 'questionType';
      Utils.readHeaders(type, entries);
      expect(Utils.getNumberOfArgumentsFromType(type)).toBe(2);
    });
  });

  describe("readHeaders", function(){
    it('creates a list of the headers of a spreadsheet', function(){
      Utils.readHeaders('questionType', entries);
      expect(Types.questionType.args).toEqual(['pid', 'ptype']);
    });
  });
});
