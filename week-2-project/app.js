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
    //obj.hasKey("a") ;
   // console.log(hasKey({a: "3"}, "a"));
  // return object ? hasOwnProperty.call(object, key) : false;
  //const obj = {a:3};
  //obj.a = 3;
  var obj = {
    a: 3,
    x:4
};
   if (obj.hasOwnProperty("a")){
  return (obj.hasOwnProperty({ a: 3 }, "a"));
 }
 
  if (obj.hasOwnProperty("x")){
  return (obj.hasOwnProperty({ x: 4 }, "y"));
  }
   //const obj = { a, b, x, y}
   //a = obj;
   //a.b = 3;
   //console.log ('a' in obj);
   //console.log ('x' in obj);

  // if (a.hasOwnProperty('a')){
   //  return true;
   //}
   //else if (a.hasOwnProperty('b'))
   //return false;
   //if (a.hasOwnProperty('a')){
   //return true;
   //}
   //else if(a.hasOwnProperty('b'));
   //return false;

  //},
  //console.log(hasKey({a: 3}, "a"));
   
   
   //return obj === 3 && hasOwnProperty.call(obj, key);
   //return obj === 3 && hasOwnProperty.call(obj, key);
    
 },
  
  hasValue: function (obj, value) {
    // write me!
  },
  addEntry: function (key, value) {
    if (null) { // write me!
      return new TypeError('addEntry: key should be a string');
    }
    if (null) { // write me! (using this.isPrimitive)
      return new TypeError('addEntry: value should be a primitive');
    }
    if (null) { // write me! (using this.hasKey)
      return { [key]: new Error(`addEntry: key "${key}" already exists`) };
    }

    // write me!
  },
  removeEntry: function (key) {
    if (null) { // write me!
      return new TypeError('removeEntry: key should be a string');
    }
    if (null) { // write me! (using this.hasKey)
      return { [key]: new ReferenceError(`removeEntry: no property "${key}" in this.entries`) };
    }

    // write me!
  },
  updateEntry: function (key, value) {
    if (null) { // write me!
      return new TypeError('updateEntry: key should be a string');
    }
    if (null) { // write me! (using this.isPrimitive)
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
    if (null) { // write me!
      return new TypeError('findByKey: key should be a string');
    }
    if (null) { // write me! (using this.hasKey)
      return { [key]: new ReferenceError(`findByKey: no property "${key}" in this.entries`) };
    }

    // write me!
  },
  findByValue: function (value) {
    if (null) { // write me! (using this.isPrimitive)
      return new TypeError('findByValue: value should be a primitive');
    }
    if (null) { // write me! (using this.hasValue)
      return new ReferenceError(`findByValue: no entry with value (${typeof value}, ${value})`);
    }

    // write me! (this one is a bit trickier)
  },
}
