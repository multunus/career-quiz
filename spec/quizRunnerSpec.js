describe("QuizRunner", function(){

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

  describe("getRadioOptionContainer", function(){
    it("creates radio option according to the group", function(){
      var question_id = '1';
      var choice_id = '1';
      var choice_text = 'Designer';

      expect(QuizRunner.getRadioOptionContainer(question_id, choice_id, choice_text)).toBe("<label class='choice'><input type='radio' value='"+ choice_id+ "' name='"+ question_id + "'>" + choice_text + "</label>");
    });
  });

  describe("getChoicesForQuestion", function(){
    it("gets choices from a question", function(){
      var question_id = '1';
      expect(QuizRunner.getChoicesForQuestion(question_id)).toEqual([{ pid: '1', questionTypeId: '1', questionId: '1', roleId: '1', choiceText: 'Solving a puzzle.' }, { pid: '2', questionTypeId: '1', questionId: '1', roleId: '2', choiceText: 'Designing something beautiful.' }]);
    });
  });

  describe("getElementFromListById", function(){
    it("gets the question given a specific id", function(){
      expect(QuizRunner.getElementFromListById(EngineNameSpace['listOfQuestions'], '1')).toEqual({ pid: '1', questionTypeId: '1', questionText: 'What makes you lose track of time?' });
    });
  });

  describe("fillQuestionContainer", function(){
    it("fills the questionnaire container with the choices", function(){
      QuizRunner.fillQuestionContainer('1');
      expect('#question-text').toHaveText('What makes you lose track of time?');
      expect('#choices').toContainElement('.choice');
    });
  });

  describe("pushChosenChoice", function(){
    it("pushes the selected choice to the listOfChosenChoices", function(){
      QuizRunner.pushChosenChoice('1');
      expect(EngineNameSpace.listOfChosenChoices).toEqual([{ pid: '1', questionTypeId: '1', questionId: '1', roleId: '1', choiceText: 'Solving a puzzle.' }]);
    });
  });

  describe("showNextQuestion", function(){
    describe("if current question is not last", function(){
      beforeEach(function() {
        EngineNameSpace.currentQuestion = 0;
      });
      it("displays next question", function(){
        QuizRunner.showNextQuestion();
        // Check for hide and show stuff
        expect($('#start-container')).toBeHidden();
        expect($('#results-container')).toBeHidden();
        expect($('#quiz-container')).not.toBeHidden();

        // Check for question text and options
        expect('#question-text').toHaveText('What makes you lose track of time?');
        expect("input[value='1']").toBeInDOM();

        //2nd Question
        QuizRunner.showNextQuestion();
        expect('#question-text').toHaveText('What are you curious about learning?');
        expect("input[value='1']").not.toBeInDOM();
        expect("input[value='3']").toBeInDOM();
      });
    });

    describe("if current question is last", function(){
      beforeEach(function() {
        EngineNameSpace.currentQuestion = 2;
      });
      it("displays results", function(){
        QuizRunner.showNextQuestion();
        // Check for hide and show stuff
        expect($('#start-container')).toBeHidden();
        expect($('#results-container')).not.toBeHidden();
        expect($('#quiz-container')).toBeHidden();
      });
    });
  });
  describe("groupChoicesByQuestionTypes", function(){
    beforeEach(function() {
      EngineNameSpace.listOfChosenChoices = [{'pid': '1', 'questionTypeId' : '1', 'questionId' : '1', 'roleId': '1', 'choiceText': 'Solving a puzzle.'}, {'pid': '3','questionTypeId' : '1', 'questionId' : '2', 'roleId': '1', 'choiceText': 'New programming techniques.'} ];
    });
    it("groups choices by questionTypes", function(){
      expect(QuizRunner.groupChoicesByQuestionTypes()).toEqual({ 1: [ { pid: '1', questionTypeId: '1', questionId: '1', roleId: '1', choiceText: 'Solving a puzzle.' }, { pid: '3', questionTypeId: '1', questionId: '2', roleId: '1', choiceText: 'New programming techniques.' } ]});
    });
  });
  describe("groupChoicesByRoles", function(){
    it("given a list of choices, groups by roles", function(){
      expect(QuizRunner.groupChoicesByRoles([ { pid: '1', questionTypeId: '1', questionId: '1', roleId: '1', choiceText: 'Solving a puzzle.' }, { pid: '3', questionTypeId: '1', questionId: '2', roleId: '1', choiceText: 'New programming techniques.' } ]))
      .toEqual({ 1: [ { pid: '1', questionTypeId: '1', questionId: '1', roleId: '1', choiceText: 'Solving a puzzle.' }, { pid: '3', questionTypeId: '1', questionId: '2', roleId: '1', choiceText: 'New programming techniques.' } ]});
    });
  });
  describe("findMostSuitableRole", function(){
    it("given a grouped roles object, find the maximum repeated role", function(){
      expect(QuizRunner.findMostSuitableRole({ 1: [
        { pid: '1', questionTypeId: '1', questionId: '1', roleId: '1', choiceText: 'Solving a puzzle.' },
        { pid: '2', questionTypeId: '1', questionId: '1', roleId: '2', choiceText: 'Designing something beautiful.'}],
         2: [
        { pid: '3', questionTypeId: '1', questionId: '2', roleId: '1', choiceText: 'New programming techniques.' }
      ]}))
      .toBe('1');
    });
  });
  describe("displayResults", function(){
    beforeEach(function(){
      EngineNameSpace.listOfChosenChoices = [{'pid': '1', 'questionTypeId' : '1', 'questionId' : '1', 'roleId': '1', 'choiceText': 'Solving a puzzle.'}, {'pid': '3','questionTypeId' : '1', 'questionId' : '2', 'roleId': '1', 'choiceText': 'New programming techniques.'} ];
    });
    it("displays the results on the results screen", function(){
      QuizRunner.displayResults();
      expect($('#result-text .role-text').html()).toBe('You are a builder by nature. You can become a great programmer.');
    });
  });
});
