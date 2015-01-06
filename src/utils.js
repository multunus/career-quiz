Utils = {
  pushObjectToList : function(listType, givenObject){
    EngineNameSpace[listType].push(givenObject);
  },
  createOptionsForObject : function(type, startIndex, numberOfArguments, entryList){
    var options = {objectType: type};
    for (var i = 0; i < numberOfArguments; i++){
      positionInEntryList = startIndex + i;
      options[Types[type]['args'][i]] = entryList[positionInEntryList].gs$cell.$t;
    }
    return options;
  },
  populateList : function(type, entryList){
    Utils.readHeaders(type, entryList);
    var entriesLength = entryList.length;
    var listType = Utils.getListNameFromType(type);
    var numberOfArguments = Utils.getNumberOfArgumentsFromType(type);
    objectFactory = new ObjectFactory();

    for (var i = numberOfArguments; i < entriesLength; i = i + numberOfArguments){
      Utils.pushObjectToList(listType, objectFactory.createObject(Utils.createOptionsForObject(type, i, numberOfArguments, entryList)));
    }
  },
  getListNameFromType : function(type){
    return Types[type]['listName'];
  },
  getNumberOfArgumentsFromType: function(type){
    return Types[type]['args'].length;
  },
  readHeaders : function(type, entryList){
    Types[type]['args'] = [];
    var i = 0;
    while(entryList[i].gs$cell.row < 2){
      Types[type]['args'].push(entryList[i].gs$cell.$t);
      i += 1;
    }
  }
}
