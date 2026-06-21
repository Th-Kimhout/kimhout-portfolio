import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import TitleBar from "./components/ide/TitleBar";
import Sidebar from "./components/ide/Sidebar";
import TabBar from "./components/ide/TabBar";
import StatusBar from "./components/ide/StatusBar";
import Terminal from "./components/ide/Terminal";

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
      <body className={`${robotoMono.variable} antialiased`}>
        {/* IDE chrome */}
        <TitleBar />
        <TabBar />
        <Sidebar />

        {/* Editor content area */}
        <main className="pt-[76px] lg:pl-60 pb-16">{children}</main>

        {/* Bottom panels */}
        <Terminal />
        <StatusBar />
      </body>
    </html>
  );
}
