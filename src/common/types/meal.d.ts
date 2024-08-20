import { Food } from "./food";

export interface MealFood {
  id: string;
  food: Food;
  grams: number;
}

export interface Meal {
  id: string;
  foods: MealFood[];
  year: number;
  month: number;
  date: number;
  name: string;
}

export interface UpdateMeal {
  year: number;
  month: number;
  date: number;
  name: string;
}

export interface CreateMealFood {
  foodId: string;
  grams: number;
}

export interface CreateMeal {
  foods: CreateMealFood[];
  year: number;
  month: number;
  date: number;
  name: string;
}

export interface FindMyMealsQuery {
  year: number;
  month: number;
  date: number;
}
