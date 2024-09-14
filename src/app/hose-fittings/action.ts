"use server";
import { IHoseFittingsDetails } from "@/interfaces/hoses/fittings";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function addHoseFittingsRecord (hoseFittingsDetails: IHoseFittingsDetails) {
  try {
    const data = {
      fittings_for_model_hose: hoseFittingsDetails.fittings_for_model_hose,
      fittings_size: hoseFittingsDetails.fittings_size!,
      DN_diameter: Number(hoseFittingsDetails.DN_diameter),
      initial_price: Number(hoseFittingsDetails.initial_price),
      market_price: Number(hoseFittingsDetails.market_price),
      count_of_fittings: Number(hoseFittingsDetails.count_of_fittings),
    }

    const existingHose = await prisma.hose.findFirst({
      where: {
        hose_size: hoseFittingsDetails.fittings_size
      }
    });

    const newFitting = await prisma.fittings.create({ 
      data
    });

    if (existingHose) {
      await prisma.hose.update({
        where: {
          id: existingHose.id
        },
        data: {
          fittings: {
            connect: newFitting
          }
        }
      })
    }

    revalidatePath("/hose-fittings");
  } catch (err) {
    console.error("Error executing addHoseRecord:", err);
  }
};