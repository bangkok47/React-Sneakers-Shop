import React from 'react';
import { Link } from 'react-router-dom';

function Header({ onClickCart }) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="">
        <div className="d-flex align-center">
          <img width={40} heigth={40} src="/img/logo.png" alt="Logo" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="headerRight d-flex">
        <li onClick={onClickCart} className="mr-30 cu-p">
          <img width={18} heigth={18} src="/img/cart.png" alt="Корзина" />
          <span>45 $</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favorites">
            <img width={18} heigth={18} src="/img/favorites.svg" alt="Закладки" />
          </Link>
        </li>
        <li>
          <img width={18} heigth={18} src="/img/user.png" alt="Пользователь" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
