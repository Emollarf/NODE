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

const getInfoUsuario = async()=>{
    
    try {
        const empleado = await getEmpleado (id);
        const salario = await getSalario (id);
    
        return `El salario de ${empleado} es ${salario}`
    }
    catch (error){
        throw error; // llama el catch 
    }
    
} 


const id = 3;

getInfoUsuario()
    .then (msg => console.log(msg))
    .catch(error => console.log(error))
