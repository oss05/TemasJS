//functions 


//function declaration
function saludar( nombre ){
    console.log('Buenvenido ' + nombre);
}

saludar('Pepe');
saludar('Juan');

//function expression

const cliente = function(nombreCliente){
    console.log('Mostrando datos de: ' + nombreCliente);
}

cliente('Juan');

//parámetros por defoault en functions

function actividad(nombre = 'Walter white', actividad = 'enseñando química'){
    console.log(`La persona ${nombre}, está ${actividad}`);
}

actividad('Pedro', 'codeando');
actividad();

const actividad2 = function(nombre = 'Walter white', actividad = 'enseñando química'){
    console.log(`La persona ${nombre}, está ${actividad}`);
}

actividad('José', 'durmiendo');
actividad();

//Arrow Functions

let viajando = (destino) => {
    return `Viajando a la ciudad de: ${destino}`
}

let viaje; 

viaje = viajando('Barcelona');
console.log(viaje);