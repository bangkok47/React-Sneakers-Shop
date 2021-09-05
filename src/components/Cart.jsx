import React, { useContext, useState } from "react";
import axios from "axios";

import AppContext from "../context";
import Info from "./Info";

const mockapi = "https://60dec320abbdd9001722d01d.mockapi.io";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Cart({ onClosed, onRemove, items = [] }) {
  const { cartItems, setCartItems } = useContext(AppContext);
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(`${mockapi}/orders`, {
        items: cartItems,
      });
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      //костыль для mockAPI
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete("/cart/" + item.id);
        await delay(1000);
      }
    } catch (error) {
      alert("Ошибка при создании заказ! =(");
    }
    setIsLoading(false);
  };

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
                <div
                  key={obj.id}
                  className="cartItem p-5 d-flex align-center mb-20"
                >
                  <img
                    className="mr-20"
                    width={70}
                    height={70}
                    src={obj.imageUrl}
                    alt="Sneakers"
                  />
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
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className="greenButton"
              >
                Оформить заказ:
                <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </>
        ) : (
          <Info
            title={
              isOrderComplete ? "Заказ оформлен! =)" : "Корзина пустая! =Х"
            }
            description={
              isOrderComplete
                ? `Ваш заказ №${orderId} скоро будет передан курьерской службе!`
                : "Добавьте хотя бы одну пару кроссовок! =З"
            }
            image={
              isOrderComplete ? "/img/btn-checked.svg" : "/img/empty-cart.jpg"
            }
          />
        )}
      </div>
    </div>
  );
}

export default Cart;
