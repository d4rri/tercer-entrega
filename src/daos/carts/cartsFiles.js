import { ContenedorArchivo } from "../../managers/ContenedorArchivo.js";

class CartsDaoArchivos extends ContenedorArchivo{
    constructor(filename){
        super(filename);
    }
}

export {CartsDaoArchivos}