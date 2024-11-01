import "./globals.css";
import { DM_Sans, Josefin_Sans, PT_Serif, Playfair_Display } from 'next/font/google';

export const metadata = {
  title: "Kalven IT Groups",
  description: "",
};

const Josef = Josefin_Sans({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap"
})

const Playfair = PT_Serif({
  subsets: ['latin'],
  weight: ["400", "700"],
  display: "swap"
})

const DMsans = DM_Sans({
  subsets: ['latin'],
  weight: ["400", "700"],
  display: "swap"
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </head>
      <body className={DMsans.className}>{children}</body>
    </html>
  );
}
