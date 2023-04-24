
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

const id = 3; 

const getEmpleado = (id,callback)=>{
    const empleado = empleados.find((e)=>{
        return e.id === id
    })?.usuario //lo mismo que empleado.usuario abajo. La interrogación comprueba si existe.

    if(empleado){
        callback(null, empleado);//empelado.usuario

    }else {
        callback(`error el empleado ${id} no existe`);
    }    
}
const getSalario = (id, callback) => {
    const salario = salarios.find((s)=>{
        return s.id === id 
    })?.salario;
    if (salario){
        callback(null, salario);
    }else{
        callback(`Error el salario con ID ${id} no existe`);
    }
}  


getEmpleado (id ,(err, empleado) => {
    if (err){
        console.log(`error el empleado no existe`);
        return console.log(err);
    };
    
    getSalario(id, (err, salario) => {
        if(err){
            console.log (`El salario no existe con ID ${id}`);
            return console.log(err);
        }
       /*  console.log('Empleado existe'); */
        console.log('El empleado:', empleado, 'tiene un salario de :', salario);
    })
} );


