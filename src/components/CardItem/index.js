import React from 'react';
import styles from './CardItem.module.scss';

function CardItem({ title, price, imageUrl }) {
  const onClickButton = () => {
    alert('клик по кнопке');
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/unlike.svg" alt="Unliked" />
      </div>
      <img width={140} height={120} src={imageUrl} alt="sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} $</b>
        </div>
        <button onClick={onClickButton} className="button">
          <img width={20} height={20} src="/img/plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  );
}

export default CardItem;
