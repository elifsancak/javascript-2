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
   // if (null) return false; // write this early return condition


    // write me! (using this.isNumberyString)
    // write this early return condition
  
      if (typeof param !== 'string'){
      return false; 
      }
        
      else if (isNaN(param)) {
        this.NaNyStrings.push(param);
      }
      
      else if (!isNaN(param)) {
        this.numberyStrings.push(param);
      }
      return true;
      },
    // write me! (using this.isNumberyString)
  
  allStrings: function () {
    // write me!
  if (this.NaNyStrings.lenght === 0){
    return this.numberyStrings;
  }
  else if (this.numberyStrings.lenght === 0){
    return this.NaNyStrings;
  }
  else 
    return this.numberyStrings.concat(this.NaNyStrings);
  },

  
  evenStrings: function () {
    // write me!
   
   if ((this.NaNyStrings.length!==0) && (this.numberyStrings.length===0)){
    
    return this.numberyStrings;
   }
      else if ((this.NaNyStrings.length===0) && (this.numberyStrings.length!==0)){
        
        function evenstrings(number) {
          return number % 2 === 0;
        }
        return this.numberyStrings.filter(evenstrings);
      }
      else if ((this.NaNyStrings.length!==0) && (this.numberyStrings.length!==0)){
        function evenstrings(number) {
          return number % 2 === 0;
        }
        return this.numberyStrings.filter(evenstrings);
      }
      },
  
  
  oddStrings: function () {
    // write me!
    if ((this.NaNyStrings.length!==0) && (this.numberyStrings.length===0)){
    
    return this.numberyStrings;
    }
      else if ((this.NaNyStrings.length===0) && (this.numberyStrings.length!==0)){
        
        function oddstrings(number) {
          return number % 2 !== 0;
        }
        return this.numberyStrings.filter(oddstrings);
      }
      else if ((this.NaNyStrings.length!==0) && (this.numberyStrings.length!==0)){
        function oddstrings(number) {
          return number % 2 !== 0;
        }
        return this.numberyStrings.filter(oddstrings);
      }
   
  },
  negativeStrings: function () {
    // write me!
    if ((this.NaNyStrings.length!==0) && (this.numberyStrings.length===0)){
    
    return this.numberyStrings;
    }
      else if ((this.NaNyStrings.length===0) && (this.numberyStrings.length!==0)){
        
        function negativestrings(number) {
          return number < 0};
        return this.numberyStrings.filter(negativestrings);
      }
      else if ((this.NaNyStrings.length!==0) && (this.numberyStrings.length!==0)){
        function negativestrings(number) {
          return number < 0;
        }
        return this.numberyStrings.filter(negativestrings);
      }
   
  },
  positiveStrings: function () {
    // write me!
    if (this.NaNyStrings.length !== 0 && this.numberyStrings.length === 0){
    return this.numberyStrings;
    }
    else if (this.NaNyStrings.length === 0 && this.numberyStrings.length !== 0){
      function positivestrings(number) {
        return number > 0;
      }
      return this.numberyStrings.filter(positivestrings);
    }
    else if (this.NaNyStrings.length !== 0 && this.numberyStrings.length !== 0){
      function positivestrings(number) {
        return (number > 0 || number === "");
      }
      return this.numberyStrings.filter(positivestrings);
    }

  },
  zeroStrings: function () {
    // write me!
    if (this.NaNyStrings.length !== 0 && this.numberyStrings.length === 0){
    return this.numberyStrings;
    }
    else if (this.NaNyStrings.length === 0 && this.numberyStrings.length !== 0){
      function zerostrings(number) {
        return (number == 0);
      }
      return this.numberyStrings.filter(zerostrings);
    }
    else if (this.NaNyStrings.length !== 0 && this.numberyStrings.length !== 0){
        function zerostrings(number) {
          return (number == 0);
        }
        return this.numberyStrings.filter(zerostrings);
    }
    
  },
  numberyAsNumbers: function () {
    // write me!
    if (this.NaNyStrings.length !== 0 && this.numberyStrings.length === 0){
    return this.numberyStrings;
    }
   // else if (this.NaNyStrings.length === 0 && this.numberyStrings.length !== 0){
     // function str(){
      //  for(var i=0; i<numberyStrings.length; i++){
     //   numberyStrings.length[i] = Number(str);
    //  }
    //  return this.numberyStrings;}
   // }
  
  },

sumOfNaNy: function () {

},

  NaNyAsNumbers: function () {
    // write me!
    
  },
  sumOfNumbery: function () {
    // write me!
    if (this.NaNyStrings.length !== 0 && this.numberyStrings.length === 0){
    return 0;
    }
   // else if (this.NaNyStrings.length === 0 && this.numberyStrings.length !== 0){
    //  function sum(array){
       // array = 0;
       // for (i=0; i< numberyStrings.length[i]; i++){
         // array += numberyStrings[i];
       // }
      //  return array;
     // }
   // }
  },
 
  sumOfNaNy: function () {
    // write me!
    return NaN;
  },
};


