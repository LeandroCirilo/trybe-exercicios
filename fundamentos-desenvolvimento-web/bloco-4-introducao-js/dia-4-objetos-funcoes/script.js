let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  let info2 = {
    personagem: 'Pato Donald',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
  };

//   console.log('Bem-vinda ' + info.personagem);

//===============================================

  info.recorrente = 'Sim';
  info2.recorrente = 'Sim';
//   console.log(info);

//===============================================

for (let key in info){
    // console.log(key);
}

//===============================================

for (let key in info){
    console.log(info[key] + ' e ' + info2[key]);
}

//===============================================

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

//   console.log("O livro favorito de " + leitor.nome + 'se chama ' + leitor.livrosFavoritos[0].titulo);

leitor.livrosFavoritos = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  };

  let qtd = leitor.livrosFavoritos.length;
  
//   for(let key in leitor.livrosFavoritos){
//     let qtd = leitor.livrosFavoritos.keys(leitor.livrosFavoritos).length;
//   };

  console.log(leitor.nome + ' tem ' + qtd + ' livros favoritos');

//============ FUNÇÕES ========================= 

function verificaPalindrome(a){
  let b = a.split('').reverse().join("");
    if(a === b){
        return true;
    }
    else{
        return false;
    }
};

console.log(verificaPalindrome('arara'));

//============ FUNÇÕES ========================= 

function indiceDoMaior(numeros){
  let maiorNumero = 0;

  for (let indice in numeros){
    if (numeros[maiorNumero] < numeros[indice]){
        maiorNumero = indice;
    };
  };
  return maiorNumero;
};

console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]));

//============ FUNÇÕES ========================= 

function indiceDomenor(numeros){
  let menorNumero = 0;

  for (let indice in numeros){
    if (numeros[menorNumero] > numeros[indice]){
        menorNumero = indice;
    };
  };
  return menorNumero;
};

console.log(indiceDomenor([2, 4, 6, 7, 10, 0, -3]));

//============ FUNÇÕES ========================= 

function maiorNome(nomes){
  let maiorNome = nomes[0];

  for (let indice in nomes){
    if (maiorNome.length < nomes[indice].length){
      maiorNome = nomes[indice];
    }
  }
  return maiorNome
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

//============ FUNÇÕES ========================= 

function indiceDoMaior(numeros){
  let repetido = 0;
  let contador = 0;
  let indexRepetido = 0;

  for (let indice in numeros){
    let testeNumero = numeros[indice];
    for( let indice2 in numeros){
      if (testeNumero === numeros[indice2]){
        contador += 1;
      }   
    }
    if(contador > repetido){
      repetido = contador;
      indexRepetido = indice;
    }
    contador = 0;
  }
  return numeros[indexRepetido];
}

console.log(indiceDoMaior([2, 3, 2, 5, 8, 2, 3]));

// Uma outra forma de resolver o exercício é utilizando objetos. Iniciamos com um objeto vazio e criamos um loop para adicionar as chaves. Aqui a chave recebe o nome do número no array, e o valor inicial de 1. Caso o loop passe pelo mesmo número, a chave irá incrementar seu valor em 1. Ou seja, o próprio objeto passa a ter o valor das repetições de cada número. 


function maisRepetido(numeros) {
  let num = {};

  for (let index = 0; index < numeros.length; index += 1) {
    let valor = numeros[index];
    if (num[valor] === undefined) {
      num[valor] = 1;
    } else {
      num[valor] = num[valor] + 1;
    }
  }

  let contRepetido = 0;
  let contNumero = 0;

  for (let prop in num) {
    if (contRepetido < num[prop]) {
      contRepetido = num[prop];
      contNumero = prop;
    }
  }

  return contNumero;
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));

//============ FUNÇÕES ========================= 

function somatorio (n){
  let total = 0;

  for(let index = 1; index <=n; index += 1){
    total += index;
  }
  return total;

}

console.log(somatorio(5));

//============ FUNÇÕES ========================= 

function verificaFimPalavra(palavra, fimPalavra) {
  palavra = palavra.split('');
  fimPalavra = fimPalavra.split('');
  let teste = true;
  
  for(let index =0; index < fimPalavra.length; index += 1){
    if(palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]){
      teste = false;
    }
  }
  
  return teste;
}

console.log(verificaFimPalavra('trybe', 'be'));
console.log(verificaFimPalavra('joaofernando', 'fernan'));
console.log(verificaFimPalavra('leandro', 'ndro'));

// Uma outra forma de fazer esse exercício é transformar as strings em arrays com o método split e depois revertê-los com o método reverse. Assim, comparamos em um loop cada posição dos dois arrays e caso alguma seja diferente, retornamos false.

function verificaFimPalavra(palavra, fimPalavra) {
  let inversoPalavra = palavra.split('').reverse().join('');
  let inversoFimPalavra = fimPalavra.split('').reverse().join('');
  let result;
  for (let index = 0; index < inversoFimPalavra.length; index += 1) {
    if (inversoPalavra[index] !== inversoFimPalavra[index]) {
      result = false;
      break;
      break; // O "break" serve para encerrar o loop.
    } else {
      result = true;
    }
  }
  
  return result;
}

console.log(verificaFimPalavra('trybe', 'be')); 
console.log(verificaFimPalavra('joaofernando', 'fernan')); 