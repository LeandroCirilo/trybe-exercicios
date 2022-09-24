console.log('Olá, word!');

//============= Exercicio 01/15 ==============


// === Módulo ===

console.log('resultado da Divisão: ', a % b);

// === Divisão ===

console.log('resultado da Divisão: ', a / b);

// === Multiplicação ===

console.log('resultado da Multiplicação: ', a * b);


// === Subtração ===

console.log('resultado da Subtração: ', a - b);


// === Adicação ====

console.log('resultado da Adição: ', a + b);

//============= Exercicio 02/15 ==============


if (a < b) {

    console.log('Maior valor é : ', b);

}
else if (a > b) {

    console.log('Maior valor é : ', a);

}
else {

    console.log('Os números tem o mesmo valor');

}

//============= Exercicio 03/15 ==============



if (a > b && a > c) {

    console.log('Maior valor é : ', a);

}
else if (b > a && b > c) {

    console.log('Maior valor é : ', b);

}
else {
    console.log('Maior valor é : ', c);

}

//============= Exercicio 04/15 ==============




if (a > 0) {

    console.log('Positive');

}
else if (a < 0) {

    console.log('negative');

}
else {
    console.log('zero');

}

//============= Exercicio 05/15 ==============


if (a + b + c === 180) {

    console.log('true');

}
else if (a < 0 || b < 0 || c < 0) {

    console.log('Erro, valor negativo');

}
else {
    console.log('false');

}

//============= Exercicio 06/15 ==============


if (a.toLowerCase()  === 'peão') {

    console.log('Primeira jogada anda duas para frente e nas próximas uma para frente:', a);

}
else if (a.toLowerCase() === 'torre') {

    console.log('anda para frente e laterais quantas casas poder:', a);

}
else if (a.toLowerCase() === 'bispo') {

    console.log('anda nas diagonais quantas casas poder:', a);

}
else if (a.toLowerCase() === 'rainha') {

    console.log('anda para qualquer canto quantas casas poder:', a);

}
else if (a.toLowerCase() === 'rei') {1

    console.log('anda uma casa para todos os lados:', a);

}
else (
    console.log('Peça de xadrez invalida!')
)

//============= Exercicio 07/15 ==============

const a = 105;
// const b = 'torre';
// const c = 'bispo';
// const d = 'rainha';
// const e = 'rei';


if (a < 0 || a > 100) {

    console.log('Valor invalido!');
}
else if (a >= 90) {

    console.log('Sua nota é A');

}
else if (a >= 80) {

    console.log('Sua nota é B');
}
else if (a >= 70) {

    console.log('Sua nota é C');
}
else if (a >= 60) {

    console.log('Sua nota é D');
}
else if (a >= 50) {

    console.log('Sua nota é E');
}
else if (a < 50) {

    console.log('Sua nota é F');
}