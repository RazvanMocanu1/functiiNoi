//ForEach Array Method( + Arrow Function , Lambda Function) :

const lista = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

lista.forEach((element) => {

     console.log(element + 1 * 15 - 2);

} );

//Chiar si daca fac lista de mii de cifre tot le va pune pe fiecare una cate una in consola.

console.log(" ");

//Map Array Method :

const listaForme = lista.map((element) => element * element );

console.log(listaForme);

//Elementele din lista se transforma toate deodata.

console.log(" ");

//Filter Array Method :

const listaNumerePare = lista.filter((element) => element % 2 === 0 );

console.log(listaNumerePare);