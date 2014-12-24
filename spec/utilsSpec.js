describe("utils", function(){
  describe("pushObjectToList", function(){
    it("add the givenObject to the list listType", function(){
      utils.pushObjectToList('listOfQuestionTypes', "a");
      expect(EngineNameSpace['listOfQuestionTypes']).toEqual(["a"]);
    });
  });

  describe("createObject", function(){
    it("creates questionType objects given a list of arguments", function(){
      var argsList = [1, 'Profession'];
      var ref = new questionType();
      ref.initialize(argsList[0], argsList[1]);
      actual = utils.createObject('questionType', argsList);
      expect(ref['pid']).toBe(actual['pid']);
      expect(ref['ptype']).toBe(actual['ptype']);
    });

    it("creates question objects given a list of arguments", function(){
      var argsList = [1, 1, 'What makes you lose track of time?'];
      var ref = new question();
      ref.initialize(argsList[0], argsList[1], argsList[2]);
      actual = utils.createObject('question', argsList);
      expect(ref['pid']).toBe(actual['pid']);
      expect(ref['questionTypeId']).toBe(actual['questionTypeId']);
      expect(ref['questionText']).toBe(actual['questionText']);
    });

    it("creates role objects given a list of arguments", function(){
      var argsList = [1, 1, 'programmer', 'Programmer. You are quite a builder. You will find yourself creating great software with great practice.'];
      var ref = new role();
      ref.initialize(argsList[0], argsList[1], argsList[2], argsList[3]);
      actual = utils.createObject('role', argsList);
      expect(ref['pid']).toBe(actual['pid']);
      expect(ref['questionTypeId']).toBe(actual['questionTypeId']);
      expect(ref['roleName']).toBe(actual['roleName']);
      expect(ref['roleText']).toBe(actual['roleText']);
    });

    it("creates choice objects given a list of arguments", function(){
      var argsList = [1, 1, 1, 'Programming an elegant solution for a problem.']
      var ref = new choice();
      ref.initialize(argsList[0], argsList[1], argsList[2], argsList[3]);
      actual = utils.createObject('choice', argsList);
      expect(ref['pid']).toBe(actual['pid']);
      expect(ref['questionId']).toBe(actual['questionId']);
      expect(ref['roleId']).toBe(actual['roleId']);
      expect(ref['choiceText']).toBe(actual['choiceText']);
    });
  });
});
