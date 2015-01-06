function Choice(){
  this.pid = null;
  this.questionId = null;
  this.questionTypeId = null;
  this.roleId = null;
  this.choiceText = null;

  this.initialize = function(pid, questionTypeId, questionId, roleId, choiceText){
    this.pid = pid;
    this.questionTypeId = questionTypeId;
    this.questionId = questionId;
    this.roleId = roleId;
    this.choiceText = choiceText;
  };
};
