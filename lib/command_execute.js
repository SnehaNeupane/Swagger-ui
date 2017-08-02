'use strict';

var childproc = require('child_process');

exports.exec = function(cmds, aftercommand=null){
  var next;
  next = function(){
    var cmd;
    if (cmds.length > 0) {
      cmd = cmds.shift();
      console.log("Running command: " + cmd);
      return childproc.exec(cmd, function(err, stdout, stderr){
        if (err != null) {
          console.log(err);
        }
        if (stdout != null) {
          console.log(stdout);
        }
        if (stderr != null) {
          console.log(stderr);
        }
        return next();
      });
    } else {
      if(typeof aftercommand == 'function'){
        aftercommand();
      }
      return console.log("Done executing commands.");
    }
  };
  // console.log("Running the follows commands:");
  // console.log(cmds);
  return next();
};
