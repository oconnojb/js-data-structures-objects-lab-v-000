// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(obj, key, val) {
  let newObj = {}
  newObj[key] = val
  let newdriver = Object.assign({}, obj, newObj);
  return newdriver;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, val) {
  obj.key = val
}
