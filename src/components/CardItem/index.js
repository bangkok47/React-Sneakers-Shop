import React from 'react';
import styles from './CardItem.module.scss';

function CardItem({ title, price, imageUrl }) {
  const [isChecked, setChecked] = React.useState(false);
  const [isLiked, setLiked] = React.useState(false);

  const onClickPlus = () => {
    setChecked(!isChecked);
    //инвертируем true/false
  };

  const onClickFavorite = () => {
    setLiked(!isLiked);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          onClick={onClickFavorite}
          src={isLiked ? '/img/like.svg' : '/img/unlike.svg'}
          alt="Unliked"
        />
      </div>
      <img width={140} height={120} src={imageUrl} alt="sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} $</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isChecked ? '/img/btn-checked.svg' : './img/btn-plus.svg'}
          alt="plus"
        />
      </div>
    </div>
  );
}

export default CardItem;
