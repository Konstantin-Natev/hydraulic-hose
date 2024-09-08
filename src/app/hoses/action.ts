import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const ass = async () => {
  try {
    await prisma.user.create({ data: { name: "Kosio"} })
  } catch (err) {
    console.error("error executing query:", err);
  } finally {
    prisma.$disconnect();
  }
};