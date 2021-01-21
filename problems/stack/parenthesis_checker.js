import { Stack } from "../../src/stack.js";

function ParenthesisChecker(str) {
  if (str.trim() == "") {
    return false;
  }
  let _stackObj = new Stack();
  for (let i in str) {
    if (_stackObj.isEmpty()) {
      _stackObj.push(str[i]);
    } else {
      if (
        (_stackObj.top() &&
          _stackObj.top().charCodeAt() == 40 &&
          str[i].charCodeAt() == 41) ||
        (_stackObj.top() &&
          _stackObj.top().charCodeAt() == 123 &&
          str[i].charCodeAt() == 125) ||
        (_stackObj.top() &&
          _stackObj.top().charCodeAt() == 91 &&
          str[i].charCodeAt() == 93)
      ) {
        _stackObj.pop();
      } else {
        _stackObj.push(str[i]);
      }
    }
  }
  return _stackObj.isEmpty();
}

export { ParenthesisChecker };
