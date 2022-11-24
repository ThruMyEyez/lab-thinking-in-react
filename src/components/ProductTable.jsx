import ProductRow from './ProductRow';
const ProductsTable = ({ items, active }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {items.map((product) => {
          const { id } = product;
          return (
            (active && <ProductRow key={id} item={product} />) ||
            (product.inStock && <ProductRow key={id} item={product} />)
          );
        })}
      </tbody>
    </table>
  );
};

export default ProductsTable;
