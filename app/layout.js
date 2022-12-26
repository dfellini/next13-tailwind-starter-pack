import Head from "next/head";
import "../styles/globals.css";
import Header from "components/Header";
import Footer from "components/Footer";

const Layout = ({ children }) => {
  return (
    <html>
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
