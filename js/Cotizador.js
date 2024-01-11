confirmacionEdad();

function confirmacionEdad(){

    let edadEntrada;
    let nombreYapellido, tipoVehiculo, marcasAuto, age, tipoCobertura;
    let autos = 11500
    let motocicletas = 7500
    let camiones = 20500    

    while (true) {
        edadEntrada = prompt("Bienvenido ingrese su edad para continuar");

        if (isNaN(edadEntrada) || edadEntrada < 18) {
            alert("Debe ser mayor o igual a 18 años para continuar.");
        }else {
        break;
        }
    }
            nombreYapellido = prompt ("Ingrese nombre y apellido")
            alert ("Bienvenido " + nombreYapellido)
            tipoVehiculo = prompt ("Que tipo de Vehiculo desea Cotizar? autos, camiones o motocicletas")
            tipoVehiculo = tipoVehiculo.toLowerCase()
            if(tipoVehiculo == "autos"){
                marcasAuto = prompt ("Ingrese la marca entre las siguientes opciones: audi, chevrolet")
                marcasAuto = marcasAuto.toLowerCase()
                age = prompt ("Que año es su vehiculo?")
                tipoCobertura = prompt ("Que cobertura desea? basica o premium?")
                alert(" Estimado " + nombreYapellido + " el costo mensual de la cobertura para su auto marca " + marcasAuto + " año " + age + " es de $ " + autos)
            }else if (tipoVehiculo == "camiones"){
                marcasCamiones = prompt ("Ingrese la marca entre las siguientes opciones: Scania, Volvo")
                marcasCamiones = marcasCamiones.toLowerCase()
                age = prompt ("Que año es su vehiculo?")
                tipoCobertura = prompt ("Que cobertura desea? basica o premium?")
                alert(" Estimado " + nombreYapellido + " el costo mensual de la cobertura para su camion marca " + marcasCamiones + " año " + age + " es de $ " + camiones)
            }else if (tipoVehiculo == "motocicletas") {
                marcasMotocicletas = prompt("Ingrese una de las siguientes opciones: Honda, Ducati")
                marcasMotocicletas = marcasMotocicletas.toLowerCase() 
                age = prompt ("Que año es su vehiculo?")
                tipoCobertura = prompt ("Que cobertura desea? basica o premium?") 
                alert(" Estimado " + nombreYapellido + " el costo mensual de la cobertura para su motocicleta marca " + marcasMotocicletas + " año " + age + " es de $ " + motocicletas)}

            }          
                      
                
