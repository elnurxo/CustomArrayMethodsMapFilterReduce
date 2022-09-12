Array.prototype.myMap = function (callback) {

  const newArr = [];
  for (let i=0; i<this.length; i++) {
    newArr.push(callback(this[i],i,this));
  }
  return newArr;
};

Array.prototype.myFilter = function (callback) {

 const newArr = [];
 for (let i=0; i<this.length; i++) {
    if (callback(this[i],i,this)) {
        newArr.push(this[i]);
    }
  }
  return newArr;
};

Array.prototype.myReduce = function (callback, initialValue) {

  let accumulator = initialValue;
  for (let i=0; i<this.length; i++) {
    if (initialValue===undefined && i===0) {
        accumulator = this[i];
    }
    else{
      accumulator = callback(accumulator,this[i],i,this);
    }
  }
  return accumulator;
};
