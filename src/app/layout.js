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
  title: "X - KING",
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
            <div className="hidden lg:inline  border-r border-gray-700 h-screen sticky top-0 z-50  ">
              <Sidebar />
            </div>
            <div className="w-2xl flex-1 mx-auto">{children}</div>
            <div className="p-3 hidden lg:inline border-l max-w-[300px] border-gray-700 h-screen sticky top-0 z-50 overflow-y-scroll">
              <input
                type="text"
                placeholder="Search..."
                className="w-full outline-none border-none p-3 rounded-full bg-gray-200  "
              />
              <News />
            </div>
          </div>
        </body>
      </html>
    </SessionWrapper>
  );
}
