import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import { Nutrient } from "./food.types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const DAILY_VALUES: Record<string, number> = {
  Energy: 2000, // kcal
  Protein: 50, // g
  "Carbohydrate, by difference": 275, // g
  "Total lipid (fat)": 78, // g
  "Fiber, total dietary": 28, // g

  "Calcium, Ca": 1000, // mg
  "Iron, Fe": 18,
  "Magnesium, Mg": 400,
  "Potassium, K": 3500,
  "Sodium, Na": 2300,

  "Vitamin C, total ascorbic acid": 90, // mg
  "Vitamin A, RAE": 900, // µg
  "Vitamin E (alpha-tocopherol)": 15,
  "Vitamin K (phylloquinone)": 120,
};

const getPercent = (nutrient: Nutrient) => {
  const dv = DAILY_VALUES[nutrient.nutrientName];
  if (!dv || !nutrient.value) return null;

  return Math.round((nutrient.value / dv) * 100);
};

export const NutrientSection = ({
  title,
  items,
}: {
  title: string;
  items: Nutrient[];
}) => {
  return (
    <Accordion
      disableGutters
      sx={{
        backgroundColor: "#1e1e1e",
        color: "#ddd",
        border: "1px solid #2a2a2a",
        boxShadow: "none",
        "&:before": { display: "none" },
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#aaa" }} />}>
        <Typography sx={{ fontSize: 14 }}>{title}</Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Stack spacing={0.5}>
          {items.map((n) => (
            <Box
              key={n.nutrientId}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 13,
                color: "#ccc",
              }}
            >
              <span>{n.nutrientName}</span>

              <span style={{ display: "flex", gap: 8, alignItems: "center" }}>
                {n.value} {n.unitName}
                {(() => {
                  const p = getPercent(n);
                  return p !== null ? (
                    <span style={{ color: "#888", fontSize: 12 }}>{p}%</span>
                  ) : null;
                })()}
              </span>
            </Box>
          ))}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};
