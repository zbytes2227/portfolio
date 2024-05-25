import NextTopLoader from "nextjs-toploader";
import BackgroundVideo from "@/components/video";
import BackgroundMusic from "@/components/music";
import "./globals.css";

export const metadata = {
  title: "Ujjwal Kushwaha | Zbytes",
  description: "Portfolio 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/image/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0088ff" />
        <meta property="og:title" content="Ujjwal Kushwaha" />
        <meta property="og:type" content="website" />
        <meta property="og:URL" content="https://zbytes.vercel.app/" />
        <meta property="og:image" content="https://zbytes.vercel.app/192.png" />
        <meta name="keywords" content="Ujjwal Kushwaha, zbytes, zbytes2227, FGP Raebareli,ujjwal, zbyte" />
        <meta property="og:description" content="A student pursuing a Diploma in Computer Science & Engineering,specializing in MERN stack development and learning Data Science & Machine Learning" />
        <meta name="robots" content="index, follow" />
      </head>
      <body ><div className="relative">
        <NextTopLoader
          color="#0088ff"
          initialPosition={0.22}
          crawlSpeed={300}
          height={4}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
        />
        <BackgroundVideo />
        <BackgroundMusic />
        <div className="relative z-10">{children}</div>
      </div></body>

    </html>
  );
}
