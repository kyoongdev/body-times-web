import Login from "./Login";

import styles from "./home.module.scss";

export default function HomeContainer() {
  return (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>Body Times</h1>
      <Login />
    </main>
  );
}
