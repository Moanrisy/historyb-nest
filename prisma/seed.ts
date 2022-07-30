import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const building1 = await prisma.building.create({
    data: {
      title: 'Candi borobudur',
      description:
        "We are excited to share that today's Prisma ORM release adds stable support for MongoDB!",
    },
  });

  const building2 = await prisma.building.create({
    data: {
      title: 'Candi prambanan',
      description:
        "We are excited to share that today's Prisma ORM release adds stable support for MongoDB!",
    },
  });

  console.log({ building1, building2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
