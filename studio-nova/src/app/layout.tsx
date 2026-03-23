import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr">
      <body>
        <Header />
          {children}  
        <Footer />
      </body>
    </html>
  );
}