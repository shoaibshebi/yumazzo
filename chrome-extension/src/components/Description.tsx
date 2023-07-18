import React from "react";
import { IRecipe } from "../interfaces/interfaces";
import { difficulties } from "../utils/consts";

interface Props {
  recipe: IRecipe;
}

export default function Description({ recipe }: Props) {
  return (
    <div className="bg-[#131823] p-2 rounded-md">
      <div className="bg-[#17CFC4] py-4 px-5 rounded-md">
        <div className="flex justify-start items-center gap-3">
          <img src="/images/difficult.png" alt="Difficult" />
          <p className="text-[#1E202C] font-bold text-lg">
            Difficulty: {difficulties[recipe?.difficulty]?.["name"] || "Easy"}
          </p>
        </div>
        <p className="text-[#0D1119] leading-5 text-base mt-4">
          {recipe?.description}
        </p>
      </div>
    </div>
  );
}
