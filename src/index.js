import express from "express";
import productRoutes from "./routes/products.routes.js";
import categoryRoutes from "./routes/categories.routes.js";

const app = express();

app.use(express.json());

app.use("/api", productRoutes);
app.use("/api", categoryRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
