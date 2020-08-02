/* let name1 = "toto ";
let name2 = " titi";
name2 = ' aaaaa';
console.log(name1+name2);
//String name1 et name2
let age = 52;
console.log(age); */

// const name1 = "toto"
// name1 = "titi"
// console.log(name1);

//CONCATERNATION
/* let nom = "SACI";
let prenom = "zakaria";
console.log("Je m'appel   :  " + nom + "  " + prenom);
alert("Je suis Saci Zakaria"); */


/* let name1 = "toto ";
let name2 = " titi";
console.log(name1+name2); */
/*

function addition(nombreUn, nombreDeux) {
console.log();(nombreUn + nombreDeux)
    }
    addition(5,9);
  */

/* 
 let name1 = "toto ";
 console.log(name1); 

 function addition(nombreUn, nombreDeux) {
    console.log(nombreUn + nombreDeux)
        }
addition(5,9.4); */
// let name ="Zakaria";

/* function dirBonjour(name) {  

    alert('Bonjour  ' + name)
}
dirBonjour('Zakaria'); */

/* let crie;
function crieDeGerre() {
    crie = "Toujours plus fort !";
    console.log(crie);
}

crieDeGerre();
console.log(crie); */
/* 
let nmb1 = 5;
let nmb2 = 9;
function somme(nmb1, nmb2) {
    let result = nmb1 + nmb2;
    console.log(result);
    return result;
}

//console.log( "le resultat de la sommme  est :   " + somme(nmb1, nmb2)   );

function quotion(nmb1, nmb2) {
    let result = nmb1 / nmb2;
    console.log(result);
    return result;
}

let resultSomme = somme(nmb1,nmb2);
let resultQuotion  = quotion(nmb1,nmb2);

console.log(resultSomme*resultQuotion); */

// let preparation = 10; let cuisson = 15;
/* function cuisiner(nombreDeGateaux, minutesDePreparation = 10, minutesDeCuisson = 15) {
    let resultat = nombreDeGateaux * (minutesDeCuisson + minutesDePreparation);
    return resultat;
}

console.log(cuisiner(5));
let tempsDePreparationChocolat = cuisiner(4);
let tempsDePreparationFraisier = cuisiner(1, 20);
console.log(tempsDePreparationFraisier);
console.log(tempsDePreparationFraisier + tempsDePreparationChocolat); */


function prevoirAge() {
    let age = prompt("Quel est votre age");
    //age = parseInt(age);
    //age = parseFloat(age);

    // nombre = 45;
    // nombreString = nombre + "",
    //nombreString = nombre.toString;
    age = Number(age);
    alert("bientot vous aurez   " + (age + 1) + "  ans.");
}
prevoirAge();

console.log(prevoirAge());


