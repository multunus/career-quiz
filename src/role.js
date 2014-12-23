function role(){
  this.pid = null;
  this.questionTypeId = null;
  this.roleName = null;
  this.roleText = null;

  this.initialize = function(pid, questionTypeId, roleName, roleText){
    this.pid = pid;
    this.questionTypeId = questionTypeId;
    this.roleName = roleName;
    this.roleText = roleText;
  };
};
