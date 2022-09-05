

// console.log("Cotizacion monetaria", lista_monetaria);
// for(let i=0; i<5; i++){
//  let busqueda =prompt("Ingrese la moneda que quiera conocer Dolar, Euro, Argentinos, Real o Uruguayos, o presione 0 para pasar ");
//     if(busqueda==0){
//         console.log("Terminaron los intentos de busquedas o quiso pasar a calcular Dolar");
//         break
//     }




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


function calcular_dolar( pesos ){
    let dolar = pesos / 43
    console.log ( dolar);
    return dolar;
    
}

let boton = document.getElementById("boton");

boton.addEventListener("click", function(event){
    let monto = document.getElementById("monto");
    let lista = document.getElementById("lista");
    
     
     let  valor =calcular_dolar(monto.value);

    let p = document.createElement("p");
    
    p.innerHTML = `<span>${valor}</span>`
    
    lista.append(p);
    event.preventDefault()
    
    
});
class conversion {
    constructor(moneda, conversion) {
        this.moneda = moneda,
        this.conversion = conversion
    }
}

let busco;
let valor;
let lista_monetaria = [{moneda:"Dolar", valor:"43"}, {moneda:"Euro", valor:"38"}, {moneda:"Argentinos", valor:"00,5"}, {moneda:"Real", valor:"6,90"}, {moneda:"Uruguayos", valor:"1"}];





let boton2 = document.getElementById("boton2");

boton2.addEventListener("click", function(event){
    event.preventDefault();

    function buscar_moneda(){
        let i = 0;
       for(tipo_moneda of lista_monetaria){
            if(tipo_moneda.moneda == valor){
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
    p.innerHTML = buscar_moneda();
    lista2.append(p);
    
});