import express from "express";
import cors from "cors";


const app = express();

// basic configurations 

app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));
 
app.use(cors({
  origin: process.env.CORS_ORIGIN?.split(",") || "https://localhost:5173",
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], 
  allowedHeaders: ['Content-Type', 'Authorization'], 
}))

// import the routes

import healthCheckRouter from "./routes/healthcheck.routes.js";

app.use('/api/v1/healthcheck', healthCheckRouter);

app.get('/', (req, res) => {
  res.send('Hello Nikhil!')
})


export default app;