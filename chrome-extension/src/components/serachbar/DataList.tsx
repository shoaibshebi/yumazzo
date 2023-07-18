import React from "react";
import { IRecipe } from "../../interfaces/interfaces";
import DatalistItem from "./DatalistItem";

interface Props {
  recipes: Array<IRecipe>;
  setSelectedRecipes: Function;
}

export default function DataList({ recipes, setSelectedRecipes }: Props) {
  return (
    <div className="absolute bg-[#121826] top-12 w-full rounded-md left-0 p-2 max-h-[300px] overflow-auto drop-shadow-2xl">
      {recipes.map((recipe: IRecipe, key: number) => (
        <div key={key} onClick={() => setSelectedRecipes(recipe)}>
          <DatalistItem recipe={recipe} />
        </div>
      ))}
    </div>
  );
}
