JsonHandler = {
  fetchQuestionTypesJson : function(data){
    FetchedJsonData.QuestionTypesSpreadsheet = data.feed.entry;
  },
  fetchAnswersJson : function(data){
    FetchedJsonData.AnswersSpreadsheet = data.feed.entry;
  },
  fetchQuestionsJson : function(data){
    FetchedJsonData.QuestionsSpreadsheet = data.feed.entry;
  },
  fetchChoicesJson : function(data){
    FetchedJsonData.ChoicesSpreadsheet = data.feed.entry;
  }
};
