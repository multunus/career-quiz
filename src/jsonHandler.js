jsonHandler = {
  createQuestionTypes : function(data){
   utils.populateList('questionType', data.feed.entry);
  },
  createRoles : function(data){
    utils.populateList('role', data.feed.entry);
  },
  createQuestions : function(data){
    utils.populateList('question', data.feed.entry);
  },
  createChoices : function(data){
    utils.populateList('choice', data.feed.entry);
  }
};
