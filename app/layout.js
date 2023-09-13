import { Providers } from "@/redux/provider";
import { Inter } from "next/font/google";
import "@/assets/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.JS App",
  description: "Generated by Erfan Hosseini",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  );
}
