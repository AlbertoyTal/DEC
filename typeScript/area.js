function area(shape, width, height) {
    var total = width * height;
    return "Soy un " + shape + " con un area de " + total + " cm cuadrados";
}
document.body.innerHTML = area("rectangulo", 30, 30);
