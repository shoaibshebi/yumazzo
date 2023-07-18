import { IRecipe } from "../interfaces/interfaces";
import request from "../utils/api";

export default function useRecipe() {
  const getRecipes = async () => {
    try {
      const { message = [] } = await request("GET", `recipes`);
      return message;
    } catch (error: any) {
      console.log("Error getting recipe", error);
      return [];
    }
  };

  const submitRecipe = async (recipe: IRecipe) => {
    try {
      const res = await request("POST", `recipes`, recipe);
      return res;
    } catch (error) {
      console.log("Error sumbitting recipe", error);
      return error;
    }
  };

  return {
    getRecipes,
    submitRecipe,
  };
}
