const person = {
    firstName: "Henk",
    lastName: "Janssen",
    city: "Amsterdam"
}

//(Destructuring Objects)
const {firstName, city, lastName} = person //3 Keys
console.log(person)
console.log(firstName) //moet overeenkomen met de naam van de Key
console.log(lastName)
console.log(city)
console.log()