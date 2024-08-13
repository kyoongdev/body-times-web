import React from "react";

import cx from "clsx";

import styles from "./spinner.module.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Spinner: React.FC<Props> = ({ className, ...props }) => {
  return <div className={cx(styles.spinner, className)} {...props}></div>;
};

export default Spinner;
