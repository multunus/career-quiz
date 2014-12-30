jsonHandler = {
  createQuestionTypes : function(data){
   Utils.populateList('questionType', data.feed.entry);
  },
  createRoles : function(data){
    Utils.populateList('role', data.feed.entry);
  },
  createQuestions : function(data){
    Utils.populateList('question', data.feed.entry);
  },
  createChoices : function(data){
    Utils.populateList('choice', data.feed.entry);
  }
};
