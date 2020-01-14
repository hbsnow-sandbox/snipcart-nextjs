import { withRouter, Router } from 'next/router'
import { css } from '@emotion/core'
import ProductButton from './ProductButton'

const productItem = css({
  border: '1px solid #ddd',
  padding: '1rem',
})

const ProductListItem: React.FC<ProductListItemProps> = ({
  product,
  router,
}) => {
  return (
    <div css={productItem}>
      <h2 css={{ margin: '0 0 1rem' }}>{product.name}</h2>
      <div css={{ display: 'flex' }}>
        <div css={{ paddingRight: '1rem' }}>
          <img src={product.image} alt="" className="product__image" />
        </div>
        <div>
          <p>{product.description}</p>
          <p>${product.price.toFixed(2)}</p>
          <ProductButton product={product} url={router.pathname}>
            Add to cart
          </ProductButton>
        </div>
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
