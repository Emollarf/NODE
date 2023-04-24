

const empleados = [
    {
        id:1,
        usuario:'Elena'
    },

    {
        id:2,
        usuario: 'Fernando'
    },

    {
        id:3,
        usuario: 'Didac'
    }

];

const salarios = [
    {
        id:1,
        salario:1500
    },

    {
        id:2,
        salario: 2500
    }

];


const getEmpleado = (id)=>{
    
    return new Promise((resolve, reject) => {
        const empleado = empleados.find((e)=> e.id === id)?.usuario; //lo mismo que empleado.usuario abajo. La interrogación comprueba si existe.
        (empleado)
            ? resolve(empleado)
            :reject (`No existe el empleado con id ${id}`);
        
    });
}

const getSalario = (id) => {
    return new Promise ((resolve, reject)=> {
        const salario = salarios.find((s)=> s.id === id)?.salario;
        (salario)
        ? resolve(salario)
        : reject(`No existe el salario con id ${id}`)
    });
}

const id = 3; 
/* getEmpleado(id)
    .then(empleado => console.log(empleado))
    .catch(err => console.log(err))

getSalario(id)
    .then (salario => console.log(salario))
    .catch(err=> console.log(err)) */

getEmpleado(id)
    .then(empleado => {
        getSalario(id)
        .then(salario => {
            console.log('El empleado:', empleado, 'tiene un salario: ' , salario);
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))