import React, { useContext } from "react";
import AppContext from "../../context";
import ContentLoader from "react-content-loader";

import styles from "./CardItem.module.scss";

function CardItem({
  id,
  title,
  price,
  imageUrl,
  onPlus,
  onFavorite,
  favorited = false,
  loading = false,
}) {
  const [isLiked, setLiked] = React.useState(favorited);
  const { isItemAdded } = useContext(AppContext);

  const onClickPlus = () => {
    onPlus({ id, title, price, imageUrl });
  };

  const onClickFavorite = () => {
    onFavorite({ id, title, price, imageUrl });
    setLiked(!isLiked);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={150}
          height={187}
          viewBox="0 0 150 187"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="9" ry="9" width="150" height="90" />
          <rect x="2" y="106" rx="7" ry="7" width="150" height="12" />
          <rect x="4" y="125" rx="7" ry="7" width="100" height="12" />
          <rect x="8" y="158" rx="7" ry="7" width="80" height="25" />
          <rect x="114" y="155" rx="7" ry="7" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div onClick={onClickFavorite} className={styles.favorite}>
            <img
              src={isLiked ? "/img/like.svg" : "/img/unlike.svg"}
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
              src={
                isItemAdded(id) ? "/img/btn-checked.svg" : "./img/btn-plus.svg"
              }
              alt="plus"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default CardItem;
