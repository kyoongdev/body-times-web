import {
  DECREASE_WEIGHT_CALORIE,
  DECREASE_WEIGHT_FAT_RATE,
  DECREASE_WEIGHT_PROTEIN_RATE,
  INCREASE_WEIGHT_CALORIE,
  INCREASE_WEIGHT_FAT_RATE,
  INCREASE_WEIGHT_PROTEIN_RATE,
} from "@/common/constants/weight";

export const getDecreaseWeight = (activityCalorie: number, weight: number) => {
  const totalCalorie = activityCalorie + DECREASE_WEIGHT_CALORIE;
  const fatCalorie = (totalCalorie * DECREASE_WEIGHT_FAT_RATE) / 9;
  const fat = fatCalorie / 9;
  const protein = weight * DECREASE_WEIGHT_PROTEIN_RATE;
  const carbo = (totalCalorie - protein * 4 - fatCalorie) / 4;

  return {
    fat,
    protein,
    carbo,
    decreaseCalorie: totalCalorie,
  };
};
export const getIncreaseWeight = (activityCalorie: number, weight: number) => {
  const totalCalorie = activityCalorie + INCREASE_WEIGHT_CALORIE;
  const fatCalorie = (totalCalorie * INCREASE_WEIGHT_FAT_RATE) / 9;
  const fat = fatCalorie / 9;
  const protein = weight * INCREASE_WEIGHT_PROTEIN_RATE;
  const carbo = (totalCalorie - protein * 4 - fatCalorie) / 4;

  return {
    fat,
    protein,
    carbo,
    increaseCalorie: totalCalorie,
  };
};
