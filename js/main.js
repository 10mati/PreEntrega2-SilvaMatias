// SIMULADOR DE PRESTAMO PERSONAL
/*
const montoSolicitadoMax = 2000000;
const montoSolicitadoMin = 10000;
const interesCliente = 50;
const interesNoCliente = 90;
const impuestoGob = 50;
let cuotafinal;
const edad = 18;
let salida;


// ENTRADA

class datosPersona {
    constructor(nombre, edad, telefono) {
        this._nombre = prompt("INGRESE SU NOMBRE COMPLETO").toUpperCase();
        this._edad = parseInt(prompt("INGRESE SU EDAD"));
        this._telefono = parseInt(prompt("INGRESE SU NUMERO DE TELEFONO"));
    }
    mostrarNombre(){
        return  this._nombre;
    }
    mostrarEdad(){
        return  this._edad;
    }
    mostrarTelefono(){
        return  this._telefono;
    }
}
const datoPersona = new datosPersona ();
//alert (datoPersona.mostrarDatos());




let sosCliente = ingresarCliente ();

function ingresarCliente(){
    let sosCliente = prompt ("Sos cliente del banco? \n - Si\n - No").toUpperCase();
while (sosCliente !== "SI" && sosCliente !== "NO") {
    alert ("El valor ingresado no es correcto");
    sosCliente = prompt ("Sos cliente del banco? \n - Si\n - No").toUpperCase();
}
    return sosCliente;
}


//solicitar monto correcto


let montoSolicitado = ingresarMontoPrestamo ();

function ingresarMontoPrestamo(){
    let montoSolicitado = parseFloat(prompt ("Ingrese el monto del prestamo:   (Max:$" + montoSolicitadoMax +")"));

while (montoSolicitado > montoSolicitadoMax && montoSolicitado < montoSolicitadoMin) {
    alert("El valor del monto ingresado no es valido");
    montoSolicitado = parseFloat(prompt ("Ingrese el monto del prestamo a solicitar:$     ( Max:$" + montoSolicitadoMax +")"));
}
return montoSolicitado;
}

// ingresar la cantidad de cuotas correctas

let cuotas = cantidadCuotas ();

function cantidadCuotas(){
    let cuotas = parseInt (prompt("ingrese la cantidad de cuotas:   (Max:48)"));

while(cuotas > 48 ){
    alert( "La cantidad de cuotas no es valida");
    cuotas = parseInt(prompt("ingrese la cantidad de cuotas:   (Max:48)"));
}
return cuotas;
}

// Calculo de intereses 

let cuotaPura = montoSolicitado /cuotas;

let totalInteresCliente =  montoSolicitado * interesCliente /100;

let interesesCuota = totalInteresCliente /cuotas;

let totalInteresNoCliente = montoSolicitado * interesNoCliente /100;

let interesCuotaNoCliente = totalInteresNoCliente /cuotas;

const fecha = new Date ();
const hoy = fecha.toLocaleDateString();

totalCuota();
function totalCuota() {
    if(sosCliente == "SI"){
        cuotafinal = cuotaPura + interesesCuota;
        
        }else if (sosCliente == "NO"){
        cuotafinal = cuotaPura + interesCuotaNoCliente;
        } 

        let salida = "SIMULADOR DE PRESTAMO \n\n";
        salida += "Datos del Solicitante \n";
        salida+= "Nombre: " + datoPersona.mostrarNombre () + "\n";  
        salida+= "Edad : " + datoPersona.mostrarEdad () + " años de edad" + "\n";
        salida += "Sos cliente: " + sosCliente +"\n";
        salida += "El monto del prestamo solicitado es : " + montoSolicitado + "\n";
        salida +=  "Cuotas: " + cuotas + "\n\n";
        salida += "Total a pagar:\n";
        salida += cuotas + " cuotas de $ " + cuotafinal + "\n\n";
        salida += "FECHA " + hoy + "(valido por 30 dias)" + "\n";
        alert (salida);
    }


operador ();

const datosfinales = {
    nombre: datoPersona.mostrarNombre(),
    edad: datoPersona.mostrarEdad(),
    llamar: datoPersona.mostrarTelefono(),
    cliente: sosCliente,
    prestamo: montoSolicitado,
    cantidadCuotas: cuotas
    }
    console.log (datosfinales)

function operador() {
    let preguntar = prompt ("Si usted desea un operador se puede comunicar para mas informacion \n - Si\n - No").toUpperCase();
if (preguntar == "SI") {
    alert("en breve un operador se comunicara con usted, muchas gracias");
}else {
    alert ("muchas gracias")
}
} */

// (Arrays de Objetos)

//agregar nuevos modelos
let dolar = 700;

class nuevoModelos{
    constructor ( marca, modelo, año){
        this.marca = marca;
        this.modelo = modelo;
        this.año = parseFloat(año);
        this.preciou$ = parseFloat (this.preciou$)
    }
    }
  
const autosModelos = [
{ marca:"wolkswagen", modelo:"T-crossOriginIsolated", anio:2022, preciou$:5000},
{ marca:"wolkswagen", modelo:"Golf", anio:2023, preciou$:4000},
{ marca:"wolkswagen", modelo:"Tiguan", anio:2021,preciou$:4500},
{ marca:"Renault", modelo:"Clio", anio:2022, preciou$:5000},
{ marca:"Renault", modelo:"Kangoo", anio:2022,preciou$:5000},
{ marca:"Chevrolet", modelo:"Cruze", anio:2022,preciou$:5000},
{ marca:"Chevrolet", modelo:"Onix", anio:2023,preciou$:5000},
{ marca:"Ford", modelo:"Mustang", anio:2022,preciou$:5000},
{ marca:"Ford", modelo:"Focus", anio:2020,preciou$:5000},
]

// Agregue un modelo nuevo
autosModelos.push(new nuevoModelos ("Toyota", "Corolla", 2023, 4800));

// Se vendio un modelo

autosModelos.splice(8,1)
console.log(autosModelos);

// Cuantos modelos de autos tengo 

for (let index = 0; index < autosModelos.length; index++) {
    console.log(autosModelos [index].marca);
  }
  
// Filtrar po modelo

let autosford = autosModelos.filter (auto =>auto.marca ==="Renault");
console.log(autosford);











