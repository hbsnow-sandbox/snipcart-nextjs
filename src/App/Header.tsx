import Link from 'next/link'
import { SerializedStyles, css } from '@emotion/core'
import { Color } from '../styles/variables'
import Container from '../shared/Container'

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
      <Container>
        <div css={{ display: 'flex', alignItems: 'center' }}>
          <Link href="/">
            <h1>SnipCart Example</h1>
          </Link>
          <div css={{ flex: '1 1 auto' }}></div>
          <div className="snipcart-checkout snipcart-summary" role="button">
            total: <span className="snipcart-total-price"></span>
          </div>
        </div>
      </Container>
    </header>
  )
}

type HeaderProps = {
  cssProps?: SerializedStyles
}

export default Header
