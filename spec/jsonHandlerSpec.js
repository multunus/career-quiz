describe("JsonHandler", function(){
  describe("fetchQuestionTypesJson", function(){
    var data = {
      feed: {
        entry : [
          { gs$cell : { $t : 'pid', col: '1', row: '1' } },
          { gs$cell : { $t : 'ptype', col: '2', row: '1' } },
          { gs$cell : { $t : '1', col: '1', row: '2'  } },
          { gs$cell : { $t : 'Profession', col: '1', row: '2' } }
        ]
      }
    };
    
    it("fetches QuestionTypes Json from Google Spreadsheet", function(){
      FetchedJsonData.QuestionTypesSpreadsheet = [];
      JsonHandler.fetchQuestionTypesJson(data);
      expect(FetchedJsonData.QuestionTypesSpreadsheet).toEqual([ { gs$cell: { $t: 'pid', col: '1', row: '1' } }, { gs$cell: { $t: 'ptype', col: '2', row: '1' } }, { gs$cell: { $t: '1', col: '1', row: '2' } }, { gs$cell: { $t: 'Profession', col: '1', row: '2' } } ]);
    });
  });

  describe("fetchAnswersJson", function(){
    var data = {
      feed: {
        entry : [
          { gs$cell : { $t : 'pid', col: '1', row: '1' } },
          { gs$cell : { $t : 'questionTypeId', col: '2', row: '1' } },
          { gs$cell : { $t : 'answerName', col: '3', row: '1' } },
          { gs$cell : { $t : 'answerText', col: '4', row: '1' } },
          { gs$cell : { $t : '1', col: '1', row: '2' } },
          { gs$cell : { $t : '1', col: '2', row: '2' } },
          { gs$cell : { $t : 'programmer', col: '3', row: '2' } },
          { gs$cell : { $t : 'Programmer.', col: '4', row: '2' } }
        ]
      }
    };
    
    it("fetches Answers Json from Google Spreadsheet", function(){
      FetchedJsonData.AnswersSpreadsheet = [];
      JsonHandler.fetchAnswersJson(data);
      expect(FetchedJsonData.AnswersSpreadsheet).toEqual([ { gs$cell: { $t: 'pid', col: '1', row: '1' } }, { gs$cell: { $t: 'questionTypeId', col: '2', row: '1' } }, { gs$cell: { $t: 'answerName', col: '3', row: '1' } }, { gs$cell: { $t: 'answerText', col: '4', row: '1' } }, { gs$cell: { $t: '1', col: '1', row: '2' } }, { gs$cell: { $t: '1', col: '2', row: '2' } }, { gs$cell: { $t: 'programmer', col: '3', row: '2' } }, { gs$cell: { $t: 'Programmer.', col: '4', row: '2' } } ]);
    });
  });

  describe("fetchQuestionsJson", function(){
    var data = {
      feed: {
        entry : [
          { gs$cell : { $t : 'pid', col: '1', row: '1' } },
          { gs$cell : { $t : 'questionTypeId', col: '2', row: '1' } },
          { gs$cell : { $t : 'questionText', col: '3', row: '1' } },
          { gs$cell : { $t : '1', col: '1', row: '2' } },
          { gs$cell : { $t : '1', col: '2', row: '2' } },
          { gs$cell : { $t : 'How do you spend your time?', col: '3', row: '2' } }
        ]
      }
    };
    
    it("fetches Questions Json from Google Spreadsheet", function(){
      FetchedJsonData.QuestionsSpreadsheet = [];
      JsonHandler.fetchQuestionsJson(data);
      expect(FetchedJsonData.QuestionsSpreadsheet).toEqual([ { gs$cell: { $t: 'pid', col: '1', row: '1' } }, { gs$cell: { $t: 'questionTypeId', col: '2', row: '1' } }, { gs$cell: { $t: 'questionText', col: '3', row: '1' } }, { gs$cell: { $t: '1', col: '1', row: '2' } }, { gs$cell: { $t: '1', col: '2', row: '2' } }, { gs$cell: { $t: 'How do you spend your time?', col: '3', row: '2' } } ]);
    });
  });

  describe("fetchChoicesJson", function(){
    var data = {
      feed: {
        entry : [
          { gs$cell : { $t : 'pid', col: '1', row: '1' } },
          { gs$cell : { $t : 'questionTypeId', col: '2', row: '1' } },
          { gs$cell : { $t : 'questionId', col: '3', row: '1' } },
          { gs$cell : { $t : 'answerId', col: '4', row: '1' } },
          { gs$cell : { $t : 'choiceText', col: '5', row: '1' } },
          { gs$cell : { $t : '1', col: '1', row: '2' } },
          { gs$cell : { $t : '1', col: '2', row: '2' } },
          { gs$cell : { $t : '1', col: '3', row: '2' } },
          { gs$cell : { $t : '1', col: '4', row: '2' } },
          { gs$cell : { $t : 'You enjoy finding solutions to problems.', col: '5', row: '2' } }
        ]
      }
    };
    
    it("fetches Choices Json from Google Spreadsheet", function(){
      FetchedJsonData.ChoicesSpreadsheet = [];
      JsonHandler.fetchChoicesJson(data);
      expect(FetchedJsonData.ChoicesSpreadsheet).toEqual([ { gs$cell: { $t: 'pid', col: '1', row: '1' } }, { gs$cell: { $t: 'questionTypeId', col: '2', row: '1' } }, { gs$cell: { $t: 'questionId', col: '3', row: '1' } }, { gs$cell: { $t: 'answerId', col: '4', row: '1' } }, { gs$cell: { $t: 'choiceText', col: '5', row: '1' } }, { gs$cell: { $t: '1', col: '1', row: '2' } }, { gs$cell: { $t: '1', col: '2', row: '2' } }, { gs$cell: { $t: '1', col: '3', row: '2' } }, { gs$cell: { $t: '1', col: '4', row: '2' } }, { gs$cell: { $t: 'You enjoy finding solutions to problems.', col: '5', row: '2' } } ]);
    });
  });
});
