const someArray = ['one', 'two', 'three'];

//const first = someArray[0];
//const second = someArray[1];
//const third = someArray[2];

//IPV hierboven kan je het veel korter noteren.
const  [ first, second, third ] = someArray;
console.log(first);

//

function getNames() {
    return ['Henk', 'Piet', 'Jan'];
}
const names = getNames();
console.log(names); // geeft ['Henk', 'Piet', 'Jan'] //dus hier niet maar 1 naam printen

//met destructuring
function getNames2() {
    return ["Yoda", "R2D2", "Wookie"]
}
const [nameOne,, nameThree] = getNames2() //met extra komma aangeven dat 2e waarde niet nodig is.
console.log(nameOne)
console.log(nameThree)

//

function getNames3() {
    return ["ja", "nee", "misschien", "volgende week"];
}
const [answerOne, ...rest] = getNames3();   //hier ...rest als je al die waardes tegelijk wilt aanspraken
console.log(rest);                          //behalve de answerOne