import "./styles/globals.scss";
import { Roboto } from "next/font/google";
import Script from "next/script";

const roboto = Roboto({ weight: ["400", "700"], preload: false });

export const metadata = {
  title: "Kinetic Centre USA",
  description: "HELPING YOU STAY ACTIVE AND PAIN FREE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=DC-15267995"
          strategy="beforeInteractive"
        />
        <Script id="google-analytics" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'DC-15267995');
          `}
        </Script>
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
