import { prisma } from "@/lib/prisma";

export const getAllHoses = async () => {
    try {
        return await prisma.hose.findMany();
    } catch (err) {
       console.error("Error executing getAllHoses:", err);
    }
}