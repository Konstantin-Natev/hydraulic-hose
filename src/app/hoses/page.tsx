"use server";
import { Hoses } from "@/app/hoses/Hoses";
import { getAllHoses } from "./data";
import { IHoseDetails } from "@/interfaces/hoses/hoses";

const HosesPage = async () => {
  const hoses = await getAllHoses();

  return (
    <Hoses hoses={hoses as IHoseDetails[]}/>
  );
};

export default HosesPage;
