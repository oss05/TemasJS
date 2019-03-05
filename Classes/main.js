//Escribir classes

class Tarea {
    constructor(nombre , prioridad){
        this.nombre = nombre;
        this.prioridad = prioridad;
    } 
    mostrar(){
        return `La tarea ${this.nombre} tiene una urgencia ${this.prioridad}`
    }
}

//heredar una clase 

class ComprasPendientes extends Tarea{
    constructor(nombre , prioridad, cantidad){
        super(nombre, prioridad)
        this.cantidad = cantidad;
    }
    mostrar(){
        return `Debo comprar ${this.nombre} tiene una urgencia ${this.prioridad} y deben ser ${this.cantidad}`
    }
}

//Crear objeto 

let tarea1 = new Tarea('Aprender JavaScript', 'Alta');
let tarea2 = new Tarea('Aprender React', 'Media');
let tarea3 = new Tarea('Aprender Typescript', 'Baja');

console.log(tarea1.mostrar());
console.log(tarea2.mostrar());
console.log(tarea3.mostrar());

let compra1 = new ComprasPendientes('jamón', 'baja', 3);

console.log(compra1.mostrar())