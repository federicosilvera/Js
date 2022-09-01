function calcular_dolar( pesos ){
    let dolar = pesos / 43
    console.log ( dolar);
    
}
// let lista_monetaria = [{moneda:"Dolar", valor:43}, {moneda:"Euro", valor:38}, {moneda:"Argentinos", valor:"00,5"}, {moneda:"Real", valor:"6,90"}, {moneda:"Uruguayos", valor:1}];
// console.log("Cotizacion monetaria", lista_monetaria);
// for(let i=0; i<5; i++){
//  let busqueda =prompt("Ingrese la moneda que quiera conocer Dolar, Euro, Argentinos, Real o Uruguayos, o presione 0 para pasar ");
//     if(busqueda==0){
//         console.log("Terminaron los intentos de busquedas o quiso pasar a calcular Dolar");
//         break
//     }




// function buscar_moneda( buscar ){

//     return buscar.moneda == busqueda;
// }


// let resultado_find = lista_monetaria.find( buscar_moneda );
// console.log("Su valor es de: " , resultado_find);
// }




// for(let i=0; i<5; i++){
//  let pesos_uyu = parseInt(prompt("Ingrese un monto para pasar de Pesos UYU a dolar o 0 para terminar"));




// if(pesos_uyu==0){
//     console.log("Finalizo el numero de intentos o quiso terminarlo, espero volver a verlo ;) ");
//     break
// }

// console.log("Su monto es ", pesos_uyu, "y son estos Dolares: ");
// calcular_dolar(pesos_uyu);

// }


let boton = document.getElementById("boton");

boton.addEventListener("click", function(){
    let monto = document.getElementById("monto");
    let lista = document.getElementById("lista");
    

    let li = document.createElement("li");

    li.innerHTML = `<span>${monto.value}</span>`

    lista.append(li);
    
    
});

