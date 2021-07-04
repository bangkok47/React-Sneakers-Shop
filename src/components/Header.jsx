import React from 'react';

function Header({ onClickCart }) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} heigth={40} src="/img/logo.png" alt="Logo" />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="headerRight d-flex">
        <li onClick={onClickCart} className="mr-30 cu-p">
          <img width={18} heigth={18} src="/img/cart.png" alt="Cart" />
          <span>45 $</span>
        </li>
        <li>
          <img width={18} heigth={18} src="/img/user.png" alt="User" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
