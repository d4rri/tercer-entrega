
import { options } from "../config/databaseConfig.js";

import knex from "knex";

const databaseSqliteDb = knex(options.sqliteDB);

const createTables = async()=>{
    try {        
        const tableProductsExists = await databaseSqliteDb.schema.hasTable("productos");
        if(tableProductsExists){
            await databaseSqliteDb.schema.dropTable("productos");
        }        
        await databaseSqliteDb.schema.createTable("productos",table=>{
            table.increments("id");
            table.string("title",40).nullable(false);
            table.integer("price").nullable(false);
            table.string("thumbnail",200).nullable(false);
        });
        console.log("productos table created");

        const tableCartExists = await databaseSqliteDb.schema.hasTable("carritos");
        if(tableCartExists){
            await databaseSqliteDb.schema.dropTable("carritos");
        }
        await databaseSqliteDb.schema.createTable("carritos",table=>{
            table.increments("id");
            table.string("timestamp").nullable(false);
            table.string("products").nullable(false);
        });
        console.log("carritos table created");
    } catch (error) {
        console.log("hubo un error" + error);
    }
    databaseSqliteDb.destroy();
}

createTables();