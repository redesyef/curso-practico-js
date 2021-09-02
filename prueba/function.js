const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

const miFuncion = (name, lastname,nickname) => {

	const completeName = name + lastname;
	return "Mi nombre es: " + completeName + ", pero prefiero que me digas " + nickname ;
}
console.log(miFuncion('Yefer', 'Peña', 'redesyef'));