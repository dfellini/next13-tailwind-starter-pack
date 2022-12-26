import { Inter } from "@next/font/google";
import Head from "next/head";
import "../styles/globals.css";
import Header from "components/Header";
import Footer from "components/Footer";

const inter = Inter({
  subsets: ["latin"],
});

const Layout = ({ children }) => {
  return (
    <html lang="en" className={`${inter.className}`}>
      <Head>
        <title>Site Title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <div className="container flex h-screen flex-col md:px-20">
          <header>
            <Header />
          </header>
          <main className="grow">{children}</main>
          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
};

export default Layout;
