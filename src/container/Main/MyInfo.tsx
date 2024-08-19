"use client";

import React from "react";

import { useQuery } from "@tanstack/react-query";

import Collapse from "@/components/Common/Collapse";
import useMe from "@/hooks/useMe";
import { getMealsApi } from "@/services/meal";
import { getMealCalorie } from "@/utils/calorie";
import { getToday } from "@/utils/date";
import { getDecreaseWeight, getIncreaseWeight } from "@/utils/weight";

import styles from "./myInfo.module.scss";

const MyInfo: React.FC = () => {
  const { me } = useMe();
  const { year, month, date } = getToday();

  const { data } = useQuery({
    queryKey: ["getMeals", year, month, date],
    queryFn: () => getMealsApi({ year, month, date }),
  });

  const decreaseCalorie = getDecreaseWeight(me?.activityCalorie ?? 0, me?.weight ?? 0);
  const increaseCalorie = getIncreaseWeight(me?.activityCalorie ?? 0, me?.weight ?? 0);

  return (
    <section className={styles.wrapper}>
      <div className={styles.calories}>
        <h2>유지 칼로리</h2>
        <p>{(me?.maintainCalorie ?? 0).toLocaleString()} Kcal</p>
      </div>
      <div className={styles.calories}>
        <h2>활동 칼로리</h2>
        <p>{(me?.activityCalorie ?? 0).toLocaleString()} Kcal</p>
      </div>

      <Collapse
        title="체중 증가"
        className={styles.moreInfo}
        content={
          <ul className={styles.contents}>
            <li>
              <p>탄수화물</p>
              <p>{increaseCalorie.carbo}g</p>
            </li>
            <li>
              <p>단백질</p>
              <p>{increaseCalorie.protein}g</p>
            </li>
            <li>
              <p>지방</p>
              <p>{increaseCalorie.fat}g</p>
            </li>
            <li>
              <p>잔여 칼로리</p>
              <p>
                {increaseCalorie.increaseCalorie - (data?.reduce((acc, meal) => (acc += getMealCalorie(meal)), 0) ?? 0)}
              </p>
            </li>
          </ul>
        }
      />
      <Collapse
        title="체중 감소"
        className={styles.moreInfo}
        content={
          <ul className={styles.contents}>
            <li>
              <p>탄수화물</p>
              <p>{decreaseCalorie.carbo}g</p>
            </li>
            <li>
              <p>단백질</p>
              <p>{decreaseCalorie.protein}g</p>
            </li>
            <li>
              <p>지방</p>
              <p>{decreaseCalorie.fat}g</p>
            </li>
            <li>
              <p>잔여 칼로리</p>
              <p>
                {decreaseCalorie.decreaseCalorie - (data?.reduce((acc, meal) => (acc += getMealCalorie(meal)), 0) ?? 0)}
              </p>
            </li>
          </ul>
        }
      />
    </section>
  );
};
export default MyInfo;
