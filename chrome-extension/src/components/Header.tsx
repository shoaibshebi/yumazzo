import { Link } from "react-router-dom";

import { IRecipe } from "../interfaces/interfaces";
import FlagIcon from "./reusable/FlagIcon";
import SocialLink from "./reusable/SocialLink";

interface Props {
  recipe: IRecipe;
}

export default function Header({ recipe }: Props) {
  return (
    <div className="flex justify-between items-center py-4">
      <div className="flex justify-start items-center gap-2">
        <FlagIcon origin={recipe?.origin} />
        <p className="text-white font-medium">{recipe?.name}</p>
      </div>
      <div className="flex justify-end items-center gap-1">
        {Array(3)
          .fill(0)
          .map((x, index) => {
            return (
              <SocialLink
                key={index}
                icon={`/images/link${index + 1}.svg`}
                alt=""
              />
            );
          })}
        <Link to="/recipe/add">
          <p className="bg-[#171F2F] text-white text-sm h-6 flex items-center px-3 rounded-sm">
            + Add Recipe
          </p>
        </Link>
      </div>
    </div>
  );
}
