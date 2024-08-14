import React from "react";

import styles from "./loginedHeader.module.scss";

const LoginedHeader: React.FC = () => {
  return (
    <header className={styles.wrapper}>
      <h1>BT</h1>
    </header>
  );
};
export default LoginedHeader;
