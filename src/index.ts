import express from "express";
import cors from "cors";
import logger from "morgan";
import dotenv from "dotenv";
import taxRoutes from "./components/tax/tax.routes";

dotenv.config();

const port = process.env.PORT || 9000;
const app = express();

app.use(logger(":method :url :status - :response-time ms - :date"));
app.use(cors);
app.use(express.json());
app.set("port", port);

app.use("/api/tax", taxRoutes);

app.listen(app.get("port"), () => {
  console.log("🚀 Connection successful on", app.get("port"));
});

// import { getTax } from "./src/congestionTaxCalculator";
// import { Car } from "./src/classes/car";

// const dates: Date[] = [
//   new Date("2013-01-14 21:00:00"),
//   new Date("2013-01-15 21:00:00"),
//   new Date("2013-02-07 06:23:27"),
//   new Date("2013-02-07 15:27:00"),
//   new Date("2013-02-08 06:27:00"),
//   new Date("2013-02-08 06:20:27"),
//   new Date("2013-02-08 14:35:00"),
//   new Date("2013-02-08 15:29:00"),
//   new Date("2013-02-08 15:47:00"),
//   new Date("2013-02-08 16:01:00"),
//   new Date("2013-02-08 16:48:00"),
//   new Date("2013-02-08 17:49:00"),
//   new Date("2013-02-08 18:29:00"),
//   new Date("2013-02-08 18:35:00"),
//   new Date("2013-03-26 14:25:00"),
//   new Date("2013-03-28 14:07:27"),
// ];

// const vehicle = new Car();

// const totalFee = getTax(vehicle, dates);

// console.log("total fee", totalFee);
