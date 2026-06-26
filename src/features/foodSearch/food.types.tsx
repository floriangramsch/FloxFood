export type SearchResultFood = {
  fdcId: number;
  description: string;
  foodNutrients: Array<Nutrient>;
};

export type Nutrient = {
  nutrientId: number;
  nutrientName: string;
  nutrientNumber: number;
  unitName: string;
  value: number;
  rank: number;
  indentLevel: number;
  foodNutrientId: number;
};
