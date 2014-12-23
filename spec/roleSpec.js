describe("role", function() {
  var r;

  beforeEach(function() {
    r = new role();
  });

  describe("initialize", function(){
    it("initialize should set the id, questionTypeId, roleName and roleText", function(){
      r.initialize(1, 1, 'programmer', 'Programmer. You are quite a builder. You will find yourself creating great software with great practice. ');
      expect(r.pid).toBe(1);
      expect(r.questionTypeId).toBe(1);
      expect(r.roleName).toBe('programmer');
      expect(r.roleText).toBe('Programmer. You are quite a builder. You will find yourself creating great software with great practice. ');
    });
  });
});
