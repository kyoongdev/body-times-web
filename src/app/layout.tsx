import { headers } from "next/headers";

import cx from "clsx";

import Provider from "./provider";

import styles from "./layout.module.scss";

import "@/styles/global.scss";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = headers();
  const headerPathname = headersList.get("x-pathname") || "";

  return (
    <html lang="en">
      <body>
        <Provider>
          <div className={cx(styles.wrapper, { [styles.isHome]: headerPathname === "" })}>{children}</div>
        </Provider>
      </body>
    </html>
  );
}
