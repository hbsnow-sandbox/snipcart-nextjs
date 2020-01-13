import Link from 'next/link'
import { SerializedStyles, css } from '@emotion/core'
import { Color } from '../../styles/variables'

const Header: React.FC<HeaderProps> = ({ cssProps }) => {
  const header = css(
    {
      color: Color.Text,
      backgroundColor: Color.Primary,
    },
    cssProps
  )

  return (
    <header css={header}>
      <Link href="/">
        <h1>SnipCart Example</h1>
      </Link>
      <div className="snipcart-checkout snipcart-summary" role="button">
        total: <span className="snipcart-total-price"></span>
      </div>
    </header>
  )
}

type HeaderProps = {
  cssProps?: SerializedStyles
}

export default Header
