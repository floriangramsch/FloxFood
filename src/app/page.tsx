"use client";

import { FloxButton } from "@floriangramsch/react-lib";
import { useTest } from "./api/test/use-test";
import { usePostTest } from "./api/foods/use-post-test";
import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Grid,
  Stack,
} from "@mui/material";
import { FoodNutrients } from "@/features/foodSearch/food-nutrients";
import { SearchResultFood } from "@/features/foodSearch/food.types";

export default function Home() {
  const [searchee, setSearchee] = useState("Kiwi");
  const [foods, setFoods] = useState<Array<SearchResultFood> | undefined>(
    undefined,
  );
  const { data: test } = useTest();

  const mut = usePostTest();

  const searchFood = () => {
    mut.mutate(searchee, {
      onSuccess: (data) => {
        console.log(data);
        setFoods(data["foods"]);
      },
    });
  };

  return (
    <div>
      <input onChange={(e) => setSearchee(e.target.value)} />
      <FloxButton onClick={searchFood}>Search Food</FloxButton>
      <Grid container spacing={2}>
        {foods &&
          foods.map((food) => {
            return (
              <Grid size={4}>
                <Card
                  sx={{
                    backgroundColor: "#1e1e1e",
                    border: "1px solid #2a2a2a",
                    boxShadow: "none",
                    borderRadius: 2,
                    maxHeight: "400px",
                    overflowY: "auto",
                    padding: "2px",
                  }}
                >
                  <CardHeader title={food.description} />
                  <CardContent>
                    <FoodNutrients nutrients={food.foodNutrients} />
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
}
