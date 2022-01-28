let booleano: boolean = true;
let numero: number = 34;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o745;
let nombre: string = "Pepito";
let apellidos: string = 'Pérez';
let direccion: string = `Calle del Pez`;

let fullName: string = "Bob Bobbington";
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }. I'll be ${ age + 1} years old next month.`;
let sentence2: string = "Hello, my name is "+ fullName +". I'll be "+  (age + 1)+ " years old next month.";

let cadena: string;

let list: number[] = [1, 2, 3];
let list2: Array<string> = ["uno", "dos", "3"];

// Enumeraciones
 enum Animals {cat, lion, dog, cow, monkey};
 let c: Animals = Animals.cat;


var foo = 123;
if(true){
    var foo = 456;
    console.log("Foo1 dentro de if = "+foo);
}
console.log(foo);
// ==========
let foo2 = 123;
if(true){
    let foo2 = 456;
    console.log("Foo2 dentro de if = "+foo2);
}
console.log(foo2);

let mivar: string | number = "Cadena";
mivar = 34;

type miTipo = string | number;
let otraVar: miTipo = "Cadena";



cadena = "Booleano = "+booleano+"<br/>Numero = "+numero;
cadena += "<br/>Nombre ("+nombre+"), Apellidos ("+apellidos+")<br/>"
cadena += "Direccion ("+direccion+")<br/>";
cadena += "Sentencia = "+sentence + "<br/>Sentencia2 = "+sentence2+"<br/>";
cadena += "Array1 = "+list;
cadena += "<br/>Array2 = "+list2;
cadena += "<br/>c = "+c;
cadena += "<br/> Animals[3] = "+  Animals[3];
cadena += "<br/> Animals.monkey = "+ Animals.monkey;    

document.body.innerHTML = cadena;   