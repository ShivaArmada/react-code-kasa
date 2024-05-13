import './../styles/About.scss';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Bar from '../components/Bar.jsx';





function About() {
  return (
    <>
      
        <Header />
        <Bar isAbout={true} />

        <Footer />
      
    </>
  );
}

export default About;