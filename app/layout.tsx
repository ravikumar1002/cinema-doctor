import { UserDataProvider } from "@/lib/AppContext";
import Header from "./components/header/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cinema Doctor",
  description: "Find details view about you cinematic content",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <UserDataProvider>
        <body className={inter.className} suppressHydrationWarning={true} >
          <Header />
          <div>
            {children}
          </div>
        </body>
      </UserDataProvider>
    </html>
  );
};

export default RootLayout
