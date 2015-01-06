describe("Choice", function() {
  var c;

  beforeEach(function() {
    c = new Choice();
  });

  describe("initialize", function(){
    it("initialize should set the id, questionId, roleId and choiceText", function(){
      c.initialize(1, 1, 1, 1, 'Programming an elegant solution for a problem.');
      expect(c.pid).toBe(1);
      expect(c.questionTypeId).toBe(1);
      expect(c.questionId).toBe(1);
      expect(c.roleId).toBe(1);
      expect(c.choiceText).toBe('Programming an elegant solution for a problem.');
    });
  });
});
