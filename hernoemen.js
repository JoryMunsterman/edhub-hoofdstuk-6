const studentInfo = {
    first: 'Henk',
    last: 'Pieters',
    contact: {
        email: {
            home: 'henkpieters@gmail.com',
            education: 'h.pieters@novi-education.nl',
        },
    }
};

const education = "Hogeschool Novi";

const { home, education: universityEmail } = studentInfo.contact.email;

console.log(education)
console.log(universityEmail)

const dog = { name: "Pluisje", color: "black" };
const cat = { name: "Minoes", color: "red" };

const { name: dogName } = dog;
const { name: catName } = cat;

console.log(dogName) // geeft "Pluisje"
console.log(catName) // geeft "Minoes"
console.log(dog.color)

