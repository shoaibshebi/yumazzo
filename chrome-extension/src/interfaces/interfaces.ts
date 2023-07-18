export interface IRecipe {
  name: string;
  origin: string;
  description: string;
  difficulty: number;
  protein: string;
  produce: string;
  spice: string;
  cookingOil: string;
  volume: number;
  serves: number;
  authenticity: string;
  stock: string;
}

export interface IOrigin {
  code: string;
  name: string;
  flag: string;
}
