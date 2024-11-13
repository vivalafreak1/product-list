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
    where: { id: req.params.id },
  });
  res.json(product);
});

app.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  const { name, imageUrl, stock, price } = req.body;

  try {
    const updatedProduct = await prisma.product.update({
      where: { id },
      data: { name, imageUrl, stock, price },
    });
    res.json(updatedProduct);
  } catch (error) {
    console.error("Failed to update product:", error);
    res.status(500).json({ message: "Failed to update product" });
  }
});

app.post("/products", async (req, res) => {
  const { name, imageUrl, stock, price } = req.body;

  // Ensure price is a valid number
  if (isNaN(price) || price <= 0) {
    return res.status(400).json({ message: "Invalid price" });
  }

  try {
    const newProduct = await prisma.product.create({
      data: {
        id: String(+new Date()), // Dynamically generate ID
        name,
        imageUrl,
        stock,
        price, // Use the actual price value from the request
      },
    });
    res.json(newProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: "Failed to create product" });
  }
});

app.delete("/products/:id", async (req, res) => {
  await prisma.product.delete({
    where: { id: req.params.id },
  });
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
