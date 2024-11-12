const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/products", async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
});

app.get("/products/:id", async (req, res) => {
  const product = await prisma.product.findUnique({
    where: { id: parseInt(req.params.id) },
  });
  res.json(product);
});

app.post("/products", async (req, res) => {
  const { name, imageUrl, stock } = req.body;
  const newProduct = await prisma.product.create({
    data: { name, imageUrl, stock },
  });
  res.json(newProduct);
});

app.delete("/products/:id", async (req, res) => {
  await prisma.product.delete({
    where: { id: parseInt(req.params.id) },
  });
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
