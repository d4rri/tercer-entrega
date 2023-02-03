import { ContenedorArchivo } from "../../managers/ContenedorArchivo.js";

class ProductsDaoArchivos extends ContenedorArchivo{
    constructor(filename){
        super(filename);
    }
}

export {ProductsDaoArchivos}