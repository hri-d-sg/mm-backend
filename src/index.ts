import express from "express";
import cors from "cors";
import dbConnect from "./config/dbConnect";
import user from "./routes/user";
import category from "./routes/category";
import product from "./routes/product";
import order from "./routes/order";
import stripe from "./routes/stripe";
import payment from "./routes/payment";

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use("/api/v1", user);
app.use("/api/v1", category);
app.use("/api/v1", product);
app.use("/api/v1", order);
app.use("/api/v1", payment);

app.use("/api/v1", stripe);

dbConnect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Database connected and listing on port ${port}`);
    });
  })
  .catch((err) => {
    console.log((err as Error).message);
  });
