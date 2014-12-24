utils = {
  pushObjectToList : function(listType, givenObject){
    EngineNameSpace[listType].push(givenObject);
  },
  createObject : function(objectType, argsList){
    switch( objectType ){
      case 'questionType':
        q = new questionType();
        q.initialize(argsList[0], argsList[1])
        return q;
        break;

      default:
        return null;
    }
  }
}
