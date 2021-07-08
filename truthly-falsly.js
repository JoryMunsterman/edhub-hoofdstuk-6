true // is waar
5 > 2 // is waar
1 == '1' // is waar, want als je ze omzet naar nummers zijn ze hetzelfde
1 == [1] // is waar, want als je ze omzet naar nummers zijn ze hetzelfde
'1' == [1] // is waar, want als je ze omzet naar nummers zijn ze hetzelfde

false // is niet waar
5 > 10 // is niet waar
1 === '1' // is niet waar, want de typen zijn anders
1 === [1] // is niet waar, want de typen zijn anders
'1' === [1] // is niet waar, want de typen zijn anders

// = = is Equality. Dezelfde waarde in nummers
// = = = precies hetzelfde/gelijkwaardig

//Oké, klinkt logisch. Echter, elk data type heeft ook een inherente boolean waarde, ook wel bekend als truthy
//(soort-van-waar) en falsy (soort-van-niet-waar).De volgende waardes worden in een vergelijking omgezet naar een truthy value:

if ('hallo') {} // een string waarde
if ('false') {} // een string waarde waar het woord 'false' in staat
if (1) {} // een numerieke waarde die niet 0 is
if ([]) {} // een lege array
if ({}) {} // een leeg object
if (function(){}) {} // een lege functie

//de volgende waardes omgezet naar falsy
if (0) {console.log("Het is waar")} // het getal nul
if ('') {} // of "" (een lege string)
if (null) {} // de lege waarde null
if (undefined) {} // niet-toegewezen waarde
if (NaN) {} // Not A Number

const bigger = 2 > 4;
// dit:
if(!bigger) {}
// in plaats van dit:
if(bigger === false) {}

const ingredients = ["Knoflook", "Ui", "Geraspte kaas"];
// dit:
if (!ingredients) {}
// in plaats van
if (ingredients === undefined) {}