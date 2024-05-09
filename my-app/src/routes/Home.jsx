import './../styles/Home.scss';
import Header from '../components/Header.jsx';
import HouseListHome from '../components/HouseListHome.jsx';
import Footer from '../components/Footer.jsx';
import Bar from '../components/Bar.jsx';

function Home() {
  return (
    <>
      <div className="Body">
        <Header />
        <Bar />
        <HouseListHome />
        <Footer />
      </div>

    </>
  );
}

export default Home;
