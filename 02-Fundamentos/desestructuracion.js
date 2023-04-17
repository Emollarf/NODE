
const deadpool = {
    nombre:'Wade',
    apellido:'Winston',
    poder:'Regeneración',
    //edad: 50, 
    // getNombre: function(){return `${this.nombre} ${this.apellido} ${this.poder}`
    getNombre(){
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

console.log(deadpool.getNombre());

/* const nombre =deadpool.nombre;
const apellido =deadpool.apellido;
const poder = deadpool.poder; */

//desestructuracion

const {nombre, apellido, poder, edad = 0} = deadpool;
console.log(nombre, apellido, poder, edad );


/* function imprimirHeroe (heroe){
    const {nombre, apellido, poder, edad = 0} = heroe;
    console.log(nombre, apellido, poder, edad );

}

imprimirHeroe(deadpool); */

function imprimirHeroe ({nombre, apellido, poder, edad = 0}){
    nombre = 'Fernando'
    console.log(nombre, apellido, poder, edad );

}

imprimirHeroe(deadpool);

const heroes = [
    'Deadpool',
    'Superman',
    'Batman'
];

/* const h1 = heroes[0];
const h2 = heroes[1];
const h3 = heroes[2];
console.log(h1) */

const [h1,h2,h3] = heroes;

const [ , , a3] = heroes; 

console.log(h1,h2,h3);
console.log(a3)