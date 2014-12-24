utils = {
  pushObjectToList : function(listType, givenObject){
    EngineNameSpace[listType].push(givenObject);
  },
  createObject : function(objectType, argsList){
    var q = null;
    switch( objectType ){
      case 'questionType':
        q = new questionType();
        q.initialize(argsList[0], argsList[1]);
        break;

      case 'question':
        q = new question();
        q.initialize(argsList[0], argsList[1], argsList[2]);
        break;

      case 'role':
        q = new role();
        q.initialize(argsList[0], argsList[1], argsList[2], argsList[3]);
        break;

      case 'choice':
        q = new choice();
        q.initialize(argsList[0], argsList[1], argsList[2], argsList[3]);
        break;
    }
    return q;
  },
  createArgsList : function(startIndex, numberOfArguments, entryList){
    var argsList = [];
    for (j = startIndex; j < startIndex + numberOfArguments; j++){
      argsList.push(entryList[j].gs$cell.$t);
    }
    return argsList;
  }
}
