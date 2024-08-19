import { Food } from "./food";

export interface Meal {
  id: string;
  food: Food;
  year: number;
  month: number;
  date: number;
  grams: number;
}

export interface UpdateMeal {
  year: number;
  month: number;
  date: number;
  grams: number;
}

export interface CreateMeal {
  foodId: string;
  year: number;
  month: number;
  date: number;
  grams: number;
}

export interface FindMyMealsQuery {
  year: number;
  month: number;
  date: number;
}
