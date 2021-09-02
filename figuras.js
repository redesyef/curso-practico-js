//Código cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("el perimetro del cuadrado es: " + perimetroCuadrado );

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("el área del cuadrado es: " + areaCuadrado + "cm^2" );
console.groupEnd();

//Código triangulo

console.group("Triangulo");
const ladoT1 = 6;
const ladoT2 = 6;
const baseT = 4;
const alturaT= 5.5;
console.log("los lados del triangulo miden: " + ladoT1 + "cm," + ladoT2 + "cm,"  + baseT + "cm y  al altura es" + alturaT);

const perimetroT = ladoT1 + ladoT2 + baseT;
console.log("el perimetro del triangulo es: " + perimetroT );

const areaT = (alturaT * baseT) / 2;
console.log("el área del triangulo es: " + areaT + "cm^2" );
console.groupEnd();

//Cirtulo

console.group("Circulo");

//radio
const radioCirdulo = 4;

//diámetro

const diametroC = radioCirdulo * 2

//pi
const PI = Math.PI

//circunferencia
const perimetroC = diametroC * PI;

//area

const areaC = (radioCirdulo * radioCirdulo) * PI

console.log ("Radio circulo: " + radioCirdulo + " diametro: " + diametroC + " PI: " + PI + " perimertro: " + perimetroC + " area: " + areaC)
console.groupEnd();