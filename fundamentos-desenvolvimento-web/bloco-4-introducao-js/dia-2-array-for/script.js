//============= PERCORRENDO ARRAY ==================


//console.log(numbers);

//============= SOMANDO VALORES DO ARRAY ===========

let somaTotal = 0;

for (let index = 0; index < numbers.length; index += 1){
    somaTotal += numbers[index];
    
}
//console.log(somaTotal);

//============= MÉDIA DOS VALORES DO ARRAY =========

let media = somaTotal / numbers.length
//console.log(media);

//============= MAIOR, MENOR OU IGUAL A 20 =========

if(media > 20){
    console.log('Valor maior que 20')
}
else{
    console.log('Valor menor ou igual a 20')
}

//============== MAIOR VALOR DO ARRAY ==============


let maior = 0;

for(let index = 0; index < numbers.length;index += 1){
    if(maior < numbers[index]){
       maior = numbers[index]
    }
}

console.log(maior);

//============== VALORES ÍMPAR ==============

let impar = 0;

for(let index = 0; index < numbers.length;index += 1){
    if(numbers[index] % 2 !== 0){
       impar += 1
    }
    
}
if(impar === 0){
    console.log('Nenhum valor ímpar encontrado')
}
else{
    console.log(impar);
}

//============== MENOR VALOR NO ARRAY ==============

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menor = numbers[0];



for(let index = 0; index < numbers.length;index += 1){
    
    if(menor > numbers[index]){
       menor = numbers[index]
    }
}

console.log(menor);

//============== MENOR VALOR NO ARRAY/2 ============

let vinteCinco = [];

for(let index = 1; index < 26; index += 1){
    vinteCinco.push(index)

}

// console.log(vinteCinco)

//============== MENOR VALOR NO ARRAY/2 ============


for(let index = 0; index < 25; index += 1){
    console.log(vinteCinco[index] / 2);
}

//============== BONUS ORDENAR CRESCENTE ===========

let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

numbers2.sort((a,b) => a - b);

console.log(numbers2);

//============== BONUS ORDENAR DECRESCENTE =========

let numbers3 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

numbers3.sort((a,b) => b - a);

console.log(numbers3);

//============== BONUS MULTIPLICAR PELO SEGUINTE ===

let numbers4 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbers5 = []

for(let index = 0; index < numbers4.length; index += 1){
    numbers5.push(numbers4[index] * numbers4[index + 1])
}
numbers5.pop();
numbers5.push(numbers4[9] * 2)
console.log(numbers5);

