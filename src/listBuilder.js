function listBuilder(){
  this.pushObject = function(listType, givenObject){
    EngineNameSpace[listType].push(givenObject);
  }
}