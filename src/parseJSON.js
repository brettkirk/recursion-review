// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
/*  Possible Values
  - String ""
  - Number  
  - Object {}
  - Array []
  - True/False t/f
  - Null n
  
  
  
  [1,2,3,4]
*/
var parseJSON = function(json, idx) {
  switch(json.charAt(idx)) {
    case '[':
      array(json, idx);
      break;
  }
};


var  = function(json, idx) {
  
};
var next = function(json, idx) {
  idx++;
  return json.charAt(idx);
};
console.log(JSON.stringify({'key': 5, 'key2': 6}));