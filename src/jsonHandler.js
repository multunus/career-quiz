JsonHandler = {
  createQuestionTypeObjects : function(data){
    Utils.populateList('questionType', data.feed.entry);
  },
  createAnswerObjects : function(data){
    Utils.populateList('answer', data.feed.entry);
  },
  createQuestionObjects : function(data){
    Utils.populateList('question', data.feed.entry);
  },
  createChoiceObjects : function(data){
    Utils.populateList('choice', data.feed.entry);
  }
};
