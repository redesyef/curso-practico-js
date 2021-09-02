const Nombre = "Yeferson";
const Apellido = "Peña";
const userNamePlatzi = "redesyef";
const Edad = 26;
const mail = "ymauriciop@gmail.com";
const mayor = true;
const ahorro = 1000000;
const Deudas = 100000;

console.log(`Nombre completo:  ${Nombre} ${Apellido}`);
console.log("Nombre completo:" + Nombre + " " + Apellido + "");
console.log(`${ahorro - Deudas} pesos`);

const perfil = {
  nombre: "Yeferson",
  apellido: "Peña",
  userNamePlatzi: "redesyef",
  Edad: 26,
  mail: "ymauriciop@gmail.com",
  mayor: true,
  ahorro: 1000000,
  Deudas: 100000,
};
console.log("Nombre completo " + perfil.nombre + " " + perfil.apellido + "");
console.log(`${perfil.nombre} ${perfil.apellido}`);
console.log(`${perfil.ahorro - perfil.Deudas} pesos`);
