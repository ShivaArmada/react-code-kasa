import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Bar from "../components/Bar.jsx";
import HouseListHome from "../components/HouseListHome.jsx";

function Home() {
  return (
    <>
      <div className="app-container">
        <Header />
        <Bar />
        <HouseListHome />
        <Footer />
      </div>
    </>
  );
}

export default Home;
