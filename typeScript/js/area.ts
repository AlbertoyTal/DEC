function area(shape: string, width: number, height: number){
    var total = width*height;
    return "Soy un "+shape+" con un area de "+total+" cm cuadrados";
}

document.body.innerHTML = area("rectangulo",30,30);