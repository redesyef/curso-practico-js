let solucion = 0;
do {
  solucion = parseInt(prompt("Cuanto es 2+2?"));
  if (solucion === 4) alert("felicitaciones");
} while (solucion !== 4);

// there are many ways to use the prompt feature
var sign = window.prompt(); // open the blank prompt window
var sign = prompt(); //  open the blank prompt window
var sign = window.prompt("Are you feeling lucky"); // open the window with Text "Are you feeling lucky"
var sign = window.prompt("Are you feeling lucky", "sure"); // open the window with Text "Are you feeling lucky" and default value "sure"

const juego = () => {
  let resultado;
  do {
    resultado = parseInt(prompt('¿Cuál es el resultado de "2 + 2". R: '));
  } while (resultado !== 4);
  if (resultado === 4);
  alert("¡Eres un GENIO!");
};
juego();
