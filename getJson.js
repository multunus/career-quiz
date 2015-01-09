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

fs.writeFile(file1, ' ', function(err){
  if(err){
    console.log(err);  
  } else {
    console.log('The file is reset.')
  }
});


request(spreadsheet1, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    fs.appendFile(file1, body, function(err) {
      if(err) {
          console.log(err);
      } else {
          console.log("The spreadsheet Json was saved in " + file1 );
      }
  }); 
  }
});

fs.writeFile(file2, ' ', function(err){
  if(err){
    console.log(err);  
  } else {
    console.log('The file is reset.')
  }
});


request(spreadsheet2, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    fs.appendFile(file2, body, function(err) {
      if(err) {
          console.log(err);
      } else {
          console.log("The spreadsheet Json was saved in " + file2 );
      }
  }); 
  }
});

fs.writeFile(file3, ' ', function(err){
  if(err){
    console.log(err);  
  } else {
    console.log('The file is reset.')
  }
});


request(spreadsheet3, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    fs.appendFile(file3, body, function(err) {
      if(err) {
          console.log(err);
      } else {
          console.log("The spreadsheet Json was saved in " + file3 );
      }
  }); 
  }
});

fs.writeFile(file4, ' ', function(err){
  if(err){
    console.log(err);  
  } else {
    console.log('The file is reset.')
  }
});


request(spreadsheet4, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    fs.appendFile(file4, body, function(err) {
      if(err) {
          console.log(err);
      } else {
          console.log("The spreadsheet Json was saved in " + file4 );
      }
  }); 
  }
});