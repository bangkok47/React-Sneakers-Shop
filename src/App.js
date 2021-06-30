import CardItem from './components/CardItem';
import Header from './components/Header';
import Cart from './components/Cart';

const arr = [
  {
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: 75,
    imageUrl: '/img/sneakers/1.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Blazer ',
    price: 50,
    imageUrl: '/img/sneakers/2.jpg',
  },
  {
    title: 'Мужские Кроссовки Puma X Aka Boku',
    price: 47,
    imageUrl: '/img/sneakers/3.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: 99,
    imageUrl: '/img/sneakers/4.jpg',
  },
];

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
          {arr.map((obj) => (
            <CardItem name={obj.title} price={obj.price} imageUrl={obj.imageUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
