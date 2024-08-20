import { Meal } from "@/common/types/meal";

export const getMealCalorie = (meal: Meal) => {
  return meal.foods.reduce((acc, food) => {
    return acc + food.food.calorie * (food.grams / 100);
  }, 0);
};
