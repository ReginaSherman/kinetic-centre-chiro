import "./styles/globals.scss";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ["400", "700"], preload: false });

export const metadata = {
  title: "Kinetic Centre USA",
  description: "HELPING YOU STAY ACTIVE AND PAIN FREE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
