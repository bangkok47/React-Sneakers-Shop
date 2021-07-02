import React from 'react';

function Cart({ onClosed, items = [] }) {
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

        <div className="items">
          {items.map((obj) => (
            <div className="cartItem p-5 d-flex align-center mb-20">
              <img className="mr-20" width={70} height={70} src={obj.imageUrl} alt="Sneakers" />
              <div className="mr-20">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price} $</b>
              </div>
              <img className="deleteBtn" src="img/btn-delete.svg" alt="Delete" />
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
      </div>
    </div>
  );
}

export default Cart;
