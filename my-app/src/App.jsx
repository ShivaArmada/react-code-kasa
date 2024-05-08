import './styles/App.css';
import Header from './components/Header.jsx';
import HouseList from './components/HouseList.jsx'

function App() {
  return (
    <>
      <div className="App">
        <Header />
      </div>
      <div className="App">
        <HouseList />
      </div>
    </>
  );
}

export default App;
