import express, { Router } from "express";

const app = express();
export const router = Router();

// ✅ Good (Always version your APIs)
app.use("/api/v1", router);

export default app;
