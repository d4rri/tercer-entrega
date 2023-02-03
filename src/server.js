import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import passport from "passport";

import { logger } from "./loggers/logger.js";
import {options} from "./config/databaseConfig.js";
import { cartsRouter } from "./routes/carritos.js";
import { productsRouter } from "./routes/products.js";
import {authRouter} from "./routes/auth.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(session({
    store: MongoStore.create({
        mongoUrl:options.mongoDB.url
    }),
    secret:"claveSecreta",
    resave:false,
    saveUninitialized:false
}));


app.use(passport.initialize());
app.use(passport.session());


app.use("/api/auth", authRouter);
app.use('/api/productos', productsRouter);
app.use('/api/carritos', cartsRouter);


const PORT = 8080;
const server = app.listen(PORT, () => {
    logger.info(`Server listening on port ${PORT}`);
})
server.on('error', error => logger.fatal(`Error in server ${error}`));