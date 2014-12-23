describe("listBuilder", function(){
  var l;

  beforeEach(function() {
    l = new listBuilder();
  });

  describe("pushObject", function(){
    it("add the givenObject to the list listType", function(){
      l.pushObject('listOfQuestionTypes', "a");
      expect(EngineNameSpace['listOfQuestionTypes']).toEqual(["a"]);
    });
  });
});
