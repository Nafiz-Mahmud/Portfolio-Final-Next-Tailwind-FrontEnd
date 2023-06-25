import Nav from "./Components/Nav";
import Header from "./Components/Header";
import HireButton_Social from "./Components/HireButton_Social";
import Quote from "./Components/Quote";
import Skill from "./Components/Skill";
import TopProjects from "./Components/TopProjects";
import Testimonial from "./Components/Testimonial";
import FAQ from "./Components/FAQ";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
export default function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <HireButton_Social />
      <Quote />
      <Skill />
      <TopProjects />
      {/* <Testimonial /> */}
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
