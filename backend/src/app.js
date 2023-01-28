import express from "express";
import dotenv from "dotenv";
import { createServer } from 'http';
import cors from 'cors';
import router from "./routes/index.js";
import mongoDb from "./db/mongoDb.js";

class App {
    app;

    constructor() {
        dotenv.config();
        this.init();
    }

    async init() {
        this.app = express();

        global.mongoClient = await mongoDb.connect();

        const httpServer = createServer(this.app);

        httpServer.listen(process.env.PORT, function () {
            console.log(`Server Started http://localhost:${process.env.PORT}`);
        });

        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
        this.app.use(cors());

        this.app.use(router());
    }
}

new App();
