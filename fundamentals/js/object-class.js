const obj1 = {
  fname: "Aryan",
  lname: "Shrivastava",
  getFullname: function () {
    return `${this.fname} ${this.lname}`;
  },
};

const obj2 = {
  fname: "Jethalal",
  lname: "Gada",
};

console.log(obj1.getFullname());
