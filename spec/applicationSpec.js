describe("application", function(){

  beforeEach(function() {
    var questionType = {'pid' : '1', 'ptype' : 'Profession'};
    var role1 = {'pid' : '1', 'questionTypeId' : '1', 'roleName': 'programmer', 'roleText': 'You are a builder by nature. You can become a great programmer.'};
    var role2 = {'pid' : '2', 'questionTypeId' : '1', 'roleName': 'designer', 'roleText': 'You are an artist. You can become a great designer.'};
    var question1 = {'pid' : '1', 'questionTypeId' : '1', 'questionText': 'What makes you lose track of time?'};
    var question2 = {'pid' : '2', 'questionTypeId' : '1', 'questionText': 'What are you curious about learning?'};
    var choice1 = {'pid': '1', 'questionId' : '1', 'roleId': '1', 'choiceText': 'Solving a puzzle.'};
    var choice2 = {'pid': '2', 'questionId' : '1', 'roleId': '2', 'choiceText': 'Designing something beautiful.'};
    var choice3 = {'pid': '3', 'questionId' : '2', 'roleId': '1', 'choiceText': 'New programming techniques.'};
    var choice4 = {'pid': '4', 'questionId' : '2', 'roleId': '2', 'choiceText': 'New design techniques.'};
    
    EngineNameSpace = {
      listOfQuestionTypes : [questionType],
      listOfQuestions : [question1, question2],
      listOfChoices : [choice1, choice2, choice3, choice4],
      listOfRoles : [role1, role2],
      listOfChosenChoices : [],
      currentQuestion: 0
    };
  });

  describe("on click of start-here button", function(){
    beforeEach(function(){
      $("#start-container").show();
      $("#quiz-container").hide();
      $("#results-container").hide();
      EngineNameSpace.currentQuestion = 0;
    });
    it("hides start container, shows quiz", function(){
      var spyEvent = spyOnEvent('#start-here', 'click');
      $("#start-here").click();
      expect('click').toHaveBeenTriggeredOn('#start-here');
      expect(spyEvent).toHaveBeenTriggered();
      expect($("#start-container")).toBeHidden();
      expect($("#results-container")).toBeHidden();
      expect($("#quiz-container")).not.toBeHidden();
      expect(EngineNameSpace.currentQuestion).toBe(1);
      expect('#question-text').toHaveText('What makes you lose track of time?');
    });
  });
  
});
