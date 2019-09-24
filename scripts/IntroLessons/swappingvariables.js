console.log("Swapping Variables");


let person1 = {
  fristName: "Kurtis",
  lastName: "Payne",
  age: 17,
  favoriteNumber: 2,
  hair: "Brown",
  male: true,
  female: false,
  other: false,
  tall: 5.9,
  favoriteColour: "orange",
}


let person2 = {
  fristName: "Erica",
  lastName: "Chour",
  age: 16,
  favoriteNumber: 21,
  hair: "black",
  male: false,
  female: true,
  other: false,
  tall: 5.2,
  favoriteColour: "blue",
}

console.log(person1);
console.log(person2);

let swap = person1.lastName; //lastName
person1.lastName = person2.lastName;
person2.lastName = swap;
console.log(person1);
console.log(person2);
