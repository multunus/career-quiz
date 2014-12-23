function questionType(){
  this.pid = null;
  this.ptype = null;

  this.initialize = function(pid, ptype){
    this.pid = pid;
    this.ptype = ptype;
  };
};