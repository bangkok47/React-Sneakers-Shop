import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header';
import Cart from './components/Cart';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

//СДЕЛАТЬ: сделать try/catch, проверить удаление с фейворит, поправить верстку корзины(слетает нижняя частьБ скролл)

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  //console.log(cartItems);
  const [favorites, setFavorites] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  const mockapi = 'https://60dec320abbdd9001722d01d.mockapi.io';

  React.useEffect(() => {
    /* fetch('https://60dec320abbdd9001722d01d.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => setItems(json)); */

    axios.get(`${mockapi}/items`).then((res) => setItems(res.data));

    axios.get(`${mockapi}/cart`).then((res) => setCartItems(res.data));
    //получаем с бэка добавленные кроссовки, и отображаем в корзине
    axios.get(`${mockapi}/favorites`).then((res) => setFavorites(res.data));
    //с бэка данный какие кросы лайкнули
  }, []);

  const onAddToCart = (obj) => {
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
      } else {
        axios.post(`${mockapi}/cart`, obj);
        //отправляем на бэк(mockAPI) кроссовки которые добавили в корзину
        setCartItems((prev) => [...prev, obj]);
      }
     
    } catch (error) {
      
    }
  };

  const onRemoveFromCart = (id) => {
    axios.delete(`${mockapi}/cart/${id}`);
    //удаляем с бэка (когда удаляем с корзины)
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
  try {
    if (favorites.find((favObj) => favObj.id === obj.id)) {
      axios.delete(`${mockapi}/favorites/${obj.id}`);
      //удаляем с бэка по id
    } else {
      const { data } = await axios.post(`${mockapi}/favorites`, obj);
      //res.data => {data}
      setFavorites((prev) => [...prev, data]);
      //если такого id нету, то создаем
    }
  } catch (error) {
    alert('Не удалось добавить в фавориты! =(')
  }
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

      <Route path="/" exact>
        <Home
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToCart={onAddToCart}
          onAddToFavorite={onAddToFavorite}
        />
      </Route>
      <Route path="/favorites">
        <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
      </Route>
    </div>
  );
}

export default App;
