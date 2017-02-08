var child_process = require('child_process');

var newProcess2 = child_process.spawn('node', ['file3.js'], {
    stdio: 'inherit' //to share console log of the parent process 
});
var recursive = function(n) {
  if(n <= 2) {
    return 1;
  } else {
    return recursive(n - 1) + recursive(n - 2);
  }
};
var fibnum = recursive(5);
console.log(fibnum);