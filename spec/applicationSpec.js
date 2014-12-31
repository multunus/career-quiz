describe("application", function(){

  beforeEach(function() {
    EngineNameSpace = {
      listOfQuestionTypes : [],
      listOfQuestions : [],
      listOfChoices : [],
      listOfRoles : [],
      listOfChosenChoices : []
    };
  });

  describe("on click of start-here button", function(){
    beforeEach(function(){
    $(".start-container").show();
    $(".quiz-container").hide();
    $(".results-container").hide();
    });
    it("hides start container, shows quiz", function(){
      var spyEvent = spyOnEvent('.start-here', 'click');
      $(".start-here").click();
      expect('click').toHaveBeenTriggeredOn('.start-here');
      expect(spyEvent).toHaveBeenTriggered();
      expect($(".start-container")).toBeHidden();
      expect($(".results-container")).toBeHidden();
      expect($(".quiz-container")).not.toBeHidden();
    });
  });
  
});
