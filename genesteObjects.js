const studentInfo = {
    firstName: "Henk",
    lastname: "Janssen",
    contact: {
        email: {
            home: "henkjanssen@gmail.com",
            education: "henksschool@gmail.com"
        },
        website: {
            portfolio: "https.www.google.com"
        }
    }
}

const { home, education } = studentInfo.contact.email
console.log(home)
console.log(education)