const user = {
  name: "Sufian",
  skills: ["HTML", "CSS"],
  address: {
    city: "Dhaka",
  },
};

// It perform shallow copy
const copy = {
  ...user,
  age: 22,
};

console.log(copy);
console.log(user);

copy.skills.push("JavaScript");

console.log(copy);
console.log(user);

const {
  name,
  address: { city },
} = copy;

console.log(name);
console.log(city);
console.log(user.skills);
console.log(copy.skills);
