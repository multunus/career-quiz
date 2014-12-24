describe("utils", function(){
  describe("pushObjectToList", function(){
    it("add the givenObject to the list listType", function(){
      utils.pushObjectToList('listOfQuestionTypes', "a");
      expect(EngineNameSpace['listOfQuestionTypes']).toEqual(["a"]);
    });
  });

  describe("createObject", function(){
    it("creates questionType objects given a list of arguments", function(){
      var argsList = [1, 'Profession']
      var q = new questionType();
      q.initialize(argsList[0], argsList[1]);
      r = utils.createObject('questionType', argsList);
      expect(q['pid']).toBe(r['pid']);
      expect(q['ptype']).toBe(r['ptype']);
    });
  });
});
