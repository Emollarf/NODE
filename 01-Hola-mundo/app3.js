
console.log('inicio de programa'); //1

setTimeout(()=>{
    console.log('Primer TimeOut'); // 5
},3000);

setTimeout(()=>{
    console.log('Segundo TimeOut');//2 -> 3
},0);

setTimeout(()=>{
    console.log('Tercer TimeOut');//3 ->4
},0);

console.log('fin de programa');//4 -> 2