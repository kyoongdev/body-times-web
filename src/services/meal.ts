import { FindMyMealsQuery, Meal } from "@/common/types/meal";

import { apiClient } from "./apiClient";

export const getMealsApi = (params: FindMyMealsQuery) =>
  apiClient
    .get<Meal[]>("meals", {
      params,
    })
    .then((res) => res.data);
