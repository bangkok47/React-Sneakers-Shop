import React from 'react';
import CardItem from '../components/CardItem';

function Favorites({ items, onAddToFavorite }) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои закладки:</h1>
      </div>
      <div className="d-flex flex-wrap">
        {items.map((item) => (
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
