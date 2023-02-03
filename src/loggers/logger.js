import log4js from "log4js";

log4js.configure({

    appenders:{
        consola:{type:"console"},
        errorFile:{type:"file",filename:"./src/logs/errores.log"},
        consolaDebug:{type:'logLevelFilter',appender:'consola', level:'debug'},
        consolaErrores:{type:'logLevelFilter',appender:'consola', level:'error'},
        archivoErrores:{type:'logLevelFilter', appender:'errorFile', level:'error'}
    },
    categories:{
        default:{appenders:['consolaDebug','archivoErrores'],level:'all'},
    }
});

export const logger = log4js.getLogger();