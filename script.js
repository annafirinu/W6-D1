class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  name = function () {
    return this.firstName + " " + this.lastName;
  };
  compareAge = function (userCompare) {
    if (this.age < userCompare.age) {
      return this.name() + " è più giovane di " + userCompare.name();
    } else if (this.age > userCompare.age) {
      return this.name() + " è più grande di " + userCompare.name();
    } else {
      return this.name() + " e " + userCompare.name() + " hanno la stessa età";
    }
  };
}

const anna = new User("Anna", "Firinu", 33, "Cagliari");
console.log("Anna", anna);

const mario = new User("Mario", "Rossi", 50, "Roma");
console.log("Mario", mario);

console.log(anna.compareAge(mario));
