confirmacionEdad();

function confirmacionEdad() {
    let edadEntrada;
    let nombreYapellido, tipoVehiculo, marca, age, tipoCobertura;
    const marcas = ["audi", "chevrolet", "scania", "volvo", "honda", "ducati"];

    const costosSeguro = {
        autos: {
            basica: {
                audi: {minimo: 8000, medio: 10000, maximo: 12000},
                chevrolet: {minimo: 7000, medio: 9000, maximo: 11000}
            },
            premium: {
                audi: {minimo: 12000, medio: 14000, maximo: 16000},
                chevrolet: {minimo: 11000, medio: 13000, maximo: 15000}
            }
        },
        motocicletas: {
            basica: {
                honda: {minimo: 4000, medio: 6000, maximo: 8000},
                ducati: {minimo: 3000, medio: 5000, maximo: 7000}
            },
            premium: {
                honda: {minimo: 6000, medio: 8000, maximo: 10000},
                ducati: {minimo: 5000, medio: 7000, maximo: 9000}
            }
        },
        camiones: {
            basica: {
                scania: {minimo: 14000, medio: 18000, maximo: 22000},
                volvo: {minimo: 12000, medio: 16000, maximo: 20000}
            },
            premium: {
                scania: {minimo: 20000, medio: 24000, maximo: 28000},
                volvo: {minimo: 18000, medio: 22000, maximo: 26000}
            }
        }
    };

    while (true) {
        edadEntrada = prompt("Bienvenido, ingrese su edad para continuar");

        if (isNaN(edadEntrada) || edadEntrada < 18) {
            alert("Debe ser mayor o igual a 18 años para continuar.");
        } else {
            break;
        }
    }

    nombreYapellido = prompt("Ingrese nombre y apellido");
    alert("Bienvenido " + nombreYapellido);

    tipoVehiculo = prompt("¿Qué tipo de vehículo desea cotizar? Autos, Camiones o Motocicletas");
    tipoVehiculo = tipoVehiculo.toLowerCase();

    if (tipoVehiculo === "autos" || tipoVehiculo === "camiones" || tipoVehiculo === "motocicletas") {
        marca = prompt("Ingrese la marca de su vehículo:");
        marca = marca.toLowerCase();

        if (marcas.includes(marca)) {
            age = prompt("¿Qué año es su vehículo?");
            age=parseInt(age)
            tipoCobertura = prompt("¿Qué cobertura desea? Básica o Premium?");
            tipoCobertura = tipoCobertura.toLowerCase();

            let costo = costosSeguro[tipoVehiculo][tipoCobertura][marca];
            if (!costo) {
                alert("No se encontró información de costo para el año ingresado.");
            } else {                
                switch (true) {
                    case (age<=2000 && age>=1995):
                        costo = costosSeguro[tipoVehiculo][tipoCobertura][marca]["minimo"];
                        alert("Estimado " + nombreYapellido + ", el costo mensual de la cobertura " + tipoCobertura + " para su " + tipoVehiculo + " marca " + marca + " año " + age + " es de $ " + costo)
                    break;
                    case (2001<=age && age <=2011):
                        costo = costosSeguro[tipoVehiculo][tipoCobertura][marca]["medio"];
                        alert("Estimado " + nombreYapellido + ", el costo mensual de la cobertura " + tipoCobertura + " para su " + tipoVehiculo + " marca " + marca + " año " + age + " es de $ " + costo )
                    break;
                    case (age>=2012 && age <=2024):
                        costo = costosSeguro[tipoVehiculo][tipoCobertura][marca]["maximo"];
                        alert("Estimado " + nombreYapellido + ", el costo mensual de la cobertura " + tipoCobertura + " para su " + tipoVehiculo + " marca " + marca + " año " + age + " es de $ " + costo)
                    break;
                    default:
                      alert("Lo lamentamos, por el momento no disponemos de una cobertura para su vehiculo");
                      break;
                  }         
        }
            
        } else {
            alert("La marca ingresada no es válida.");
        }
    } else {
        alert("El tipo de vehículo ingresado no es válido.");
    }
}