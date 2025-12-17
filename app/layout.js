import { Geist, Geist_Mono, Raleway } from "next/font/google";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200","300", "400", "500","600", "700", "800", "900"]
});

export const metadata = {
  title: "scholar note| A Research hub",
  description: "A Platform whwere ideas are shared",
  title: "ScholarNote | A research hub",
  description: "A platform where ideas are shared",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} antialiased`}
      >
        <Navbar/>
      
      <body className={`${raleway.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
