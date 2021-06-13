const ToString = function(props) {
  const exclude = (props && props.exclude) || [];

  return function(target) {
    target.prototype.toString = function() {
      return Object.keys(this)
        .filter(key => !exclude.includes(key))
        .map(key => `${key}: ${this[key]}`)
        .join(', ');
    }

    return target;
  }
}

@ToString({exclude: ['age']})
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let a = new Person('Pidor', 30);
console.log(a.toString())