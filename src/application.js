var createQuestionTypes = function(data){
  var valuesForQuestionTypes = data;
  entryList = data.feed.entry;
  var entrylength = entryList.length;
  for (var i =0; i < entrylength; i++){
    console.log(entryList[i].gs$cell.$t);
  }
}

var createRoles= function(data){
  // console.log(data);
}

var createQuestions= function(data){
  // console.log(data);
}

var createChoices = function(data){
  // console.log(data);
}


$(document).ready( function(){

});
