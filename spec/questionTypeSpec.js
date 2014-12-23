describe("QuestionType", function() {
  var qType;

  beforeEach(function() {
    qType = new questionType();
  });

  describe("initialize", function(){
    it("initialize should set the ID and Type", function(){
      qType.initialize(1, 'Profession');
      expect(qType.pid).toBe(1);
      expect(qType.ptype).toBe('Profession');
    });
  });
});