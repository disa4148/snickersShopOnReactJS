import "./index.scss";

import CardStyles from './components/Card/Card.module.scss';

import MainHeader from "./components/Header/MainHeader";
import Card from "./components/Card/Card";
import Drawer from "./components/Drawer/Drawer";
import ModalWindow from "./components/Modal/ModalWindow";

import search from "./img/search.svg";
import { useState } from "react";

const arr = [ //Массив элементов, для передачи пропсов в компонент Card
  {firstname: "Мужские кроссовки", secondName:"Nike Blazer Mid Suede", price: "12 999 ", imageUrl: require('./img/cards/sneackers1.png')},
  {firstname: "Мужские кроссовки", secondName:"Nike Air Max 270", price: "11 999 ", imageUrl: require('./img/cards/sneackers2.png')},
  {firstname: "Мужские кроссовки", secondName:"Nike Blazer Mid Suede", price: "8 499 ", imageUrl: require('./img/cards/sneackers3.png')},
  {firstname: "Кроссовки Puma X", secondName:"Aka Boku Future Rider", price: "8 999 ", imageUrl: require('./img/cards/sneackers4.png')},

  {firstname: "Мужские кроссовки", secondName:"Under Armour Curry 8", price: "15 199 ", imageUrl: require('./img/cards/sneackers5.png')},
  {firstname: "Мужские кроссовки", secondName:"Nike Kyrie 7 Low Vers", price: "11 299 ", imageUrl: require('./img/cards/sneackers6.png')},
  {firstname: "Мужские кроссовки", secondName:"Jordan Air Jordan 11", price: "10 499 ", imageUrl: require('./img/cards/sneackers7.png')},
  {firstname: "Кроссовки Puma X", secondName:"Under Armour Curry 8", price: "16 499 ", imageUrl: require('./img/cards/sneackers8.png')},
];

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const onAddToCart = (obj) => {
    setCartItems([ ...cartItems, obj]) // ...Берёт все старые данные, которые есть в cartItems и в конец добавляет obj
  }

  
  return (
    <>
      <div className="wrapper">
        {modalOpened && <ModalWindow onCloseModal={() => setModalOpened(false)}/>}
        {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)}/>}
        <MainHeader onClickModal={() => setModalOpened(true)} onClickCart={() => setCartOpened(true)} />
        <main className="firstBlock">
          <div className="wrapperCatalog">
            <h1 className="titleCatalog">Все кроссовки</h1>

            <div className="wrapperSearch">
              <input placeholder="Поиск..." type="text"></input>
              <img src={search} alt="failed" className="Search" />
            </div>
          </div>

          <div className={CardStyles.cardsWrapper}>
            {arr.map((item) => ( 
              <Card 
                firstName={item.firstname}
                secondName={item.secondName}
                price={item.price}
                imageUrl={item.imageUrl}
                onPlus={(obj) =>onAddToCart(obj)}
              />
                ))}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
