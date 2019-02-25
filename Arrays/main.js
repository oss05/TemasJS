//Unir dos arrays con spread operator
//además crea una copia del array

let lenguajes = ['Javascript', 'PHP', 'Python'];
let frameworks = ['React', 'Laravel', 'Django'];

let combinacion = [...lenguajes, ...frameworks];

console.log(combinacion);

//.map objects

carrito = ['Producto1', 'Producto2', 'Producto3'];

let mostrarCarrito = carrito.map (producto => {
    return `El producto es ${producto}`
})

console.log(mostrarCarrito)

//.filter .find .reduce

const personas = [
    {nombre: 'Luis', edad:20 , aprendiendo: 'JS'},
    {nombre: 'Osvaldo', edad:21 , aprendiendo: 'React'},
    {nombre: 'Pepe', edad:15 , aprendiendo: 'Pyhton'},
    {nombre: 'Osvo', edad:30 , aprendiendo: 'C++'}
]

//mayores de 20 años

const mayores = personas.filter( persona => {
    return persona.edad >= 20
})

console.log(mayores);

//Que aprende osvo 

const osvo = personas.find (persona => {
    return persona.nombre === 'Osvo'
})

console.log(`Osvo está aprendiendo ${osvo.aprendiendo}`);

let total = personas.reduce((edadTotal, persona) => {
    return edadTotal + persona.edad;
}, 0);

console.log(total/personas.length);