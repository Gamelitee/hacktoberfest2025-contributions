// 1. Define an Interface for a Person object
interface Person {
  name: string;
  age: number;
  isStudent: boolean;
}

// 2. Define a function that takes a Person object as an argument
//    and returns a string.
function getGreeting(person: Person): string {
  // Use template literals for a clean string format
  const status = person.isStudent ? "a student" : "not a student";
  return `Hello, my name is ${person.name} and I am ${person.age} years old. I am ${status}.`;
}

// 3. Create a concrete object that conforms to the interface
const jane: Person = {
  name: "Jane Doe",
  age: 28,
  isStudent: false,
};

// 4. Call the function and log the result
console.log(getGreeting(jane));

// Output: Hello, my name is Jane Doe and I am 28 years old. I am not a student.
