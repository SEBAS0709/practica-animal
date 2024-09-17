class Animal{
constructor (nombre, edad) {
this.nombre = nombre;
this.edad = edad;
}
hacerSonido() {
    console.log("este animal no tiene un sonido especifico.");
}
}

class Perro extends Animal{
    hacerSonido(){
        console.log("GUAO");
    }
}
class Gato extends Animal{
    hacerSonido(){
        console.log("MIUW");
    }
}
class Pajaro extends Animal{
    hacerSonido(){
        console.log("PIO");
    }
}

function crearAnimal (tipo, nombre, edad){
    switch( tipo){
        case 'PERRO':
            return new Perro(nombre,edad);
        case 'GATO':
            return new Gato(nombre, edad);
        case 'PAJARO':
            return new Pajaro (nombre,edad);
    default:
    return "tipo de animal no soportado.";      
    }
}
let MIPERRO = crearAnimal('PERRO', 'BONZO', 5);
MIPERRO.hacerSonido();

let MIGATO = crearAnimal('GATO', 'MILO', 3);
MIGATO.hacerSonido();

let MIPAJARO = crearAnimal('PAJARO', 'PAJAROLOCO', 1);
MIPAJARO.hacerSonido();

let animalinvalido = crearAnimal('pez', 'gonzalo', 2);

