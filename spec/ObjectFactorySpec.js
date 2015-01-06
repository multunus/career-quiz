describe("ObjectFactory", function(){
  var objectFactory = new ObjectFactory();

  describe("creates objects of", function(){
    it("QuestionType class", function(){
      var questionType = objectFactory.createObject({
                          objectType : 'questionType',
                          pid: '1',
                          ptype: 'profession'});
      expect(questionType instanceof QuestionType).toBe(true);
      expect(questionType['pid']).toBe('1');
      expect(questionType.ptype).toBe('profession');
    });

    it("Question class", function(){
      var question = objectFactory.createObject({
                          objectType : 'question',
                          pid: '1',
                          ptype: 'profession'});
      expect(question instanceof Question).toBe(true);
      expect(question['pid']).toBe('1');
      expect(question.ptype).toBe('profession');
    });

    it("Role class", function(){
      var role = objectFactory.createObject({
                          objectType : 'role',
                          pid: '1',
                          ptype: 'profession'});
      expect(role instanceof Role).toBe(true);
      expect(role['pid']).toBe('1');
      expect(role.ptype).toBe('profession');
    });

    it("Choice class", function(){
      var choice = objectFactory.createObject({
                          objectType : 'choice',
                          pid: '1',
                          ptype: 'profession'});
      expect(choice instanceof Choice).toBe(true);
      expect(choice['pid']).toBe('1');
      expect(choice.ptype).toBe('profession');
    });
  });
});
