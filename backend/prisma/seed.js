const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.product.create({
    data: {
      name: "Sample Product",
      imageUrl: "https://via.placeholder.com/150",
      stock: 10,
    },
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
