import React from "react";

import dynamic from "next/dynamic";

import styles from "./mainPage.module.scss";

const MyInfo = dynamic(() => import("./MyInfo"), {
  ssr: false,
});

const Meals = dynamic(() => import("./Meals"), {
  ssr: false,
});

export default function MainPage() {
  return (
    <main className={styles.wrapper}>
      <MyInfo />
      <Meals />
    </main>
  );
}
