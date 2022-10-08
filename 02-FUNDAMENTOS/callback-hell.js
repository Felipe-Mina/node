
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

const getEmpleado = ( id, callback ) => {
    const empleado = empleados.find( e => e.id === id);
    if( empleado ) {
        callback( null, empleado );
    } else {
        callback( `Empleado con id ${id} no registrado` );
    };
};

const getSalario = ( id, callback ) => {
    const salario = salarios.find( e => e.id === id);
    if ( salario ) {
        callback( null, salario )
    } else {
        callback( `No hay salario asociado al id ${id}` )
    };
};

let id = 2;

getEmpleado( id, ( err, empleado ) => {
    if ( err ) {
        console.log('ERROR!!!');
        return console.log(err);
    };
    console.log('Empleado existente');
    console.log(empleado.nombre);
});

getSalario( id, ( err, salario ) => {
    if ( err ) {
        return console.log( err );
    };
    console.log( salario.salario );
});