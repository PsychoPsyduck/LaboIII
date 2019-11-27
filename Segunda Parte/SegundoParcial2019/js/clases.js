"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Anuncio = /** @class */ (function () {
    function Anuncio(id, titulo, descripcion, precio, baños, estacionamiento, dormitorio) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.baños = baños;
        this.estacionamiento = estacionamiento;
        this.dormitorio = dormitorio;
    }
    Object.defineProperty(Anuncio.prototype, "Titulo", {
        // Setters & Getters
        get: function () { return this.titulo; },
        set: function (e) { this.titulo = e; },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Anuncio.prototype, "Descripcion", {
        get: function () { return this.descripcion; },
        set: function (e) { this.descripcion = e; },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Anuncio.prototype, "Precio", {
        get: function () { return this.precio; },
        set: function (e) { this.precio = e; },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Anuncio.prototype, "Ba\u00F1os", {
        get: function () { return this.baños; },
        set: function (e) { this.baños = e; },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Anuncio.prototype, "Estacionamiento", {
        get: function () { return this.estacionamiento; },
        set: function (e) { this.estacionamiento = e; },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Anuncio.prototype, "Dormitorio", {
        get: function () { return this.dormitorio; },
        set: function (e) { this.dormitorio = e; },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Anuncio.prototype, "Id", {
        get: function () { return this.id; },
        set: function (e) { this.id = e; },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    return Anuncio;
}());
var ETransaccion;
(function (ETransaccion) {
    ETransaccion[ETransaccion["Alquiler"] = 0] = "Alquiler";
    ETransaccion[ETransaccion["Venta"] = 1] = "Venta";
})(ETransaccion || (ETransaccion = {}));
/// <reference path="Anuncio.ts" />
var BienRaiz = /** @class */ (function (_super) {
    __extends(BienRaiz, _super);
    function BienRaiz(id, titulo, descripcion, precio, baños, estacionamiento, dormitorio, transaccion) {
        var _this = _super.call(this, id, titulo, descripcion, precio, baños, estacionamiento, dormitorio) || this;
        _this.transaccion = transaccion;
        return _this;
    }
    Object.defineProperty(BienRaiz.prototype, "ETransaccion", {
        get: function () { return this.transaccion; },
        set: function (e) { this.transaccion = e; },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    return BienRaiz;
}(Anuncio));
/// <reference path="BienRaiz.ts" />
var Parser = /** @class */ (function () {
    function Parser() {
        var _this = this;
        this.decode = function (params) {
            params.forEach(function (element) {
                var bienRaiz = new BienRaiz(element.Id, element.Titulo, element.Descripcion, element.Precio, element.Baños, element.Estacionamiento, element.Dormitorio, element.ETransaccion);
                _this.datos.push(bienRaiz);
            });
            return _this.datos;
        };
        this.datos = Array();
    }
    return Parser;
}());
//# sourceMappingURL=clases.js.map