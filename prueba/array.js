// función con array primer elemento
const unaFuncion = (array) => {
    console.log(array[0]);
  };
 unaFuncion(["hola", "cómo", "está"]) 

//imprimit array
const muybien = (bien) => {
  bien.forEach((elem) => {
    console.log(elem);
  });
};
let hola = ['hola', 'como', 'está'];
muybien(hola);

//imprimir objeto
const saludar = {
    primero : "hola",
    segudno: "cómo",
    tercero: "está"
}

const bien = (objeto) => {
    Object.values(objeto).forEach((elem) =>{
        console.log(elem)
    });
};
bien(saludar) 