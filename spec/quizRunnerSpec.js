describe("quizRunner", function(){

  describe("getRadioOptionContainer", function(){
    it("creates radio option according to the group", function(){
      var question_id = '1';
      var choice_id = '1';
      var choice_text = 'Designer';

      expect(quizRunner.getRadioOptionContainer(question_id, choice_id, choice_text)).toBe("<div><input type='radio' value='"+ choice_id+ "' name='"+ question_id + "'>" + choice_text + "</div>");
    });
  });

  describe("getChoicesForQuestion", function(){
     beforeEach(function() {
      choice1 = {'questionId' : '1'};
      choice2 ={'questionId' : '1'};
      EngineNameSpace = {
        listOfQuestionTypes : [],
        listOfQuestions : [],
        listOfChoices : [choice1, choice2],
        listOfRoles : [],
        listOfChosenChoices : []
      };
    });

    it("gets choices from a question", function(){
      var question_id = '1';
      expect(quizRunner.getChoicesForQuestion(question_id)).toEqual([choice1, choice2]);
    });
  });
});
