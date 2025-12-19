import { Geist, Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900",],
})

export const metadata = {
  title: "Scholarnote  A Research Hub",
  description: "A Platform where ideas are shared",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${Raleway.className} antialiased`}
      >
        <Navbar/>
        <Footer/>
        {children}
      </body>
    </html>
  );
}
