let add = (x) => x * x;
console.log(add(3));

let person = {
  name: "Mohamed",
  SayHi: () => {
    console.log(`Hi ${this.name}`);
  },

  SayHiAlt() {
    console.log(arguments);
    console.log(`Hi ${this.name}`);
  },
};

console.log(person.name);
person.SayHi();
person.SayHiAlt(1, 2, 3);

// let funArrow = () => {
//   console.log(arguments);
// };
// funArrow(1, 2, 3);

// let funRegular = function () {
//   console.log(arguments);
// };
// funRegular(1, 2, 3);

//User Arrow Functions all the time but with THis + arguements use regular Function
