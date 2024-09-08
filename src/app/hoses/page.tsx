"use server"
import { Hoses } from "@/ui/Hoses/Hoses";
import { ass } from "./action";

const HosesPage = async () => {
  await ass();
  return (
    <Hoses />
  );
};

export default HosesPage;
