class Person {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }

  getFullname() {
    return `${this.fname} ${this.lname}`;
  }
}

const p1 = new Person("Aryan", "Shrivastava");
const p2 = new Person("Jethalal", "Gada");
//this just takes the prototype of the class and puts it into the __proto__ of p1(object)
//and then we can access the getFullname method from the prototype of the class

console.log(p1.getFullname());
console.log(p2.getFullname());
