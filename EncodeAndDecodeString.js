
var encode = function (strs) {
  var s = "";
  for (let str of strs) {
    s = s + str.length + "#" + str;
  }
  return s;
};

var decode = function (str) {
  var decode = [];
  for (let i = 0; i < str.length; i++) {
    if (
      str.charCodeAt(i) >= 48 &&
      str.charCodeAt(i) <= 57 &&
      str.charAt(i + 1) === "#"
    ) {
      let wordSize = str.charCodeAt(i) - 48;
      decode.push(str.substring(i + 2, i + 2 + wordSize));
    }
  }
  return decode;
};

var strs = ["i", "love", "to", "code"];
var encoded_string = encode(strs);
console.log("Encoded string = ", encoded_string);

var decoded_string = decode(encoded_string);
console.log("Decoded string = ", decoded_string);
