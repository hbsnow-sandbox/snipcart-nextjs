import ProductListItem, { Product } from './ProductListItem'
import Container from '../common/Container'
import { css } from '@emotion/core'

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  if (!products) return null

  const container = css({
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0.5rem -0.5rem',
  })

  const col = css({
    width: '50%',
    padding: '0.5rem',
  })

  return (
    <Container>
      <div css={container}>
        {products.map((product) => (
          <div css={col} key={product.id}>
            <ProductListItem product={product} />
          </div>
        ))}
      </div>
    </Container>
  )
}

type ProductListProps = {
  products: Product[]
}

export default ProductList
