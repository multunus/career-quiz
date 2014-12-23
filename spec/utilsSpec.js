describe("utils", function(){
  describe("pushObjectToList", function(){
    it("add the givenObject to the list listType", function(){
      utils.pushObjectToList('listOfQuestionTypes', "a");
      expect(EngineNameSpace['listOfQuestionTypes']).toEqual(["a"]);
    });
  });
});
