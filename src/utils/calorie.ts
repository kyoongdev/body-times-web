import { Meal } from "@/common/types/meal";

export const getMealCalorie = (meal: Meal) => {
  return meal.food.calorie * (meal.grams / 100);
};
