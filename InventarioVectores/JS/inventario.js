class Nodo {
    constructor(dato) {
        this.dato = dato;
        this.sig = null;
    }
}

class Inventario {
    constructor() {
        this.primero = null;
    }

    agregar(producto) {
        let anterior = null;
        let actual = this.primero;

        while (actual != null &&
               actual.dato.codigo < producto.codigo) {
            anterior = actual;
            actual = actual.sig;
        }

     
        if (actual != null &&
            actual.dato.codigo === producto.codigo) {
            return false;
        }

        let nuevoNodo = new Nodo(producto);
        nuevoNodo.sig = actual;

        if (anterior == null) {
            this.primero = nuevoNodo;
        } else {
            anterior.sig = nuevoNodo;
        }

        return true;
    }

    agregarInicio(producto) {
        return this.agregar(producto);
    }

    buscar(codigo) {
        let aux = this.primero;
        codigo = Number(codigo);

        while (aux != null) {
            if (aux.dato.codigo === codigo) {
                return aux.dato;
            }

            if (aux.dato.codigo > codigo) {
                break;
            }

            aux = aux.sig;
        }

        return null;
    }

    eliminar(codigo) {
        let anterior = null;
        let actual = this.primero;
        codigo = Number(codigo);

        while (actual != null && actual.dato.codigo < codigo) {
            anterior = actual;
            actual = actual.sig;
        }

        if (actual == null || actual.dato.codigo !== codigo) {
            return false;
        }

        if (anterior == null) {
            this.primero = actual.sig;
        } else {
            anterior.sig = actual.sig;
        }

        return true;
    }
o
    extraerPrimero() {
        if (this.primero == null) {
            return null;
        }

        let producto = this.primero.dato;
        this.primero = this.primero.sig;

        return producto;
    }

    listar() {
        let aux = this.primero;
        let resultado = "";

        while (aux != null) {
            resultado += aux.dato.infoHtml();
            aux = aux.sig;
        }

        if (resultado === "") {
            return "<p>Inventario vacío.</p>";
        }

        return resultado;
    }

    listarInverso() {
        if (this.primero == null) {
            return "<p>Inventario vacío.</p>";
        }

        return this.listarInversoDesde(this.primero);
    }

    listarInversoDesde(nodo) {
        if (nodo == null) {
            return "";
        }

        return this.listarInversoDesde(nodo.sig)
             + nodo.dato.infoHtml();
    }
}