function ObjectFactory() {}

ObjectFactory.prototype.objectClass = QuestionType;

ObjectFactory.prototype.createObject = function( options ){
  switch(options.objectType){
    case 'questionType':
      this.objectType = QuestionType;
      break;
    case 'question':
      this.objectType = Question;
      break;
    case 'role':
      this.objectType = Role;
      break;
    case 'choice':
      this.objectType = Choice;
      break;
  }

  return new this.objectType( options );
};
