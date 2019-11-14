const object = {
  currentKey: '',
  set currentEntry(key) {
    if (typeof key !== 'string') { // write the early return condition
      throw new TypeError('set currentEntry: key should be a string');
    }
    if (!this.hasKey(this.entries, key)) { // write the early return condition
      throw new ReferenceError(`set currentEntry: no entry with key "${key}"`);
    }

    // write me!
    //(obj.hasOwnProperty(key) !== this.entries)
  },
  get currentEntry() {
    // write me!
  },
  likedKeys: [],
  get likedEntries() {

    // write me!
  },
  likeEntry: function (key) {
    if (typeof key !== 'string') { // write the early return condition
      return new TypeError('likeEntry: key should be a string');
    }
    if (null) { // write the early return condition
      return new ReferenceError(`likeEntry: key "${key}" has been removed`);
    }
    if (null) { // write the early return condition
      return new Error(`likeEntry: key "${key}" is already liked`);
    }

    // write me!
  },
  unlikeEntry: function (key) {
    if (typeof key !== 'string') { // write the early return condition
      return new TypeError('unlikeEntry: key should be a string');
    }
    if (null) { // write the early return condition
      return new Error(`unlikeEntry: key "${key}" is not in this.likedKeys`);
    }

    // write me!
  },
  

  entries: {},
  isPrimitive: function (value) {
    // write me!
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

      //return(obj.hasOwnProperty(key));
  },
  hasValue: function (obj, value) {
    // write me!
    if (Object.values(obj).includes(value)){
        return true;
    }
    return false;
  },
  addEntry: function (key, value) {
    // write me!
    if (typeof key!=='string') { // write me!
      return new TypeError('addEntry: key should be a string');
    }
    if (this.isPrimitive(value) !== true) { // write me! (using this.isPrimitive)
      return new TypeError('addEntry: value should be a primitive');
    }
    if (this.hasKey(this.entries, key)) { // write me! (using this.hasKey)
      return { [key]: new Error(`addEntry: key "${key}" already exists`) };
    }
    else {
      this.entries[key] = value;
          return true;
        }
    },

  removeEntry: function (key) {
    if (typeof key !== 'string') { // write me!
      return new TypeError('removeEntry: key should be a string');
    }
    if (!this.hasKey(this.entries, key)) { // write me! (using this.hasKey)
      return new ReferenceError(`removeEntry: no property "${key}" in this.entries`);
    }
    
    delete this.entries[key]
    return true;
    // write me!
  },

  updateEntry: function (key, value) {
    if (typeof key !== 'string') { // write me!
      return new TypeError('updateEntry: key should be a string');
    }
    if (this.isPrimitive(value) !== true) { // write me! (using this.isPrimitive)
      return new TypeError('updateEntry: value should be a primitive');
    }
    if (!this.hasKey(this.entries, key)) { // write me! (using this.hasKey)
      return new ReferenceError(`updateEntry: no property "${key}" in this.entries`);
    }
     else {this.entries[key] = value;
     return true;
     }
    // write me!
  },

  readAll: function () {
    // write me!
  },
  findByKey: function (key) {
    // write me!
    if (typeof key !== 'string') { // write me!
      return new TypeError('findByKey: key should be a string');
    }
    if (this.hasKey(this.entries, key)) { // write me! (using this.hasKey)
      return new ReferenceError(`findByKey: no property "${key}" in this.entries`);
    }

  },
  findByValue: function (value) {
    // write me!
    if (this.isPrimitive(value) !== true) { // write me! (using this.isPrimitive)
      return new TypeError('findByValue: value should be a primitive');
    }
    if (value) { // write me! (using this.hasValue)
      return new ReferenceError(`findByValue: no entry with value (${typeof value}, ${value})`);
    }
  },
}

