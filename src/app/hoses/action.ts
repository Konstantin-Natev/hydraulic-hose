"use server";
import { IHoseDetails } from "@/interfaces/hoses/hoses";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function addHoseRecord (hoseDetails: IHoseDetails) {
  try {
    const data = {
      model: hoseDetails.model,
      hose_size: hoseDetails.hose_size,
      DN_diameter: Number(hoseDetails.DN_diameter),
      initial_price: Number(hoseDetails.initial_price),
      market_price: Number(hoseDetails.market_price),
      working_pressure: Number(hoseDetails.working_pressure)
    }

    const existingFittings = await prisma.fittings.findFirst({
      where: {
        fittings_size: hoseDetails.hose_size
      }
    });

    console.log("fittings", existingFittings);
    
    const newHose = await prisma.hose.create({ 
      data
    });

    if (existingFittings) {
      console.log("here ");
      
      await prisma.fittings.update({
        where: {
          id: existingFittings.id
        },
        data: {
          hose: {
            connect: newHose
          }
        }
      })
    }

    revalidatePath("/hoses");
  } catch (err) {
    console.error("Error executing addHoseRecord:", err);
  }
};