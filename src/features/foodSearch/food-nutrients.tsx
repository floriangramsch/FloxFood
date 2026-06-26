import { Box, Stack, Typography } from "@mui/material";
import { Nutrient } from "./food.types";
import { useMemo } from "react";
import { NutrientSection } from "./food-nutrients-section";

const MACROS = new Set([
  "Energy",
  "Protein",
  "Carbohydrate, by difference",
  "Total lipid (fat)",
  "Fiber, total dietary",
  "Sugars, total including NLEA",
]);

const MINERALS = new Set([
  "Calcium, Ca",
  "Iron, Fe",
  "Magnesium, Mg",
  "Phosphorus, P",
  "Potassium, K",
  "Sodium, Na",
  "Zinc, Zn",
]);

const VITAMINS = new Set([
  "Vitamin A, RAE",
  "Vitamin C, total ascorbic acid",
  "Vitamin D (D2 + D3)",
  "Vitamin E (alpha-tocopherol)",
  "Vitamin K (phylloquinone)",
  "Thiamin",
  "Riboflavin",
  "Niacin",
  "Vitamin B-6",
  "Folate, total",
]);

type FoodNutrientsProps = {
  nutrients: Array<Nutrient>;
};

export const FoodNutrients = ({ nutrients }: FoodNutrientsProps) => {
  const sortDesc = (a: Nutrient, b: Nutrient) =>
    (b.value ?? 0) - (a.value ?? 0);

  const grouped = useMemo(() => {
    const macros: Nutrient[] = [];
    const minerals: Nutrient[] = [];
    const vitamins: Nutrient[] = [];

    for (const n of nutrients) {
      if (!n.value || n.value <= 0) continue;

      if (MACROS.has(n.nutrientName)) macros.push(n);
      else if (MINERALS.has(n.nutrientName)) minerals.push(n);
      else if (VITAMINS.has(n.nutrientName)) vitamins.push(n);
    }

    return {
      macros,
      minerals: minerals.sort(sortDesc),
      vitamins: vitamins.sort(sortDesc),
    };
  }, [nutrients]);

  return (
    <Box sx={{ mt: 1 }}>
      <NutrientSection title="Macros" items={grouped.macros} />
      <NutrientSection title="Minerals" items={grouped.minerals} />
      <NutrientSection title="Vitamins" items={grouped.vitamins} />
    </Box>
  );
};
