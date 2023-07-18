import React from "react";
import { IRecipe } from "../interfaces/interfaces";
import Header from "./Header";
import Description from "./Description";
import Details from "./Details";

interface Props {
  recipe: IRecipe;
}

export default function Recipe({ recipe }: Props) {
  return (
    <>
      <Header recipe={recipe} />
      <Description recipe={recipe} />
      <Details recipe={recipe} />
    </>
  );
}
