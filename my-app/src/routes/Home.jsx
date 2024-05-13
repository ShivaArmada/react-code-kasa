import './../styles/Home.scss';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Bar from '../components/Bar.jsx';
import HouseListHome from '../components/HouseListHome.jsx';




function Home() {
  return (
    <>
      
        <Header />
        <Bar />
        <HouseListHome />
        <Footer />
      
    </>
  );
}

export default Home;