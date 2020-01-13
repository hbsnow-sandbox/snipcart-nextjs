import ProductListItem, { Product } from './ProductListItem'

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductListItem product={product} key={product.id} />
      ))}
    </div>
  )
}

type ProductListProps = {
  products: Product[]
}

export default ProductList
