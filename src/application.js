var createQuestionTypes = function(data){
  utils.populateList('questionType', data.feed.entry);
}

var createRoles= function(data){
  utils.populateList('role', data.feed.entry);
}

var createQuestions= function(data){
  utils.populateList('question', data.feed.entry);
}

var createChoices = function(data){
  utils.populateList('choice', data.feed.entry);
}


$(document).ready( function(){
  
});
