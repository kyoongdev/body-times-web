"use client";

import React from "react";

import { KakaoIcon } from "../../../public/svg";

import styles from "./login.module.scss";

const Login: React.FC = () => {
  const onClick = () => {
    window.open(`${process.env.NEXT_PUBLIC_API_URL}/auth/social/kakao`, "_self");
  };
  return (
    <button className={styles.button} data-social="kakao" type="button" onClick={onClick}>
      <KakaoIcon />
      카카오로 로그인하기
    </button>
  );
};
export default Login;
