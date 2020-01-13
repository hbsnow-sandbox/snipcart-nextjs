import { css } from '@emotion/core'

const Container: React.FC<ContainerProps> = ({ children }) => {
  const container = css({
    width: '100%',
    maxWidth: '980px',
    margin: '0 auto',
    padding: '0 1rem',
  })
  return <div css={container}>{children}</div>
}

type ContainerProps = {}

export default Container
