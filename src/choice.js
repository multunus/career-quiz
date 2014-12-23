function choice(){
  this.pid = null;
  this.questionId = null;
  this.roleId = null;
  this.choiceText = null;

  this.initialize = function(pid, questionId, roleId, choiceText){
    this.pid = pid;
    this.questionId = questionId;
    this.roleId = roleId;
    this.choiceText = choiceText;
  };
};
