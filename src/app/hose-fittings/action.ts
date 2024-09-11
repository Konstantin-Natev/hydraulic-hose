"use server";
import { IHoseDetails } from "@/interfaces/hoses/hoses";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function addHoseRecord (hoseDetails: IHoseDetails) {
  try {
    const newHose = await prisma.hose.create({ 
      data: { 
        model: hoseDetails.model,
        hose_size: hoseDetails.hose_size,
        DN_diameter: Number(hoseDetails.DN_diameter),
        initial_price: Number(hoseDetails.initial_price),
        market_price: Number(hoseDetails.market_price),
        working_pressure: Number(hoseDetails.working_pressure),
      } 
    });

    revalidatePath("/hoses");
  } catch (err) {
    console.error("Error executing addHoseRecord:", err);
  }
};