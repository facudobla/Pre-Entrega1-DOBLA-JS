confirmacionEdad();

function confirmacionEdad() {
    let edadEntrada;
    let nombreYapellido, tipoVehiculo, marca, age, tipoCobertura;
    const marcas = ["audi", "chevrolet", "scania", "volvo", "honda", "ducati"];

    const costosSeguro = {
        autos: {
            basica: {
                audi: {2000: 8000, 2010: 10000, 2020: 12000},
                chevrolet: {2000: 7000, 2010: 9000, 2020: 11000}
            },
            premium: {
                audi: {2000: 12000, 2010: 14000, 2020: 16000},
                chevrolet: {2000: 11000, 2010: 13000, 2020: 15000}
            }
        },
        motocicletas: {
            basica: {
                honda: {2000: 4000, 2010: 6000, 2020: 8000},
                ducati: {2000: 3000, 2010: 5000, 2020: 7000}
            },
            premium: {
                honda: {2000: 6000, 2010: 8000, 2020: 10000},
                ducati: {2000: 5000, 2010: 7000, 2020: 9000}
            }
        },
        camiones: {
            basica: {
                scania: {2000: 14000, 2010: 18000, 2020: 22000},
                volvo: {2000: 12000, 2010: 16000, 2020: 20000}
            },
            premium: {
                scania: {2000: 20000, 2010: 24000, 2020: 28000},
                volvo: {2000: 18000, 2010: 22000, 2020: 26000}
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

        age = prompt("¿Qué año es su vehículo?");
        tipoCobertura = prompt("¿Qué cobertura desea? Básica o Premium?");
        tipoCobertura = tipoCobertura.toLowerCase();

        if (marcas.includes(marca)) {
            const costo = costosSeguro[tipoVehiculo][tipoCobertura][marca][age];
            if (!costo) {
                alert("No se encontró información de costo para el año ingresado.");
            } else {
                alert("Estimado " + nombreYapellido + ", el costo mensual de la cobertura " + tipoCobertura + " para su " + tipoVehiculo + " marca " + marca + " año " + age + " es de $ " + costo);
            }
        } else {
            alert("La marca ingresada no es válida.");
        }
    } else {
        alert("El tipo de vehículo ingresado no es válido.");
    }
}
