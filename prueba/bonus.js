const suscriptions = [
    {
        id: 1,
        title: "Free",
        content : "Solo puedes tomar los cursos gratis"
    },
    
    {   
        id: 2,
        title: "Basic",
        content: "Puedes tomar casi todos los cursos de Platzi durante un mes"
    },
    
    {
        id: 3,
        title: "Expert",
        content: "Puedes tomar casi todos los cursos de Platzi durante un año"
    },
    
    {   
        id: 4,
        title: "ExpertPlus",
        content: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
    }
    ]
    
    let user_subs = prompt("Que suscripción tienes: 1. Free, 2. Basic, 3. Expert, 4. ExpertPlus")
    user_subs = suscriptions.filter(subs => subs.id == user_subs)
    
    if (user_subs.length == 0)
    {
        console.log("No tienes una suscripción valida")
    }
    else{
        console.log(user_subs[0].content)
    }
    