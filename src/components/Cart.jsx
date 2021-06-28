import React from 'react';

const Cart = () => {
  return (
    <div style={{ display: 'none' }} className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Корзина <img className="deleteBtn cu-p" src="img/btn-delete.svg" alt="Delete" />
        </h2>

        <div className="items">
          <div className="cartItem p-5 d-flex align-center mb-10">
            <img
              className="mr-20"
              width={70}
              height={70}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <div className="mr-20">
              <p className="mb-5">Мужские кроссовки Nike Air Max</p>
              <b>47 $</b>
            </div>
            <img className="deleteBtn" src="img/btn-delete.svg" alt="Delete" />
          </div>

          <div className="cartItem p-5 d-flex align-center mb-20">
            <img
              className="mr-20"
              width={70}
              height={70}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <div className="mr-20">
              <p className="mb-5">Мужские кроссовки Nike Air Max</p>
              <b>47 $</b>
            </div>
            <img className="deleteBtn" src="img/btn-delete.svg" alt="Delete" />
          </div>
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
};

export default Cart;
