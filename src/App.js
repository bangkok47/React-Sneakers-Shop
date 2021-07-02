import React from 'react';
import CardItem from './components/CardItem';
import Header from './components/Header';
import Cart from './components/Cart';

//переделать с axios + поправить верстку + react-router + решить проблему с корзиной

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([
    {
      title: 'Мужские Кроссовки Nike Air Max 270',
      price: 75,
      imageUrl: '/img/sneakers/1.jpg',
    },
    {
      title: 'Мужские Кроссовки Nike Blazer ',
      price: 50,
      imageUrl: '/img/sneakers/2.jpg',
    },
  ]);
  //console.log(cartItems);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://60dec320abbdd9001722d01d.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => setItems(json));
  }, []);

  return (
    <div className="wrapper clear">
      {cartOpened && <Cart items={cartItems} onClosed={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск ..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((obj) => (
            <CardItem name={obj.title} price={obj.price} imageUrl={obj.imageUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
