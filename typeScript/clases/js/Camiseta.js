var Camiseta = /** @class */ (function () {
    function Camiseta(color, modelo, marca, talla, precio) {
        // this.setColor(color);
        this.color = color;
        // this.setModelo(modelo);
        this.modelo = modelo;
        // this.setMarca(marca);
        this.marca = marca;
        // this.setTalla(talla);
        this.talla = talla;
        // this.setPrecio(precio);
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Camiseta.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Camiseta.prototype.setTalla = function (talla) {
        this.talla = talla;
    };
    Camiseta.prototype.setPrecio = function (precio) {
        this.precio = precio;
    };
    Camiseta.prototype.getColor = function (color) {
        return this.color;
    };
    Camiseta.prototype.getModelo = function (modelo) {
        return this.modelo;
    };
    Camiseta.prototype.getMarca = function (marca) {
        return this.marca;
    };
    Camiseta.prototype.getTalla = function (talla) {
        return this.talla;
    };
    Camiseta.prototype.getPrecio = function (precio) {
        return this.precio;
    };
    return Camiseta;
}());
