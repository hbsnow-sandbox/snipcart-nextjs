import Container from '../shared/Container'
import { css, SerializedStyles } from '@emotion/core'
import { Color } from '../styles/variables'

const Footer: React.FC<FooterProps> = ({ cssProps }) => {
  const footer = css(
    {
      color: '#fff',
      backgroundColor: Color.PrimaryDark,
      textAlign: 'center',
      padding: '1rem 0 0',
    },
    cssProps
  )

  return (
    <footer css={footer}>
      <Container>
        <p>footer</p>
      </Container>
    </footer>
  )
}

type FooterProps = {
  cssProps?: SerializedStyles
}

export default Footer
