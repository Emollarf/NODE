
function sumar (a, b){
    console.log (a+b);
    //return a´+b
}

sumar (10, 5)
// console.log(sumar(10,5));


const sumarArrow = (a, b) => {
    return a + b;
}

// const sumarArrow = (a=20, b ) => a + b; console.log(sumar(5))

console.log(sumarArrow(20,5))
 
/* const saludarArrow = (nombre) => {
    return `${nombre} Hola`;
}
console.log(saludarArrow('Elena'))
 */
 
function saludar () {
    return 'hola'
} 

console.log(saludar())


const saludarArrow = () => `Hola`

console.log(saludarArrow())



