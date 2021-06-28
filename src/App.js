function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer"></div>
      </div>

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} heigth={40} src="/img/logo.png" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRight d-flex">
          <li className="mr-30">
            <img width={18} heigth={18} src="/img/cart.png" />
            <span>45 $</span>
          </li>
          <li>
            <img width={18} heigth={18} src="/img/user.png" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск ..." />
          </div>
        </div>

        <div className="d-flex">
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
          <div className="card">
            <img width={140} height={120} src="/img/sneakers/2.jpg" alt="sneakers" />
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
          <div className="card">
            <img width={140} height={120} src="/img/sneakers/3.jpg" alt="sneakers" />
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
          <div className="card">
            <img width={140} height={120} src="/img/sneakers/4.jpg" alt="sneakers" />
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
        </div>
      </div>
    </div>
  );
}

export default App;
