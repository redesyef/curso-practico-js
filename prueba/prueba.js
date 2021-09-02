const tipoDeSuscripcion = "Free";

const Suscripciones= ["Free","Basic","Expert","Expert+"];
const Respuestas=["Solo puedes tomar los cursos gratis",
                  "Puedes tomar casi todos los cursos de Platzi durante un mes",
                  "Puedes tomar casi todos los cursos de Platzi durante un año",
                  "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"];

index=Suscripciones.indexOf(tipoDeSuscripcion);
if (index==-1){
    console.error("No exisite este plan u.u");
}
else{
    console.log(Respuestas[index]);
}
