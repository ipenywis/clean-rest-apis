import { Prisma, PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";

const prisma = new PrismaClient();

import app from "./app";
import "./apis/StatusCodes";
import "./apis/HttpMethods";
import "./apis/Optimization";

app.use(express.json());

app.use(cors());

const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`)
);
