import { Geist, Geist_Mono, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Shared/Header";
import Navbar from "@/Components/Shared/Navbar";




const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700", "600"]
})

export const monserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "700", "600"]
})



export const metadata = {
  title: "Dragon News",
  description: "Best News Portal in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en" 
      data-theme="light"
      className={` h-full antialiased`}
    >
      <body className={` ${poppins.className} min-h-full flex flex-col`}>
        
        
        {children}
        
        </body>
    </html>
  );
}
