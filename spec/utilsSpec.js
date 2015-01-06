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

  describe("createObject", function(){
    it("creates questionType objects given a list of arguments", function(){
      var argsList = [1, 'Profession'];
      var ref = new QuestionType();
      ref.initialize(argsList[0], argsList[1]);
      actual = Utils.createObject('questionType', argsList);
      expect(ref['pid']).toBe(actual['pid']);
      expect(ref['ptype']).toBe(actual['ptype']);
    });

    it("creates question objects given a list of arguments", function(){
      var argsList = [1, 1, 'What makes you lose track of time?'];
      var ref = new Question();
      ref.initialize(argsList[0], argsList[1], argsList[2]);
      actual = Utils.createObject('question', argsList);
      expect(ref['pid']).toBe(actual['pid']);
      expect(ref['questionTypeId']).toBe(actual['questionTypeId']);
      expect(ref['questionText']).toBe(actual['questionText']);
    });

    it("creates role objects given a list of arguments", function(){
      var argsList = [1, 1, 'programmer', 'Programmer. You are quite a builder. You will find yourself creating great software with great practice.'];
      var ref = new Role();
      ref.initialize(argsList[0], argsList[1], argsList[2], argsList[3]);
      actual = Utils.createObject('role', argsList);
      expect(ref['pid']).toBe(actual['pid']);
      expect(ref['questionTypeId']).toBe(actual['questionTypeId']);
      expect(ref['roleName']).toBe(actual['roleName']);
      expect(ref['roleText']).toBe(actual['roleText']);
    });

    it("creates choice objects given a list of arguments", function(){
      var argsList = [1, 1, 1, 'Programming an elegant solution for a problem.']
      var ref = new Choice();
      ref.initialize(argsList[0], argsList[1], argsList[2], argsList[3]);
      actual = Utils.createObject('choice', argsList);
      expect(ref['pid']).toBe(actual['pid']);
      expect(ref['questionId']).toBe(actual['questionId']);
      expect(ref['roleId']).toBe(actual['roleId']);
      expect(ref['choiceText']).toBe(actual['choiceText']);
    });
  });

  describe("createOptionsForObject", function(){
    it("returns an Argument list iterating over entries", function(){
      var ref = ['1', 'Profession'];
      var actual = Utils.createOptionsForObject('questionType', 2, 2, entries);
      expect(ref[0]).toBe(actual[0]);
      expect(ref[1]).toBe(actual[1]);
    });
  });

  describe("populateList", function(){
    it("creates an object and pushes it to the appropriate list", function(){
      var ref = new QuestionType();
      ref.initialize(entries[2].gs$cell.$t, entries[3].gs$cell.$t);
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
