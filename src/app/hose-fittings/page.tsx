import { HoseFittings } from "@/app/hose-fittings/HoseFittings";
import { getAllHoseFittings } from "./data";
import { IHoseFittingsDetails } from "@/interfaces/hoses/fittings";

const HoseFittingsPage = async () => {
  const fittings = await getAllHoseFittings();

  return (
    <HoseFittings fittings={fittings as IHoseFittingsDetails[]}/>
  );
};

export default HoseFittingsPage;
