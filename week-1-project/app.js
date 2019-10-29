const object = {
  numberyStrings: [],
  NaNyStrings: [],
  isNumberyString: function (param) {
   /*return typeof param === 'string' && !isNaN(param);*/
   
    if (typeof param !== 'string'){
      return false;
    }
    return !isNaN(param);
  },
    /*if (typeof param === 'boolean') {
      return false;
    }

    if (typeof param === 'object') {
      return false;
    }

    if (typeof param === 'undefined') {
      return false;
    }

    if (typeof param === 'function') {
      return false;
    }

    if (typeof param === 'number') {
      return false;
    }

    return isNaN(param) ? false : true;*/
    
    
  addString: function (param) {
    if (null) return false; // write this early return condition

    // write me! (using this.isNumberyString)
  },
  allStrings: function () {
    // write me!
  },
  evenStrings: function () {
    // write me!
  },
  oddStrings: function () {
    // write me!
  },
  negativeStrings: function () {
    // write me!
  },
  positiveStrings: function () {
    // write me!
  },
  zeroStrings: function () {
    // write me!
  },
  numberyAsNumbers: function () {
    // write me!
  },
  NaNyAsNumbers: function () {
    // write me!
  },
  sumOfNumbery: function () {
    // write me!
  },
  sumOfNaNy: function () {
    // write me!
  },
};


