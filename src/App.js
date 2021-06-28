import CardItem from './components/CardItem';
import Header from './components/Header';
import Cart from './components/Cart';

function App() {
  return (
    <div className="wrapper clear">
      <Cart />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск ..." />
          </div>
        </div>
        <div className="d-flex">
          <CardItem />
        </div>
      </div>
    </div>
  );
}

export default App;
