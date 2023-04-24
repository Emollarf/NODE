
//setTimeOut(function(){console.log('Hola mundo), 1000})
//setTimeout(() => console.log ('hola'), 1000 );

const getUsuarioByID = (id, callback)=>{

const usuario= [
    {
        id:id,
        nombre: 'Elena'
    },
    {
        id:id,
        nombre: 'Didac'
    },
    {
        id:id,
        nombre: 'Ana'
    },
]

setTimeout(()=>{
    callback(usuario)
},1500)


}

getUsuarioByID(3,(usuario)=>{
    console.log(usuario.id)
    console.log(usuario.nombre)
});

