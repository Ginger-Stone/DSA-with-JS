// List Data structure implementation
class List {
  constructor() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; //Initialises an empty array to store list elements
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.previous = previous;
    this.next = next;
    this.hasPrevious = hasPrevious;
    this.hasNext = hasNext;
    this.length = length;
    this.curPos = curPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;
  }
}

function append(element) {
  this.dataStore[this.listSize++] = element;
}

function find(element) {
  for (let i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i] == element) {
      return i;
    }
    return -1;
  }
}

function remove(element) {
  var foundAt = this.find(element);
  if (foundAt > -1) {
    this.dataStore.splice(foundAt, 1);
    --this.listSize;
    return true;
  }
  return false;
}

function length() {
  return this.listSize;
}

function toString() {
  return this.dataStore; //currently returns an array but still allows you to view the contents as that is essentially the function here
}

function insert(element, after) {
  let insertPos = this.find(after);
  if (insertPos > -1) {
    this.dataStore.splice(insertPos + 1, 0, element);
    ++this.listSize;
    return true;
  }
  return false;
}

function clear() {
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = this.pos = 0;
}

function contains(element) {
  for (let i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i] == element) {
      return true;
    }
  }
  return false;
}

function moveTo(position) {
  this.pos = position;
}

function getElement() {
  return this.dataStore[this.pos];
}

function previous() {
  return this.dataStore[--this.pos];
}

function next() {
  return this.dataStore[this.pos++];
}

function hasNext() {
  if (this.pos > this.listSize - 1) {
    return false;
  } else {
    return true;
  }
}

function hasPrevious() {
  if (this.pos <= 0) {
    return false;
  } else {
    return true;
  }
}

function front() {
  this.pos = 0;
}

function end() {
  this.pos = this.listSize - 1;
}

function curPos() {
  return pos;
}

module.exports = List;
