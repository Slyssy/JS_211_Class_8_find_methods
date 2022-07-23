// # An array of banking transactions
const transactions = [1250, 950, -600, 2000, -650, -130, 870, 1300, -580];

//$ Use the find method to find the first withdrawal from the movements array.
const firstWithdrawal = transactions.find((transaction) => transaction < 0);

console.log(transactions);
console.log(firstWithdrawal);

//$ Write a function that finds the index of the transaction being searched.
const findTransaction = (array, searchValue) => {
  const transactionIndex = array.findIndex(
    (transaction) => transaction === searchValue
  );
  console.log(transactionIndex);
};

findTransaction(transactions, 2000);

// $Create an arrayOfPersons that contains multiple "people" objects. You can
// $simply copy/paste the person object you made above multiple times. Feel free
// $to change the values to reflect multiple people you might have in your
// $database.

class Person {
  constructor(firstName, lastName, birthDate, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.gender = gender;
  }
}

const leah = new Person('Leah', 'Marke', 'September 30, 1981', 'female');
const mary = new Person('Mary', 'Lyssy', 'November 11, 1949', 'female');
const kristin = new Person('Lane', 'Purcel', 'December 20, 2007', 'male');
const dan = new Person('Dan', 'Payne', 'July 2, 1978', 'male');
const john = new Person('John', 'Struve', 'June 27, 2015', 'male');
const kayla = new Person('Kayla', 'Purcel', 'September 27, 1995', 'female');
const mary2 = new Person('Mary', 'Brunner', 'April 14, 1994', 'female');

const arrayOfPeople = [leah, mary, kristin, dan, john, kayla];

console.log(arrayOfPeople);

// $Write a function that will find the first person from the array of people
// $that matches. The function should accept "firstName" as a parameter.

const findPerson = (firstName) => {
  const result = arrayOfPeople.find((person) => person.firstName === firstName);
  console.log(result);
};

findPerson('Mary');

// $Write a function that will determine if a person exists in the Array of
// $People. If the person exists, log that person, if now, log a message saying
// $"The person you are looking for does not exist in our records."

const doesUserExist = (fullName) => {
  console.log(fullName);

  const nameIndex = arrayOfPeople.findIndex((person) => {
    fullUserName = `${person.firstName} ${person.lastName}`.toLowerCase();
    console.log(fullUserName);
    return fullUserName === fullName.toLowerCase();
  });
  if (nameIndex === -1) {
    console.log(`${fullName} does not exist in our records.`);
  } else {
    console.log(arrayOfPeople[nameIndex]);
  }
};

doesUserExist('Dan Payne');
