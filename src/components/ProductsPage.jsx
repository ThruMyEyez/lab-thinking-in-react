import { useState } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const ProductsPage = () => {
  const [products, setProducts] = useState(jsonData);
  const [inStockActive, setInStockActive] = useState(false);

  const filterProducts = (str) => {
    let filteredProducts;
    if (str === '') {
      filteredProducts = jsonData;
    } else {
      filteredProducts = jsonData.filter((item) =>
        item.name.toLowerCase().includes(str.toLowerCase())
      );
    }
    setProducts(filteredProducts);
  };

  const checkStock = () => {
    setInStockActive(!inStockActive);
    console.log(inStockActive);
  };

  return (
    <div style={{ width: '80%' }}>
      <h1>IronStore</h1>

      <SearchBar
        filterSearch={filterProducts}
        inStock={checkStock}
        active={inStockActive}
      />
      <ProductTable items={products} active={inStockActive} />
    </div>
  );
};

export default ProductsPage;
