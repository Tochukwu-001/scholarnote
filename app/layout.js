import { Geist, Geist_Mono, Raleway } from "next/font/google";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Scholarnote | A Research Hub",
  description: "A Platform where ideas are shared",}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body
        className={`${raleway.className} antialiased`}
      >
        <Navbar/>
        <page/>
        <Footer />
      </body>
    </html>
  );
}
