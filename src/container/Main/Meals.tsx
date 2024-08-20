import React from "react";

import { useQuery } from "@tanstack/react-query";

import { getMealsApi } from "@/services/meal";
import { getToday } from "@/utils/date";

import styles from "./meals.module.scss";

const Meals: React.FC = () => {
  const { year, month, date } = getToday();

  const { data } = useQuery({
    queryKey: ["getMeals", year, month, date],
    queryFn: () => getMealsApi({ year, month, date }),
  });

  return (
    <section className={styles.wrapper}>
      <h2>금일 식사</h2>
      <ul className={styles.wrapper}>
        <li></li>
      </ul>
    </section>
  );
};
export default Meals;
