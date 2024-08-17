"use client";

import React from "react";

import Collapse from "@/components/Common/Collapse";
import useMe from "@/hooks/useMe";

import styles from "./myInfo.module.scss";

const MyInfo: React.FC = () => {
  const { me } = useMe();

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
        title="5kg 증가"
        content={
          <>
            <p>ㄴㅇㄹㅇㄴ</p>
            <p>ㄴㅇㄹㅇㄴ</p>
          </>
        }
      />
    </section>
  );
};
export default MyInfo;
