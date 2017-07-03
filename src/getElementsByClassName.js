// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  if (node === undefined) {
    node = document.body;
  }
  var results = [];
  
  var parts = node.className.split(' ');
  if (parts.indexOf(className) !== -1) {
    results.push(node);
  }
  
  var child = node.children;
  
  if (child !== undefined) {
    for (var i = 0; i < child.length; i++) {
      results = results.concat(getElementsByClassName(className, child[i]));
    }
  }
  return results;
};
