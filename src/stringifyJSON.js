// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result = '';
  
  if (typeof obj === 'function' || obj === undefined) { return '{}'; }
  if (obj === null) { return 'null'; }
  
  if (Array.isArray(obj)) {
    if (obj.length === 0) { return '[]'; }
    for (var i = 0; i < obj.length; i++) {
      result += stringifyJSON(obj[i]) + ',';
    }
    result = result.slice(0, result.length - 1);
    return '[' + result + ']';
  }
  
  if (typeof obj === 'object') {
    for (var key in obj) {
      if ((typeof key !== 'function') && (typeof obj[key] !== 'function') && obj[key] !== undefined) {
        result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      }
    }
    result = result.slice(0, result.length - 1);
    return '{' + result + '}';
  }
  
  if (typeof obj === 'string') {
    return '"' + String(obj) + '"';
  }
  
  return String(obj);
};
