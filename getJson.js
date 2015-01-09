var request = require("request");
var fs = require('fs');

var google = "http://www.google.com";

var spreadsheet1 = "https://spreadsheets.google.com/feeds/cells/1to58wg_r4R_oie7IqYPzsqMglIKkDYCh4peNhCZ6xm4/1/public/values?alt=json-in-script";
var spreadsheet2 = "https://spreadsheets.google.com/feeds/cells/1to58wg_r4R_oie7IqYPzsqMglIKkDYCh4peNhCZ6xm4/2/public/values?alt=json-in-script";
var spreadsheet3 = "https://spreadsheets.google.com/feeds/cells/1to58wg_r4R_oie7IqYPzsqMglIKkDYCh4peNhCZ6xm4/3/public/values?alt=json-in-script";
var spreadsheet4 = "https://spreadsheets.google.com/feeds/cells/1to58wg_r4R_oie7IqYPzsqMglIKkDYCh4peNhCZ6xm4/4/public/values?alt=json-in-script";
                 
                   
var file1 = __dirname + '/src/jsonDump/jsonQuestionTypes';
var file2 = __dirname + '/src/jsonDump/jsonAnswers';
var file3 = __dirname + '/src/jsonDump/jsonQuestions';
var file4 = __dirname + '/src/jsonDump/jsonChoices';

var createFilesInJsonDump = function(file, spreadsheet){
  fs.writeFile(file, ' ', function(err){
    if(err){
      console.log(err);
    } else {
      console.log('The file is reset.')
    }
  });


  request(spreadsheet, function (error, response, body) {
    var entryPosition = body.indexOf('entry') + 7;
    var entries = body.substring(entryPosition, body.length - 4);
    if (!error && response.statusCode === 200) {
      fs.appendFile(file, entries, function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("The spreadsheet Json was saved in " + file );
        }
      });
    }
  });
};


createFilesInJsonDump(file1, spreadsheet1);
createFilesInJsonDump(file2, spreadsheet2);
createFilesInJsonDump(file3, spreadsheet3);
createFilesInJsonDump(file4, spreadsheet4);
