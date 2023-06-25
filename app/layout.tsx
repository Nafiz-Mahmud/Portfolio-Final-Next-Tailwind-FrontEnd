// import "./globals.scss";
import "./globals_tail.scss";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

export const metadata = {
  title: "Nafiz X Metal | Web Dev Portfolio",
  description:
    "This is the portfolio website of Nafiz Mahmud. Front-End Dev with more than 2 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <Nav /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
