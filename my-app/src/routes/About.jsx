import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Bar from "../components/Bar.jsx";
import Collapsebar from "../components/Collapsebar.jsx";
import aboutList from "../aboutList.json";

function About() {
  return (
    <>
      <Header />
      <Bar isAbout={true} />
      <Collapsebar list={aboutList} />
      <Footer />
    </>
  );
}

export default About;
