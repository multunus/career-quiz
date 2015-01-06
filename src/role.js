function Role( options ){
  var self = this;
  Object.keys(options).forEach(function (key) {
    self[key] = options[key] || null;
  });
};
