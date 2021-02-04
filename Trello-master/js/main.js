//Aqui empieza la opcion 2
//Esta funcion es para reemplazar el input inicial por un nuevo div que contiene el input nuevo y un boton de anadir
var inputInicial = document.getElementById("contenedor");
 //estas variables estan afuera de la funcion xq se vuelven a utilizar en otra funcion
var inputLista = document.createElement("input");
  function mostrar(){
  //para crear un div un input y un boton para anadir la lista.
  var botonLista = document.createElement("button");
  botonLista.className="btn btn-success"
  var contenedorInputBoton = document.createElement("div");
  contenedorInputBoton.className="inputtt"
  var textoBoton = document.createTextNode("Anadir lista"); //para crear el texto del boton
  botonLista.appendChild(textoBoton);  //esto es para que inserte el texto del boton
  contenedorInputBoton.appendChild(inputLista);
  contenedorInputBoton.appendChild(botonLista);  //esto es para meter el input y el boton dentro del div que creamos.
  var contenedorInicial = document.getElementById("contenedorInicial"); //para mandar a llamar al contenedor inicial.
  contenedorInicial.replaceChild(contenedorInputBoton, inputInicial);  //se rempaza el input inicial por el nuevo div que creamos que es el que contiene el input y boton nuevo
  botonLista.onclick=  agregarLista;

}

//Esta funcion es para guardar la lista que se crea.
   //para crear el link de: anadir tarjeta


  function agregarLista(e){  //La "e" es para poner como parametro el evento.
  var linkTarjeta = document.createElement("a");
  var contenedorListaTarjeta = document.createElement("div"); //para crear el contenedor del nombre de la lista y el link de anadir tarjeta
  contenedorListaTarjeta.className="div-lista"
  var divPadre = e.target.parentElement;  //para que el papa del elemento al que se le esta aplicando el evento
  var nombreLista = document.createTextNode(inputLista.value); //para crear un nodo de taxto para guardar que se le anexa al input
  var contenedorNombreLista = document.createElement("h3"); //
  contenedorNombreLista.appendChild(nombreLista);//para meter el texto que se ingresa en el input en un p que va a ser nuestro titulo.
  contenedorListaTarjeta.appendChild(contenedorNombreLista); //para meter el p en el div donde estara la lista nueva
  contenedorListaTarjeta.appendChild(linkTarjeta); //para meter dentro del div el link
  divPadre.parentElement.replaceChild(contenedorListaTarjeta, divPadre); //aqui esta remplazando el div viejo por el nuevo que es el que contiene la lista nueva y el link de agregar tarjeta
  var textoLink = document.createTextNode("Anadir tarjeta");  //para crear el texto que va a llevar el link
  linkTarjeta.appendChild(textoLink);   //para agregar el texto al link

  var contenedorListas=document.getElementById("contenedorListas");
  contenedorListas.appendChild(contenedorListaTarjeta); //es para meter el div que lleva el titulo y link, en el div nuevo
  contenedorInicial.appendChild(inputInicial); //Se vuelve a incluir en el div inicial el input inicial para poder seguir anadiendo listas
  //Para que el link anadir tarjeta funcione

  linkTarjeta.onclick=function crearTarjeta (e){
    var contenedorNombreTarjeta = document.createElement("div");
    var inputNombreTarjeta = document.createElement("input");
    var botonAgregarTarjeta = document.createElement("button");
    botonAgregarTarjeta.className="btn btn-success";
    var textoBotonTarjeta = document.createTextNode("Guardar tarjeta");
    botonAgregarTarjeta.appendChild(textoBotonTarjeta);
    contenedorNombreTarjeta.appendChild(inputNombreTarjeta);
    contenedorNombreTarjeta.appendChild(botonAgregarTarjeta);
    e.target.parentElement.replaceChild(contenedorNombreTarjeta, linkTarjeta);

    botonAgregarTarjeta.onclick= function guardarTarjeta (e){
      var tarjetaCreada = document.createElement("div");
      tarjetaCreada.className="tarjetaHecha"   //es para crear una clase a ese div para poder darle estilo css
      var nombreTarjeta = document.createTextNode(inputNombreTarjeta.value);
      var cajaNombreTarjeta = document.createElement("p");
      cajaNombreTarjeta.appendChild(nombreTarjeta);
      tarjetaCreada.appendChild(cajaNombreTarjeta);
      e.target.parentElement.parentElement.replaceChild(tarjetaCreada, contenedorNombreTarjeta);
      contenedorListaTarjeta.appendChild(linkTarjeta);


      nombreTarjeta.setAttribute("draggable", "true");
      nombreTarjeta.setAttribute("id", "tarjetaNuevaMov.1" + contador);
      nombreTarjeta.addEventListener("dragstar", arrastrando);
      nombreTarjeta.addEventListener("dragend", finalizarArrastrar);
      contador++
    }
}




}
function arrastrando(e){
  e.dataTransfer.setData("text", this.id);
}
function arrastrar(e){
  e.preventDefault();
}
function soltar(e){
  var idMove = e.dataTransfer.getData("text");
  var elMove= document.getElementById(idMove);
  this.insertBefore(elMove, this.childNodes[1]);
}
function finalizarArrastrar(e){
  e.target.style.backgroundColor = "#C1FAFF";
}
function dejarArrastrar(e){
  e.target.style.backgroundColor = "#FFFEB5";
}