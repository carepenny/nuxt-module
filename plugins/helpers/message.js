// plugins/helpers/message.js
// funtion to allow a user to console.log() a value,
// prefixing that value with the namespace option of our module.
export const message = ({ namespace, string }) => {
  return console.log(namespace, string)
}
