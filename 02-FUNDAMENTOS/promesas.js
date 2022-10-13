
const empleados = [
    {
        id: 1,
        nombre: 'Felipe'
    },
    {
        id: 2,
        nombre: 'Cristian'
    },
    {
        id: 3,
        nombre: 'Amy'
    },
];

const salarios = [
    {
        id: 1,
        salario: 100000
    },
    {
        id: 2,
        salario: 100000
    }
];

const getEmpleado = ( id ) => {
    return new Promise(( resolve, reject ) => {
        const empleado = empleados.find( e => e.id === id);
        ( empleado )
            ? resolve( empleado )
            : reject( `Empleado con id ${id} no registrado` );
    })
};

const getSalario = ( id ) => {
    return new Promise(( resolve, reject ) => {
        const salario = salarios.find( e => e.id === id);
        ( salario )
            ? resolve( salario )
            : reject( `No hay salario asociado al id ${id}` );
    })
};

const id = 4;

/* getEmpleado(id)
    .then( empleado => console.log( empleado ) )
    .catch( err => console.log( err ) );

getSalario(id)
    .then( salario => console.log( salario ) )
    .catch( err => console.log( err ) ); */

getEmpleado( id )
    .then( empleado => {

        getSalario( id )
         .then( salario => {

            console.log( `El empleado ${empleado.nombre} tiene un salario de ${salario.salario}`)

         })

    })
    .catch( err => console.log( err ) )

