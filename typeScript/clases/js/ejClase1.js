function calcular(num1, num2, operacion) {
    var texto = "";
    var n1 = parseInt(num1);
    var n2 = parseInt(num2);
    var numeros = new Calculo(n1, n2);
    var solucion = operacion == 's' ? numeros.sumar() : numeros.restar();
    var op = operacion == 's' ? "suma" : "resta";
    var aux = operacion == 's' ? "mas" : "menos";
    texto = "El resultado de la " + op + " de primer numero = " + n1 + " " + aux + " segundo numero = " + n2 + " es igual a: " + solucion;
    document.getElementById("resultado").innerHTML = texto;
}
