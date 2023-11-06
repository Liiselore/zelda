import './App.css';
import Navbar from './components/navbar/Navbar';
import ClothesItem from './components/clothesItem/ClothesItem';

function App() {
  return (
    <div className={"main-content"}>
      <Navbar />
        <ClothesItem />
    </div>
  );
}

export default App;
