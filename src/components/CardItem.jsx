import React from 'react';

const CardItem = () => {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/unlike.svg" alt="Unliked" />
      </div>
      <img width={140} height={120} src="/img/sneakers/1.jpg" alt="sneakers" />
      <h5>Мужские кроссовки Nike Blazer</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>57 $</b>
        </div>
        <button className="button">
          <img width={20} height={20} src="/img/plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  );
};

export default CardItem;
