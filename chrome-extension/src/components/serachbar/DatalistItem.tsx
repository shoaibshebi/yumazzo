import { IRecipe } from "../../interfaces/interfaces";
import FlagIcon from "../reusable/FlagIcon";
import { difficulties } from "../../utils/consts";

interface Props {
  recipe: IRecipe;
}

export default function DatalistItem({ recipe }: Props) {
  return (
    <div className="flex justify-between hover:bg-[#181F30] py-2 px-2 cursor-pointer font-jamjuree">
      <div className="flex justify-start items-center gap-2">
        <FlagIcon origin={recipe.origin} />
        <p className="text-white text-base capitalize">{recipe.name}</p>
      </div>
      <div className="flex justify-end items-center gap-2">
        <img src={`/images/difficulty_flag_${recipe.difficulty}.png`} alt="" />
        <p className="text-white font-bold text-sm">
          {difficulties[recipe.difficulty]?.name}
        </p>
        <p className="h-full w-0.5 bg-[#1F2A44]"></p>
        <p className="text-[#AEB5C1] text-sm">50min</p>
      </div>
    </div>
  );
}
