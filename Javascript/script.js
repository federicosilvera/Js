
let dolar = "";
function calcular_dolar( pesos ){
     dolar = pesos / 43
    console.log ( dolar);
    return dolar;
    
}

let boton = document.getElementById("boton");
if(window.location.pathname.includes("calculo.html")){
boton.addEventListener("click", function(event){
    let monto = document.getElementById("monto");
    let lista = document.getElementById("lista");
    
     
     let  valor =calcular_dolar(monto.value);

    
    
    lista.innerHTML = `<span>${valor}</span>`
    
    
    event.preventDefault(event)
   
    
});

}
class conversion {
    constructor(moneda, conversion) {
        this.moneda = moneda,
        this.conversion = conversion
    }
}


let busco;
let valor;
let lista_monetaria = [{moneda:"Dolar", valor:"43"}, {moneda:"Euro", valor:"38"}, {moneda:"Argentinos", valor:"00,5"}, {moneda:"Real", valor:"6,90"}, {moneda:"Uruguayos", valor:"1"}];
if(window.location.pathname.includes("calculo.html")){
let boton2 = document.getElementById("boton2");
boton2.addEventListener("click", function(event){
    event.preventDefault(event);

    function buscar_moneda(){
        let i = 0;
        
       for(let tipo_moneda of lista_monetaria){
      let {moneda}=tipo_moneda;
       
            if(tipo_moneda.moneda == valor || tipo_moneda.valor==valor){
                return lista_monetaria[i].moneda + ": " + lista_monetaria[i].valor;
            }   
            else{
                i++;    
            }
            
       }  
    }


    busco = document.getElementById("busco");
    valor = busco.value;
    let lista2 = document.getElementById("lista2");
    
   
    let p = document.createElement("p");
    let mostrar = lista_monetaria.find( buscar_moneda );
    lista2.innerHTML = buscar_moneda();
    
    
});
}

let carrito=[];
let boton_compra = document.querySelectorAll(".btn_compra");
console.log(boton_compra);

for( let boton of boton_compra){
    boton.addEventListener("click", agregar_carrito)
}

function agregar_carrito(e){
    console.log("se agrega")

    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo= padre.parentNode;
    console.log(padre)

    let nombre_producto = padre.querySelector("p").textContent;

    let precio = padre.querySelector("h3").textContent;
    
    let img = padre.querySelector("img").src;

   let producto_carrito = {
    nombre:nombre_producto,
    img:img,
    precio:precio,
    cantidad:1

   };

   carrito.push(producto_carrito);

   let arreglo_json = JSON.stringify(carrito);
   localStorage.setItem("carrito", arreglo_json);

   mostrar_carrito(producto_carrito);
   Toastify({
    text: "Se agrego al Carrito",
    className: "info",
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    }
  }).showToast();

    
}

function mostrar_carrito(producto_carrito){
 
    let fila = document.createElement("tr");

    fila.innerHTML = `<td><img src="${producto_carrito.img}"></td>
                      <td>${producto_carrito.nombre}</td>
                      <td>${producto_carrito.cantidad}</td>
                      <td>${producto_carrito.precio}</td>
                      <td><button class="borrar_elemento">Eliminar</button></td>`;

    let tabla = document.getElementById("tbody");
    tabla.append(fila);  
    
    let botones_borrar = document.querySelectorAll(".borrar_elemento");

    for (let boton of botones_borrar){
        boton.addEventListener("click", borrar_producto);
        
        
    }

}

function borrar_producto(e){
    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;
    abuelo.remove();
    Toastify({
        text: "Se elimino del Carrito",
        className: "info",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast();
}

let btn_carrito = document.getElementById("btn_carrito");
if(window.location.pathname.includes("tienda.html")){
btn_carrito.addEventListener("click", function(){
    let carrito =document.getElementById("carrito");

    if(carrito.style.display !="none"){
        carrito.style.display = "none";
    }
    else{
        carrito.style.display = "flex";
    }
})}