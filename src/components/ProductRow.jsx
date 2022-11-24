const ProductRow = ({ item }) => {
  const { name, price, inStock } = item;

  return (
    <tr>
      <td style={{ color: (inStock && 'black') || 'red' }}>{name}</td>
      <td>{price}</td>
    </tr>
  );
};
export default ProductRow;
