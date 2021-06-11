class Base0 {
  constructor() {
    this.base0 = 0;
  }
}

class Base1 extends Base0 {
  constructor() {
    super();
    this.base1 = 1;
  }

  get Base1() {
    return this.base1;
  }
}

class Base2 extends Base1 {
  constructor() {
    super();
    this.base2 = 2;
    this.base1 = 111;
  }
}

const getChain = function(instance) {
  console.log(instance);
  if (instance) {
    getChain(Reflect.getPrototypeOf(instance));
  }
}

let base = new Base2();

// getChain(base);


function doSomething(){}
console.log( doSomething.prototype );
//  It does not matter how you declare the function, a
//  function in JavaScript will always have a default
//  prototype property.
//  (Ps: There is one exception that arrow function doesn't have a default prototype property)
var doSomething = function(){};
console.log( doSomething.prototype );