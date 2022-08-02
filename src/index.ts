import express from "express";
import cors from "cors";
import logger from "morgan";
import dotenv from "dotenv";
import taxRoutes from "./components/tax/tax.routes";

dotenv.config();

const port = process.env.PORT || 9000;
const app = express();

app.use(logger(":method :url :status - :response-time ms - :date"));
app.use(cors());
app.use(express.json());
app.set("port", port);

app.use("/api/tax", taxRoutes);

app.listen(app.get("port"), async () => {
  console.log("🚀 Connection successful on", app.get("port"));
});
