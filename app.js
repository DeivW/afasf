var x = document.getElementById("mensaje");

var usuario = new Persona("David");

function tomarValor(){
    let nombre = document.getElementById("nombre").value;
    if(nombre === ""){
        x.innerHTML = "Ingresa tu nombre che putaso";
    }
    else{
        if(nombre === "David")
        {
            x.innerHTML = "Bienvenido " + nombre;
        }
        else{
            x.innerHTML = "Nombre incorrecto"
        }
    }
}