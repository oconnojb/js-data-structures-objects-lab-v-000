// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(obj, key, val) {
  let newdriver = Object.assign({}, obj, {key: val});
  console.log(newdriver)
  return newdriver;
}
