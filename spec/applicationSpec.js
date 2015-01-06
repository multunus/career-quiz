describe("Application", function(){

  beforeEach(function() {
    var questionType = {'pid' : '1', 'ptype' : 'Profession'};
    var role1 = {'pid' : '1', 'questionTypeId' : '1', 'roleName': 'programmer', 'roleText': 'You are a builder by nature. You can become a great programmer.'};
    var role2 = {'pid' : '2', 'questionTypeId' : '1', 'roleName': 'designer', 'roleText': 'You are an artist. You can become a great designer.'};
    var question1 = {'pid' : '1', 'questionTypeId' : '1', 'questionText': 'What makes you lose track of time?'};
    var question2 = {'pid' : '2', 'questionTypeId' : '1', 'questionText': 'What are you curious about learning?'};
    var choice1 = {'pid': '1', 'questionTypeId' : '1', 'questionId' : '1', 'roleId': '1', 'choiceText': 'Solving a puzzle.'};
    var choice2 = {'pid': '2', 'questionTypeId' : '1', 'questionId' : '1', 'roleId': '2', 'choiceText': 'Designing something beautiful.'};
    var choice3 = {'pid': '3', 'questionTypeId' : '1', 'questionId' : '2', 'roleId': '1', 'choiceText': 'New programming techniques.'};
    var choice4 = {'pid': '4', 'questionTypeId' : '1', 'questionId' : '2', 'roleId': '2', 'choiceText': 'New design techniques.'};
    
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

  describe("on click of submit-choice button", function(){
    beforeEach(function(){
      $("#start-container").hide();
      $("#quiz-container").show();
      $("#results-container").hide();
      $("#error-field").hide();
      EngineNameSpace.currentQuestion = 1;
    });
    
    describe("if no choice is selected", function(){
      it("triggers a click event and shows error field", function(){
        var spySubmitChoice = spyOnEvent('#submit-choice', 'click');
        $("#submit-choice").click();
        expect('click').toHaveBeenTriggeredOn('#submit-choice');
        expect(spySubmitChoice).toHaveBeenTriggered();
        expect($("#start-container")).toBeHidden();
        expect($("#results-container")).toBeHidden();
        expect($("#quiz-container")).not.toBeHidden();
        expect($("#error-field")).not.toBeHidden();
      });
    });

    describe("if a choice is selected", function(){
      describe("and current question is not last (Question 1, Choice 1 selected)", function(){
        beforeEach(function(){
          $("input[value='1']").prop("checked", true);
        });
        it("triggers a click event and displays question", function(){
          var spySubmitChoice = spyOnEvent('#submit-choice', 'click');
          $("#submit-choice").click();
          expect('click').toHaveBeenTriggeredOn('#submit-choice');
          expect(spySubmitChoice).toHaveBeenTriggered();
          expect($("#start-container")).toBeHidden();
          expect($("#results-container")).toBeHidden();
          expect($("#quiz-container")).not.toBeHidden();
          expect(EngineNameSpace.currentQuestion).toBe(2);
          expect((EngineNameSpace.listOfChosenChoices).length).toBe(1);
          expect('#question-text').toHaveText('What are you curious about learning?');
        });
      });
      
      describe("and current question is last  (Question 2, Choice 3 selected)", function(){
        beforeEach(function(){
          $("input[value='3']").prop("checked", true);
          EngineNameSpace.currentQuestion = 2;
        });
        it("displays result of the quiz", function(){
          var spySubmitChoice = spyOnEvent('#submit-choice', 'click');
          $("#submit-choice").click();
          expect('click').toHaveBeenTriggeredOn('#submit-choice');
          expect(spySubmitChoice).toHaveBeenTriggered();
          expect(EngineNameSpace.currentQuestion).toBe(2);
          expect($("#start-container")).toBeHidden();
          expect($("#quiz-container")).toBeHidden();
          expect($("#results-container")).not.toBeHidden();
        });
      });
    });
  });
});
