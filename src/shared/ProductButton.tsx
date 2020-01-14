import { css, SerializedStyles } from '@emotion/core'
import { ButtonProps, defaultButton } from './Button'
import { Product } from './ProductListItem'

const ProductButton: React.FC<ProductButtonProps> = ({
  children,
  cssProps,
  className,
  product,
  url,
}) => {
  const button = css(defaultButton, cssProps)

  return (
    <button
      css={button}
      className={`snipcart-add-item ${className}`}
      data-item-id={product.id}
      data-item-name={product.name}
      data-item-price={product.price}
      data-item-url={url}
      data-item-image={product.image}
    >
      {children}
    </button>
  )
}

type ProductButtonProps = ButtonProps & {
  cssProps?: SerializedStyles
  className?: string
  product: Product
  url: string
}

export default ProductButton
