export function getNumberOfChars(name: string) {
  // number of characters in: name
  return name.length;


}

export function getFirstChar(name: string) {
  // first character of: name
  return name[0];

}

export function getLastChar(name: string) {
  // last character of: name
  return name[name.length - 1];

}

export function getLower(name: string) {
  // name all in lower case (example: "ABC" becomes "abc")
  return name.toLowerCase();

}

export function getUpper(name: string) {
  // name all in upper case (example: "abc" becomes "ABC")
  return name.toUpperCase();

}