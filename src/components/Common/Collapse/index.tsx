"use client";

import React, { useState } from "react";

import cx from "clsx";

import { ChevronDownIcon } from "../../../../public/svg";

import styles from "./collapse.module.scss";

interface Props {
  title: string;
  content: string | React.ReactNode;
  className?: string;
}

const Collapse: React.FC<Props> = ({ title, content, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => setIsOpen((prev) => !prev);

  return (
    <div className={cx(styles.wrapper, className)}>
      <div className={styles.title} role="presentation" onClick={onClick}>
        {title} <ChevronDownIcon className={cx(styles.chevron, { [styles.isOpen]: isOpen })} />
      </div>
      <div className={cx(styles.content, { [styles.isOpen]: isOpen })}>{content}</div>
    </div>
  );
};
export default Collapse;
