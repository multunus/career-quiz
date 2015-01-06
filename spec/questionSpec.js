describe("Question", function() {
  var q;

  beforeEach(function() {
    q = new Question();
  });

  describe("initialize", function(){
    it("initialize should set the id, questionTypeId and questionText", function(){
      q.initialize(1, 1, 'What makes you lose track of time?');
      expect(q.pid).toBe(1);
      expect(q.questionTypeId).toBe(1);
      expect(q.questionText).toBe('What makes you lose track of time?');
    });
  });
});
