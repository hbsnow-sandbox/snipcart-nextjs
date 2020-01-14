import { css, SerializedStyles } from '@emotion/core'
import { Color } from '../styles/variables'

export const defaultButton = css({
  border: 0,
  backgroundColor: Color.Primary,
  borderRadius: '6px',
  padding: '0.5rem 1rem',
})

const Button: React.FC<ButtonProps> = ({ children, cssProps, className }) => {
  const button = css(defaultButton, cssProps)

  return (
    <button css={button} className={className}>
      {children}
    </button>
  )
}

export type ButtonProps = {
  cssProps?: SerializedStyles
  className?: string
}

export default Button
