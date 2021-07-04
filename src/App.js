import React from 'react';
import axios from 'axios';
import CardItem from './components/CardItem';
import Header from './components/Header';
import Cart from './components/Cart';

//сделал поиск + фильтрацию; добавил axios; сделал корзину, + взаимодействие
//с бэкои

//СДЕЛАТЬ: react-router, поправить верстку корзины(слетает нижняя часть)

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  //console.log(cartItems);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    /* fetch('https://60dec320abbdd9001722d01d.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => setItems(json)); */

    axios
      .get('https://60dec320abbdd9001722d01d.mockapi.io/items')
      .then((res) => setItems(res.data));

    axios
      .get('https://60dec320abbdd9001722d01d.mockapi.io/cart')
      .then((res) => setCartItems(res.data));
    //получаем с бэка добавленные кроссовки, и отображаем в корзине
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://60dec320abbdd9001722d01d.mockapi.io/cart', obj);
    //отправляем на бэк(mockAPI) кроссовки которые добавили в корзину

    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveFromCart = (id) => {
    axios.delete(`https://60dec320abbdd9001722d01d.mockapi.io/cart/${id}`);
    //удаляем с бэка (когда удаляем с корзины)
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    // console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Cart items={cartItems} onClosed={() => setCartOpened(false)} onRemove={onRemoveFromCart} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            {searchValue && (
              <img
                onClick={() => setSearchValue('')}
                className="clear cu-p"
                src="/img/btn-delete.svg"
                alt="delete"
              />
            )}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск ..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items
            .filter((obj) => obj.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((obj) => (
              <CardItem
                key={obj.title}
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
                onPlus={onAddToCart}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
