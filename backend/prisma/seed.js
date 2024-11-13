const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const sampleProducts = Array.from({ length: 30 }, (_, i) => ({
    id: `product-${Date.now()}-${i}`,
    name: `Sample Product ${i + 1}`,
    imageUrl: "https://via.placeholder.com/150",
    stock: Math.floor(Math.random() * 100) + 1, // Random stock between 1 and 100
    price: parseFloat(Math.random() * 1000000),
  }));

  await prisma.product.createMany({
    data: sampleProducts,
  });

  console.log("Seeding complete: 30 products added");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
