import React, { useState, useEffect } from "react";
import AppContext from "./context";
import { Route } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

//СДЕЛАТЬ: сделать try/catch, проверить удаление с фейворит, поправить верстку корзины(слетает нижняя частьБ скролл)

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const mockapi = "https://60dec320abbdd9001722d01d.mockapi.io";

  useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get(`${mockapi}/cart`);
      const favoritesResponse = await axios.get(`${mockapi}/favorites`);
      const itemsResponse = await axios.get(`${mockapi}/items`);

      setIsLoading(false);
      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }

    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(`${mockapi}/cart/${obj.id}`);
        setCartItems((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        axios.post(`${mockapi}/cart`, obj);
        //отправляем на бэк(mockAPI) кроссовки которые добавили в корзину
        setCartItems((prev) => [...prev, obj]);
      }
    } catch (error) {}
  };

  const onRemoveFromCart = (id) => {
    axios.delete(`${mockapi}/cart/${id}`);
    //удаляем с бэка (когда удаляем с корзины)
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`${mockapi}/favorites/${obj.id}`);
        setFavorites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
        //удаляем с бэка по id
      } else {
        const { data } = await axios.post(`${mockapi}/favorites`, obj);
        //res.data => {data}
        setFavorites((prev) => [...prev, data]);
        //если такого id нету, то создаем
      }
    } catch (error) {
      alert("Не удалось добавить в фавориты! =(");
    }
  };

  const onChangeSearchInput = (event) => {
    // console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        onAddToFavorite,
        setCartOpened,
        setCartItems,
      }}
    >
      <div className="wrapper clear">
        {cartOpened && (
          <Cart
            items={cartItems}
            onClosed={() => setCartOpened(false)}
            onRemove={onRemoveFromCart}
          />
        )}
        <Header onClickCart={() => setCartOpened(true)} />

        <Route path="/" exact>
          <Home
            items={items}
            cartItems={cartItems}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearchInput={onChangeSearchInput}
            onAddToCart={onAddToCart}
            onAddToFavorite={onAddToFavorite}
            isLoading={isLoading}
          />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;
