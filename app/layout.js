import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavbarComponent";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kimhout Theam's Portfolio",
  description:
    "Background information about kimhout like skills and experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${robotoMono.variable} antialiased bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-900`}>
        <div className=" relative z-10">
          <Navbar />
        </div>

        {children}
      </body>
    </html>
  );
}
