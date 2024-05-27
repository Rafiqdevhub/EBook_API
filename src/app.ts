import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { config } from "./config/config";
import globalErrorHandler from "./middleware/globalErrorHandler";

const app = express();

app.use(express.json());

app.use(
    cors({
        origin: config.frontendDomain,
    })
);

app.get("/", (req, res, next) => {
    res.json({ message: "Welcome to elib apis" });
});


app.use(globalErrorHandler)
export default app;