import localFont from "next/font/local";

export const suit = localFont({
  src: [
    {
      path: "../styles/fonts/NotoSansKR-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../styles/fonts/NotoSansKR-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../styles/fonts/NotoSansKR-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../styles/fonts/NotoSansKR-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../styles/fonts/NotoSansKR-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../styles/fonts/NotoSansKR-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../styles/fonts/NotoSansKR-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-suit",
});
