import { Josefin_Sans } from "next/font/google";
import './globals.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
//import { pages } from "./data/data";
//import Providers from "./providers.js";

const font = Josefin_Sans({ subsets: ["latin"], weight: ["300"] });


export const metadata = {
  title: 'Samantha German - Full Stack Developer',
  description: 'portfolio for Samantha German, a full stack developer based in Margate, Kent',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overscroll-none">
      
      <body className={`${font.className} `}>
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  )
}
