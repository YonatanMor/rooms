import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function seed() {
  // eslint-disable-next-line no-console
  console.log(`Database has been seeded. 🌱`)
}

seed()
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
