function calcular(num1: string, num2: string, operacion: string) :void{
    let texto: string = "";
    let n1: number = parseInt(num1);
    let n2: number = parseInt(num2);
    
    let numeros = new Calculo(n1,n2);
    let solucion:number = operacion == 's'? numeros.sumar() : numeros.restar();
    let op: string = operacion == 's'? "suma" : "resta";
    let aux: string = operacion == 's'? "mas" : "menos";

    texto =  "El resultado de la "+op+" de primer numero = "+n1+" "+aux+" segundo numero = "+n2+" es igual a: "+solucion;
    document.getElementById("resultado").innerHTML = texto;
}