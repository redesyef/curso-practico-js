function first_element(arrays){
    for (let i = 0; i < arrays.length; i++){
        console.log(arrays[i])
    }
}

let new_names = ["Miguelito", "Josefina", "Yonaiker"]

console.log(first_element(new_names))

const one_piece_characters = {
    luffy: "Sere el rey del piratas",
    Nami: "Haré el mejor mapa del mundo",
    Zoro: "Sere el mejor espadachin del mundo",
    Sanji_god: "Conseguire el all blue",
    Ussop_god: "Sere un valiente guerrero de los mares",
    Frankie: "Construire el barco del sueño",
    Chopper: "Sere el medico que cure cualquier enfermedad",
    Robin: "Descubrire la historia del siglo perdido",
    Brook: "Cumplire mi promesa"
}

function print_objects(objects_selected){
    Object.values(objects_selected).forEach((element) =>{
        console.log(element);
    })
}