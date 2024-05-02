// Objeto 
let datos_usuario = [
    {
        id: 1,
        nombre: "Raul"
    },
    {
        id: 2,
        nombre: "Ricardo"
    }

]
let objeto = {
    id: 3,
    nombre: "William"
}
datos_usuario.push(objeto)

for( const usuario of datos_usuario){
    console.log(usuario.nombre)
}

console.log(JSON.stringify(datos_usuario))





// Variables 
let formulario_cotizacion = document.getElementById ("formulario_cotizacion")
let msj_alerta = document.getElementById ("msj_alerta")


// Eventos
formulario_cotizacion.addEventListener ("submit", funcionEjemplo)

function funcionEjemplo(e) {
    e.preventDefault();
    let formulario = e.target;
    // console.log (formulario.children[0].value)
    // console.log (document.getElementById ("numero").value)
    // console.log (formulario.texto.value)
    // console.log (formulario.basico.value)
    // console.log (formulario.completo.value)
    // let texto= formulario.texto.value;
    // let numero= formulario.numero.value;
    // let basico= formulario.basico.value
    // let completo= formulario.completo.value
    let marca= formulario.marca.value
    let anio= formulario.anio.value
    let categoria= formulario.categoria.value
    let plan= formulario.plan.value
    console.log (marca)
    console.log (categoria)
    console.log (anio)
    console.log (plan)

    // msj_alerta.innerHTML=`<h1> El valor del plan para tu ${marca} modelo ${anio} es de $19.500 </h1>`

    let costo = costosSeguro[categoria][plan][marca];
    let form_ok = false;
    if (!costo) {
        msj_alerta.innerHTML=`<h1> No se encontro el vehiculo solicitado</h1>`
    } else {                
        switch (true) {
            case (anio<=2000 && anio>=1995):
                costo = costosSeguro[categoria][plan][marca]["minimo"]
                form_ok=true
            break;
            case (2001<=anio && anio <=2011):
                costo = costosSeguro[categoria][plan][marca]["medio"];
                form_ok=true
            break;
            case (anio>=2012 && anio <=2024):
                costo = costosSeguro[categoria][plan][marca]["maximo"];
                form_ok=true
            break;
            default:
                msj_alerta.innerHTML=`<h1> No tenemos coberturas disponibles para tu vehiculo </h1>`
                break;
            }         

    }
if (form_ok== true) {
    setTimeout(()=>{
        resultadoCotizacion;
     },1500);
    formulario_cotizacion.style.display="none";
    // titulo2.style.display="none"
    let resultadoCotizacion= msj_alerta.innerHTML= `<h1>El valor del plan para tu ${marca} modelo ${anio} es de $${costo} </h1>`;
    let objeto_form= {
       categoria: categoria,
       marca: marca,
       modelo: anio,
       plan: plan,
    }
    console.log(JSON.stringify(objeto_form))


}

else {
    msj_alerta.style.color="red";
    
}


}   




// confirmacionEdad();

// function confirmacionEdad() {
//     let edadEntrada;
//     let nombreYapellido, tipoVehiculo, marca, age, tipoCobertura;
//     const marcas = ["audi", "chevrolet", "scania", "volvo", "honda", "ducati"];

//     const costosSeguro = {
//         autos: {
//             basica: {
//                 audi: {minimo: 8000, medio: 10000, maximo: 12000},
//                 chevrolet: {minimo: 7000, medio: 9000, maximo: 11000}
//             },
//             premium: {
//                 audi: {minimo: 12000, medio: 14000, maximo: 16000},
//                 chevrolet: {minimo: 11000, medio: 13000, maximo: 15000}
//             }
//         },
//         motocicletas: {
//             basica: {
//                 honda: {minimo: 4000, medio: 6000, maximo: 8000},
//                 ducati: {minimo: 3000, medio: 5000, maximo: 7000}
//             },
//             premium: {
//                 honda: {minimo: 6000, medio: 8000, maximo: 10000},
//                 ducati: {minimo: 5000, medio: 7000, maximo: 9000}
//             }
//         },
//         camiones: {
//             basica: {
//                 scania: {minimo: 14000, medio: 18000, maximo: 22000},
//                 volvo: {minimo: 12000, medio: 16000, maximo: 20000}
//             },
//             premium: {
//                 scania: {minimo: 20000, medio: 24000, maximo: 28000},
//                 volvo: {minimo: 18000, medio: 22000, maximo: 26000}
//             }
//         }
//     };

//     while (true) {
//         edadEntrada = prompt("Bienvenido, ingrese su edad para continuar");

//         if (isNaN(edadEntrada) || edadEntrada < 18) {
//             alert("Debe ser mayor o igual a 18 años para continuar.");
//         } else {
//             break;
        
//     }

//     nombreYapellido = prompt("Ingrese nombre y apellido");
//     alert("Bienvenido " + nombreYapellido);

//     tipoVehiculo = prompt("¿Qué tipo de vehículo desea cotizar? Autos, Camiones o Motocicletas");
//     tipoVehiculo = tipoVehiculo.toLowerCase();

//     if (tipoVehiculo === "autos" || tipoVehiculo === "camiones" || tipoVehiculo === "motocicletas") {
//         marca = prompt("Ingrese la marca de su vehículo:");
//         marca = marca.toLowerCase();

//         if (marcas.includes(marca)) {
//             age = prompt("¿Qué año es su vehículo?");
//             age=parseInt(age)
//             tipoCobertura = prompt("¿Qué cobertura desea? Básica o Premium?");
//             tipoCobertura = tipoCobertura.toLowerCase();

//             let costo = costosSeguro[tipoVehiculo][marca][tipoCobertura];
//             if (!costo) {
//                 alert("No se encontró información de costo para el año ingresado.");
//             } else {                
//                 switch (true) {
//                     case (age<=2000 && age>=1995):
//                         costo = costosSeguro[tipoVehiculo][tipoCobertura][marca]["minimo"];
//                         alert("Estimado " + nombreYapellido + ", el costo mensual de la cobertura " + tipoCobertura + " para su " + tipoVehiculo + " marca " + marca + " año " + age + " es de $ " + costo)
//                     break;
//                     case (2001<=age && age <=2011):
//                         costo = costosSeguro[tipoVehiculo][tipoCobertura][marca]["medio"];
//                         alert("Estimado " + nombreYapellido + ", el costo mensual de la cobertura " + tipoCobertura + " para su " + tipoVehiculo + " marca " + marca + " año " + age + " es de $ " + costo )
//                     break;
//                     case (age>=2012 && age <=2024):
//                         costo = costosSeguro[tipoVehiculo][tipoCobertura][marca]["maximo"];
//                         alert("Estimado " + nombreYapellido + ", el costo mensual de la cobertura " + tipoCobertura + " para su " + tipoVehiculo + " marca " + marca + " año " + age + " es de $ " + costo)
//                     break;
//                     default:
//                       alert("Lo lamentamos, por el momento no disponemos de una cobertura para su vehiculo");
//                       break;
//                   }         
//         }
            
//         } else {
//             alert("La marca ingresada no es válida.");
//         }
//     } else {
//         alert("El tipo de vehículo ingresado no es válido.");
//     }
//     }
// }