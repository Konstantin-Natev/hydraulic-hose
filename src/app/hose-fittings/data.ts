import { prisma } from "@/lib/prisma";

export const getAllHoseFittings = async () => {
    try {
        return await prisma.fittings.findMany();
    } catch (err) {
       console.error("Error executing getAllHoseFittings:", err);
    }
}