'use strict';

class BoundedSet extends Set {
  constructor(maxAmount, elements) {
    super(elements);
    this.max = maxAmount;
    this.counter = elements.length;
  }

  add(value) {
    if (this.counter < this.max) {
      this.counter++;
      super.add(value);
      return true;
    } else {
      throw new Error(`exceeded capacity of 5 elements`);
    }
  }

  delete(value) {
    if (this.counter > 0) {
      this.counter--;
      super.delete(value);
      return true; 
    } else {
      return false;
    }
    
  }

  get capacity() {
    return this.max - this.counter;
  }
}

const set = new BoundedSet(5, ['Apple', 'Banana', 'Grape', 'Mango']);
// const set2 = new BoundedSet(2, ['Apple', 'Banana', 'Grape']);