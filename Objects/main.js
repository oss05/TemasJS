//Object constructor

 function Tarea(nombre, urgencia){
     this.nombre = nombre;
     this.urgencia = urgencia;
 }

 const tarea1 = new Tarea('Bailar', 'Media');
 const tarea2 = new Tarea('Aprender JS', 'Urgente');

//  console.log(tarea1);

 //Prototypes

 Tarea.prototype.mostratInformacionTarea = function (){
     return `La tarea ${this.nombre} tiene una prioridad ${this.urgencia}`;
 }
 
console.log(tarea1.mostratInformacionTarea());
console.log(tarea2.mostratInformacionTarea());

//Object Desctructuring

const aprendiendoJS = {
    version: {
        nueva: 'ES6',
        anterior: 'ES5'
    },
    frameworks: ['React', 'VueJS', 'AngularJS']
}

//Forma anterior 

// let version = aprendiendoJS.version.nueva;
// let framework = aprendiendoJS.frameworks[0];

// console.log(version, framework);

//Forma nueva

let {version} = aprendiendoJS;
console.log(version);

let {nueva} = aprendiendoJS.version;
console.log(nueva);

//Object Enhacement

const banda =  'Metallica';
const genero = 'Heavy Metal';
const canciones = ['Master Of Puppets', 'Seek & Destroy', 'Enter Sandman'];

//Forma anterior

// const Metallica = {
//     banda: banda, 
//     genero: genero,
//     canciones : canciones
// }

//Nueva Forma

const Metallica = {banda, genero, canciones}
console.log(Metallica)

//Functions en Objects

const persona = {
    nombre: 'Osvaldo',
    edad: '20 años',
    ocupacion: 'Desarrollador web',
    informacionPersona(){
        console.log(`${this.nombre} tiene ${this.edad} y es ${this.ocupacion}`)
    }
}

persona.informacionPersona();


//Object keys

const persona2 = {
    nombre: 'Osvaldo',
    edad: '20 años',
    ocupacion: 'Desarrollador web',
}

console.log(Object.keys(persona2));

