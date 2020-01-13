import { withRouter, Router } from 'next/router'

const ProductListItem: React.FC<ProductListItemProps> = ({
  product,
  router,
}) => {
  return (
    <div className="product">
      <h2 className="product__title">{product.name}</h2>
      <p className="product__description">{product.description}</p>
      <img src={product.image} alt="" className="product__image" />
      <div className="product__price-button-container">
        <div className="product__price">${product.price.toFixed(2)}</div>
        <button
          className="snipcart-add-item"
          data-item-id={product.id}
          data-item-name={product.name}
          data-item-price={product.price}
          data-item-url={router.pathname}
          data-item-image={product.image}
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}

export type Product = {
  id: string
  name: string
  price: number
  url: string
  description: string
  image: string
}

type ProductListItemProps = {
  product: Product
  router: Router
}

export default withRouter(ProductListItem)
