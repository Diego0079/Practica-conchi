const precioEntrada = 5; 
const input = document.getElementById("numero");
const span = document.getElementById("total");


input.addEventListener("input", function() {
  let cantidad = parseInt(input.value) || 0; /* Convierte el input en un numero  y luego el || 0 es por si queda en 0 el numero pues que muestre un 0 */
  let precioTotal = cantidad * precioEntrada;
  span.textContent = precioTotal + "€"; /* cambia precio */
});


function alertaCompra() {
  let total = document.getElementById("numero").value; /* .value para que devuelva el valor dentro del input */
  let cantidad = parseInt(total) || 0;
  let precioTotal = cantidad * precioEntrada;

  if (cantidad === 0) {
    window.alert("No has comprado ninguna entrada");
    return false;
  } 
  else {
    window.alert("Has comprado " + cantidad + " entrada/s por " + precioTotal + "€");
    form.reset(); /* para cuando des al sumbit se reinicie los valores */ 
  }
}

function validar() {
  let nombre = document.getElementById("nombre").value
  let apellido = document.getElementById("apellido").value
  let email = document.getElementById("email").value

  if (nombre == "" || apellido == "" || email == "") {
    window.alert("Rellena los campos vacios");
    return false;
  }
  else {
    window.alert("Email enviado");
  }

}

function boton() {
    document.getElementById("menu").classList.toggle("show");
    switchVisibility(); /* aqui llamas a la funcion dentro de una funcion */
}


function cambiaruno(){
  document.getElementById('arriba').src='fts/6A6ACA69-CBCC-470F-AF7C16BB53A68A87-1.jpg'
}

function cambiardos(){
  document.getElementById('arriba').src='fts/el-rey-leon-musical-madrid-1.jpg'
}

function cambiartres(){
  document.getElementById('arriba').src='fts/el_rey_leon_4.jpg'
}

function switchVisibility(){
  const element = document.getElementById('title-menu');

  if (element) {
    element.style.display = (element.style.display === "none") ? "inline" : "none"; /* esta linea lo que hace es si el titulo esta visible lo vuelve no visisble y al reves */
  }
}
