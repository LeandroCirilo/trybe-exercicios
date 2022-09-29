//============ Preenchendo o array ==============

let umacem = [];

for (let index = 1; index <= 100; index += 1){
    umacem.push(index);
}

console.log(umacem);

//=================== Somando valores do array ===========
let somaTotal = 0;

for (let index = 0; index < umacem.length; index += 1){
    somaTotal += umacem[index];
    
}
console.log(somaTotal);

///======== FATORIAL ================

let fat = []

for(let index = 10; index >= 1; index -= 1){
    fat.push(index);
}
// console.log(fat);
let fat2 = fat[0];
for(let index = 1; index <= 9; index += 1){
    fat2 = fat2 * fat[index]

}

console.log(fat2);

///======== String invertida ================

//------- PRIMEIRO INVERTE SEM FOR -------------


let invertida = word.split('').reverse().join("");

console.log(invertida);

//------- PRIMEIRO INVERTE COM FOR -------------

let word = 'tryber';
let substring = word.split('');
let teste = "";


for(let index = substring.length - 1; index >= 0; index -= 1){
   teste += substring[index]
}

console.log(teste);

///======== String invertida ================

let array = ['java', 'javascript', 'python', 'html', 'css'];

let invertendo = array.split('');

console.log(invertendo);
