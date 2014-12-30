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
      var choice1 = {'questionId' : '1'};
      var choice2 = {'questionId' : '1'};
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
      expect(quizRunner.getChoicesForQuestion(question_id)).toEqual([{'questionId' : '1'}, {'questionId' : '1'}]);
    });
  });

  describe("getElementFromListById", function(){
    beforeEach(function(){
      var question1 = {'pid' : '1', 'questionText': 'What makes you lose track of time?'};
      var question2 = {'pid' : '2', 'questionText': 'What are you curious about learning?'};
      EngineNameSpace = {
        listOfQuestions : [question1, question2]
      };
    });
    it("gets the question given a specific id", function(){
      expect(quizRunner.getElementFromListById(EngineNameSpace['listOfQuestions'], '1')).toEqual({'pid' : '1', 'questionText': 'What makes you lose track of time?'});
    });
  });

  describe("fillQuestionContainer", function(){
    beforeEach(function() {
      var question = {'pid' : '1', 'questionText': 'What are you curious about learning?'}
      var choice1 = {'pid': '1', 'questionId' : '1', 'choiceText': 'New programming techniques.'};
      var choice2 ={'pid': '2', 'questionId' : '1', 'choiceText': 'New design techniques.'};
      EngineNameSpace = {
        listOfQuestionTypes : [],
        listOfQuestions : [question],
        listOfChoices : [choice1, choice2],
        listOfRoles : [],
        listOfChosenChoices : []
      };
    });
    it("fills the questionnaire container with the choices", function(){
      quizRunner.fillQuestionContainer('1');
      expect("#question-text").toHaveText('What are you curious about learning?');
      expect("#choices").toContainElement('div input');
    });
  });

  describe("pushChosenChoice", function(){
    beforeEach(function() {
      var choice1 = {'pid': '1', 'questionId' : '1', 'choiceText': 'New programming techniques.'};
      var choice2 ={'pid': '2', 'questionId' : '1', 'choiceText': 'New design techniques.'};
      EngineNameSpace = {
        listOfChoices : [choice1, choice2],
        listOfChosenChoices : []
      };
    });
    it("pushes the selected choice to the listOfChosenChoices", function(){
      quizRunner.pushChosenChoice('1');
      expect(EngineNameSpace.listOfChosenChoices).toEqual([{'pid': '1', 'questionId' : '1', 'choiceText': 'New programming techniques.'}]);
    });
  });
});
