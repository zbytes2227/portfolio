
import "./globals.css";
import BackgroundVideo from "@/components/video";

export const metadata = {
  title: "Ujjwal Kushwaha | Zbytes",
  description: "Portfolio 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body ><div className="relative">
      <BackgroundVideo />
      <div className="relative z-10">{children}</div>
    </div></body>
      
    </html>
  );
}
