import { ContenedorMongo } from "../../managers/ContenedorMongo.js";

class CarritosDaoMongo extends ContenedorMysql{
    constructor(options,tableName){
        super(options,tableName)
    }
}

export {CarritosDaoMongo}