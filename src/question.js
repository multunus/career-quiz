function Question(){
  this.pid = null;
  this.questionTypeId = null;
  this.questionText = null;

  this.initialize = function(pid, questionTypeId, questionText){
    this.pid = pid;
    this.questionTypeId = questionTypeId;
    this.questionText = questionText;
  };
};
