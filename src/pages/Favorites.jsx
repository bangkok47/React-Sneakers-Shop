import React, { useContext } from "react";
import AppContext from "../context";

import CardItem from "../components/CardItem";

function Favorites() {
  const { favorites, onAddToFavorite } = useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои закладки:</h1>
      </div>
      <div className="d-flex flex-wrap">
        {favorites.map((item) => (
          <CardItem
            key={item.title}
            favorited={true}
            onFavorite={onAddToFavorite}
            {...item}

            //передаем все остальные свойста(id, title, img, price)
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
