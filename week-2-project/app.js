const object = {
  entries: {},
  isPrimitive: function (value) {
    // write me!
   // if (typeof value !== this.isPrimitive) {
    //  return true;
  //  }
   //else (typeof value === this.isPrimitive)
    // return false;
    //return !isNaN(value);
  if (Object(value) !== value) {
    return true
  };
  return false; 
  },
  
  
  hasKey: function (obj, key) {
    // write me!

  if (obj.hasOwnProperty(key)){
  return true;
  }
  else 
  return false;

  // if (a.hasOwnProperty('a')){
   //  return true;
   //}
   //else if (a.hasOwnProperty('b'))
   //return false;
  
   //return obj === 3 && hasOwnProperty.call(obj, key);
   //return obj === 3 && hasOwnProperty.call(obj, key);
    
 },
  
  hasValue: function (obj, value) {
    // write me!
    return (Object.values(obj).indexOf(value) > -1);
  },
  addEntry: function (key, value) {
    if (typeof key!=='string') { // write me!
      return new TypeError('addEntry: key should be a string');
    }
    if (Object.value !== value) { // write me! (using this.isPrimitive)
      return new TypeError('addEntry: value should be a primitive');
    }
    if (obj.hasOwnProperty(key) !== this.entries) { // write me! (using this.hasKey)
      return { [key]: new Error(`addEntry: key "${key}" already exists`) };
    }

    // write me!
  },
  removeEntry: function (key) {
    if (typeof key !== 'string') { // write me!
      return new TypeError('removeEntry: key should be a string');
    }
    if (null) { // write me! (using this.hasKey)
      return { [key]: new ReferenceError(`removeEntry: no property "${key}" in this.entries`) };
    }

    // write me!
  },
  updateEntry: function (key, value) {
    if (typeof key !== 'string') { // write me!
      return new TypeError('updateEntry: key should be a string');
    }
    if (Object.value !== value) { // write me! (using this.isPrimitive)
      return new TypeError('updateEntry: value should be a primitive');
    }
    if (null) { // write me! (using this.hasKey)
      return { [key]: new ReferenceError(`updateEntry: no property "${key}" in this.entries`) };
    }

    // write me!
  },
  readAll: function () {
    // write me!
  },
  findByKey: function (key) {
    if (typeof key !== 'string') { // write me!
      return new TypeError('findByKey: key should be a string');
    }
    if (null) { // write me! (using this.hasKey)
      return { [key]: new ReferenceError(`findByKey: no property "${key}" in this.entries`) };
    }

    // write me!
  },
  findByValue: function (value) {
    if (Object.value !== value) { // write me! (using this.isPrimitive)
      return new TypeError('findByValue: value should be a primitive');
    }
    if (null) { // write me! (using this.hasValue)
      return new ReferenceError(`findByValue: no entry with value (${typeof value}, ${value})`);
    }

    // write me! (this one is a bit trickier)
  },
}
