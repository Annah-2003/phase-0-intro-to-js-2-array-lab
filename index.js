// Write your solution here!// Import necessary libraries (Mocha and Chai)

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}
function destructivelyPrependCat(name) {
  cats.unshift(name);
}
function destructivelyRemoveLastCat() {
  cats.pop();
} function destructivelyRemoveFirstCat() {
  cats.shift();
} function appendCat(name) {
  const copyOfCats = [...cats, name]
  return copyOfCats;
} function PrependCat(name) {
  const copyOfCats = [name, ...cats]
  return copyOfCats;
} function removeLastCat() {
  const copyOfCats = cats.slice(0, -1);
  return [cats[cats.length - 1], copyOfCats];
} function removeFirstCat() { const copyOfCats = newArray = cats.slice(1); return [cats[0], copyOfCats]; }