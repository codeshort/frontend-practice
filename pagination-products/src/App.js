import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import Pagination from './components/Pagination';

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  function onSelectedPageClick(newPage) {
    if(newPage< 0 || newPage> 9){
      return;
    }

    setCurrentPage(newPage);
  }

  useEffect(()=> {
    async function populateProds() {
      const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${currentPage * 10}`);
      const responseJson = await response.json()
      setProducts(responseJson.products);
    }

    populateProds();
  }, [currentPage]);

  console.log("products", products);
  return (
  <div className="body-container">
    <div className="App">
      {
        products?.map((prod) => {
        return (
        <div className="product-container">
          <img src={prod.thumbnail} className="product-img"/>
        </div>
          )
        })
      } 
    </div>
    <Pagination currentPage={currentPage}  onSelectedPageClick={onSelectedPageClick} />
    </div>
  );
}

export default App;
