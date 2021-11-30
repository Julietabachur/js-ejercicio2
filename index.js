alert("Bienvenidx! Para incribirse en el curso debe llenar el siguiene fomulario.")

var nombre = prompt("Por favor ingrese su nombre")
var apellido = prompt("Por favor ingrese su apellido")
var nombreCompleto = nombre+" "+apellido

if ((nombre !="") && (apellido !="")) {
    alert("El nombre ingresado es: "+nombreCompleto+". Puede continuar con la suscripción")
} else {
    prompt("Debe ingresar su nombre para continuar")
}

var edad = parseInt(prompt("Por favor, indique su edad"))

if ((edad < 18) || (edad > 35)) {
    alert("Lo sentimos. Usted deber tener entre 18 y 35 años para participar.")
} 
else {
    alert("Gracias, puede continuar con la suscripción")
}

var ubicacion = prompt("Por favor, indique en mayúscula si reside en CABA, PROVINCIA DE BS AS u OTRO.")

if (ubicacion == "CABA") {
    alert("Gracias, puede continuar con la suscripción")
} 
else if (ubicacion == "PROVINCIA DE BS AS") {
    alert("Disculpe, esta sede pertenece a Capital Federal. Si usted reside en provincia debe acercarse a cualquiera de nuestras sedes ubicadas en la Provincia de Bs As.")
} else {
    prompt("Debe ingresar su residencia si desea participar.")
}

var celular = parseInt(prompt("Por favor, ingrese su número de celular."))

if (celular >10000000) {
    alert("El numero celular ingresado es: "+celular)
} else {
    prompt("Debe ingresar un número de celular para que podamos contactarnos con usted.")
}

alert("Inscripción finalizada.")