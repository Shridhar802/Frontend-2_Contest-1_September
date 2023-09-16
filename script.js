let arr = [
  { id: 1, name: "john", age: 18, profession: "developer", salary: 1000 },
  { id: 2, name: "jack", age: 20, profession: "developer", salary: 1100 },
  { id: 3, name: "karen", age: 19, profession: "admin", salary: 900 },
];

// 1. Print all developers from the array whose salary is above the average salary of the array.
function PrintDeveloper() {
  //Write your code here , just console.log
  const developers = arr.filter((person) => person.profession === "developer");
  developers.forEach((developer) => {
    console.log(
      `Name: ${developer.name}, Age: ${developer.age}, Salary: ${developer.salary}`
    );
  });
}
PrintDeveloper();



// 2. Using a recursive function, add a new data object to the array until the user says 'no' via a prompt.
function addData() {
  //Write your code here, just console.log
  const newData = {
    id: arr.length + 1,
    name: prompt("Enter a name:"),
    age: parseInt(prompt("Enter an age:")),
    profession: prompt("Enter a profession:"),
    salary: parseInt(prompt("Enter a salary:")),
  };
  arr.push(newData);
  console.log("New data added:", newData);
}

// 3. Remove the youngest and oldest person from the array.
function removeAdmin() {
  //Write your code here, just console.log
  const removedAdmins = arr.filter((person) => person.profession !== "admin");
  arr = removedAdmins;
  console.log("Removed admins:", removedAdmins);
}

// 4. Merge two arrays (use a dummy array for demonstration) such that the resulting array has no duplicate professions.
function concatenateArray() {
  //Write your code here, just console.log
  const dummyArray = [
    { id: 4, name: "alice", age: 22, profession: "developer", salary: 1200 },
    { id: 5, name: "lisa", age: 21, profession: "admin", salary: 950 },
  ];

  const combinedArray = arr.concat(dummyArray);
  console.log("Concatenated array:", combinedArray);
}

// 5. Find the person with the highest salary and reduce their salary by 10% as tax.
function averageAge() {
  //Write your code here, just console.log
  const totalAge = arr.reduce((sum, person) => sum + person.age, 0);
  const average = totalAge / arr.length;
  console.log("Average age:", average);
}

// 6. Check if every person in the array is a developer.
function checkAgeAbove25() {
  //Write your code here, just console.log
  const isAbove25 = arr.some((person) => person.age > 25);
  console.log("Is there anyone above 25? ", isAbove25);
}

// 7. Swap the professions of the first and last person in the array.
function uniqueProfessions() {
  //Write your code here, just console.log
  const professionsSet = new Set(arr.map((person) => person.profession));
  const uniqueProfessions = Array.from(professionsSet);
  console.log("Unique professions:", uniqueProfessions);
}

// 8. Using the `map` method, add a new property to each person called 'experience' with a default value of 1 year.
function sortByAge() {
  //Write your code here, just console.log
  arr.sort((a, b) => a.age - b.age);
  console.log("Sorted array by age:", arr);
}

// 9. Group persons by profession and count them. E.g., {developer: 2, admin: 1}.
function updateJohnsProfession() {
  //Write your code here, just console.log
  const john = arr.find((person) => person.name === "john");
  if (john) {
    john.profession = "manager";
    console.log("Updated John's profession:", john);
  } else {
    console.log("John not found in the array.");
  }
}

// 10. Find the person who has a name with the longest length and capitalize their profession.
function getTotalProfessions() {
  //Write your code here, just console.log
  const developerCount = arr.filter(
    (person) => person.profession === "developer"
  ).length;
  const adminCount = arr.filter(
    (person) => person.profession === "admin"
  ).length;
  console.log("Total Developers:", developerCount);
  console.log("Total Admins:", adminCount);
}

// 11. Create a function that shuffles the array in a random order.
function shuffleArray() {
  //Write your code here, just console.log
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  console.log("Shuffled array:", arr);
}

// 12. Create a function that rotates the array to the right by n steps, where n is provided as an argument.
function rotateArray(n) {
  //Write your code here, just console.log
  n = n % arr.length;
  if (n < 0) {
    n += arr.length;
  }
  const rotatedArray = arr.slice(-n).concat(arr.slice(0, -n));
  console.log(`Rotated array by ${n} steps:`, rotatedArray);
}

// 13. Create a function that finds the person with the closest age to a given number.
function findClosestAge(age) {
  //Write your code here, just console.log
  let closestPerson = arr[0];
  let closestAgeDiff = Math.abs(arr[0].age - age);

  arr.forEach((person) => {
    const ageDiff = Math.abs(person.age - age);
    if (ageDiff < closestAgeDiff) {
      closestAgeDiff = ageDiff;
      closestPerson = person;
    }
  });

  console.log(`Person with the closest age to ${age}:`, closestPerson);
}

// 14. Create a function that checks if there's any repeated name in the array.
function hasRepeatedNames() {
  //Write your code here, just console.log
  const nameSet = new Set();
  let hasRepeated = false;

  arr.forEach((person) => {
    if (nameSet.has(person.name)) {
      hasRepeated = true;
    } else {
      nameSet.add(person.name);
    }
  });

  console.log("Does the array have repeated names?", hasRepeated);
}
