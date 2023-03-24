import express from 'express';
import bookingsRoutes from "./routes/bookings.routes.js";

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Reservas-Prueba');
  });

app.use("/api", bookingsRoutes);
export default app;