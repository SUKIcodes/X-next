import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import News from "@/components/News";
import SessionWrapper from "@/components/SessionWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "X",
  description: "X Clone using Next.js and Tailwind.css",
};

export default function RootLayout({ children }) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="flex justify-between max-w-6xl mx-auto ">
            <div>
              <Sidebar />
            </div>
            <div>{children}</div>
            <div>
              <News />
            </div>
          </div>
        </body>
      </html>
    </SessionWrapper>
  );
}
