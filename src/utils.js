utils = {
  pushObjectToList : function(listType, givenObject){
    EngineNameSpace[listType].push(givenObject);
  },
  createObject : function(objectType, argsList){
    switch( objectType ){
      case 'questionType':
        q = new questionType();
        q.initialize(argsList[0], argsList[1]);
        return q;
        break;

      case 'question':
        q = new question();
        q.initialize(argsList[0], argsList[1], argsList[2]);
        return q;
        break;

      case 'role':
        q = new role();
        q.initialize(argsList[0], argsList[1], argsList[2], argsList[3]);
        return q;
        break;

      case 'choice':
        q = new choice();
        q.initialize(argsList[0], argsList[1], argsList[2], argsList[3]);
        return q;
        break;

      default:
        return null;
    }
  }
}
