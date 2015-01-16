(function() {
  'use strict';

  var rp = require('request-promise');
  var fs = require('fs');
  var _und = require("./lib/underscore/underscore-min");

  var FetchedJsonData = {
    'QuestionTypesSpreadsheet': null,
    'QuestionsSpreadsheet': null,
    'ChoicesSpreadsheet': null,
    'AnswersSpreadsheet': null
  }

  var spreadsheets = [
    {name: 'QuestionTypesSpreadsheet', url: 'https://spreadsheets.google.com/feeds/cells/1to58wg_r4R_oie7IqYPzsqMglIKkDYCh4peNhCZ6xm4/1/public/values?alt=json-in-script'},
    {name: 'AnswersSpreadsheet', url: 'https://spreadsheets.google.com/feeds/cells/1to58wg_r4R_oie7IqYPzsqMglIKkDYCh4peNhCZ6xm4/2/public/values?alt=json-in-script'},
    {name: 'QuestionsSpreadsheet', url: 'https://spreadsheets.google.com/feeds/cells/1to58wg_r4R_oie7IqYPzsqMglIKkDYCh4peNhCZ6xm4/3/public/values?alt=json-in-script'},
    {name: 'ChoicesSpreadsheet', url: 'https://spreadsheets.google.com/feeds/cells/1to58wg_r4R_oie7IqYPzsqMglIKkDYCh4peNhCZ6xm4/4/public/values?alt=json-in-script'}
  ];

  var jsontoString = function() {
    var returnString = "var FetchedJsonData = {\n";
    for (var key in FetchedJsonData){
      returnString += "  " + key + ": ";
      returnString += FetchedJsonData[key] + ",\n";
    }
    returnString += "};";
    return returnString;
  }

  var file = __dirname + '/src/fetchedJsonData.js';

  var getDataForQuestionnaire = function(body){
    var startPosition = body.indexOf('entry') + 7;
    var endPosition = body.length - 4;
    return body.substring(startPosition, endPosition);
  };

  var resetFile = function(file){
    fs.writeFile(file, '', function(err) {
      if (err) console.log(err);
    });
  };

  var appendToFile = function(file, data){
    fs.appendFile(file, data, function(err) {
      if(err) console.log(err);
    });
  };

  var getJsonAndUpdate = function(file, spreadsheet){
    rp(spreadsheet.url)
      .then(function(resp) {
        var data = getDataForQuestionnaire(resp);
        FetchedJsonData[spreadsheet.name] = data;
      })
      .then(function(){
        if(_und.contains(_und.values(FetchedJsonData), null) == false){
          resetFile(file);
          appendToFile(file, jsontoString());
        }
      })
      .catch(console.error);
  };

  spreadsheets.forEach(function(spreadsheet){
    getJsonAndUpdate(file, spreadsheet);
  });
})();
