import './App.css';
import Navbar from './components/navbar/Navbar';
import ClothesItem from './components/clothesItem/ClothesItem';
import clothes from './clothes.json';

function App() {
    return (
        <div className={"main-content"}>
            <Navbar/>
            { clothes.map(item =>  {
                return (
                    <ClothesItem name={item.name} type={item.type} img={item.image}/>
                )
            })}
        </div>
    );
}

export default App;
