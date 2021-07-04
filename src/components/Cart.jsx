import React from 'react';

function Cart({ onClosed, onRemove, items = [] }) {
  console.log(items);
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Корзина
          <img
            onClick={onClosed}
            className="deleteBtn cu-p"
            src="img/btn-delete.svg"
            alt="Delete"
          />
        </h2>

        {items.length > 0 ? (
          <>
            <div className="items">
              {items.map((obj) => (
                <div className="cartItem p-5 d-flex align-center mb-20">
                  <img className="mr-20" width={70} height={70} src={obj.imageUrl} alt="Sneakers" />
                  <div className="mr-20">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} $</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="deleteBtn"
                    src="img/btn-delete.svg"
                    alt="Delete"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>100 $</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>5 $</b>
                </li>
              </ul>
              <button className="greenButton">
                Оформить заказ:
                <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </>
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              className="mb-20"
              width="120px"
              height="120px"
              src="/img/empty-cart.jpg"
              alt="emptyCart"
            />
            <h2>Корзина пустая</h2>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ!</p>
            <button onClick={onClosed} class="greenButton">
              <img src="/img/arrow.svg" alt="Arrow" />
              Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
