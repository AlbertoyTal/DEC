var booleano = true;
var numero = 34;
var hex = 0xf00d;
var binary = 10;
var octal = 485;
var nombre = "Pepito";
var apellidos = 'Pérez';
var direccion = "Calle del Pez";
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is ".concat(fullName, ". I'll be ").concat(age + 1, " years old next month.");
var sentence2 = "Hello, my name is " + fullName + ". I'll be " + (age + 1) + " years old next month.";
var cadena;
var list = [1, 2, 3];
var list2 = ["uno", "dos", "3"];
// Enumeraciones
var Animals;
(function (Animals) {
    Animals[Animals["cat"] = 0] = "cat";
    Animals[Animals["lion"] = 1] = "lion";
    Animals[Animals["dog"] = 2] = "dog";
    Animals[Animals["cow"] = 3] = "cow";
    Animals[Animals["monkey"] = 4] = "monkey";
})(Animals || (Animals = {}));
;
var c = Animals.cat;
var foo = 123;
if (true) {
    var foo = 456;
    console.log("Foo1 dentro de if = " + foo);
}
console.log(foo);
// ==========
var foo2 = 123;
if (true) {
    var foo2_1 = 456;
    console.log("Foo2 dentro de if = " + foo2_1);
}
console.log(foo2);
cadena = "Booleano = " + booleano + "<br/>Numero = " + numero;
cadena += "<br/>Nombre (" + nombre + "), Apellidos (" + apellidos + ")<br/>";
cadena += "Direccion (" + direccion + ")<br/>";
cadena += "Sentencia = " + sentence + "<br/>Sentencia2 = " + sentence2 + "<br/>";
cadena += "Array1 = " + list;
cadena += "<br/>Array2 = " + list2;
cadena += "<br/>c = " + c;
cadena += "<br/> Animals[3] = " + Animals[3];
cadena += "<br/> Animals.monkey = " + Animals.monkey;
document.body.innerHTML = cadena;
