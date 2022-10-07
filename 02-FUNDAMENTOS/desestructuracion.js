
const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.poder}`;
    }
}

console.log(deadpool.getNombre())

function imprimeHeroe({ nombre, apellido, poder}) {
    nombre = 'fernando';
    console.log(nombre, apellido, poder);
};

imprimeHeroe(deadpool)

const heroes = ['Deadpool', 'Superman', 'Batman'];

const [ , , h3 ] = heroes;

console.log(h3)