import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
} from 'next/document'
import { css, Global } from '@emotion/core'
import { Color } from '../styles/variables'

class BaseDocument extends Document {
  static async getInitialProps(ctx): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta charSet="utf-8" />
          <script src="//cdn.snipcart.com/themes/v3.0.5/default/snipcart.js"></script>
          <link
            rel="stylesheet"
            href="//cdn.snipcart.com/themes/v3.0.5/default/snipcart.css"
          />
          <link
            rel="stylesheet"
            href="//unpkg.com/normalize.css@8.0.1/normalize.css"
          />
        </Head>
        <Global
          styles={css`
            *,
            *::before,
            *::after {
              box-sizing: border-box;
            }

            html,
            body,
            #__next {
              height: 100%;
              margin: 0;
              padding: 0;
            }

            body {
              color: ${Color.Text};
              background-color: ${Color.Background};
              -webkit-text-size-adjust: 100%;
              -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            }

            p {
              margin: 0 0 1rem;
            }
          `}
        />
        <body>
          <div id="snipcart" data-api-key={process.env.API_KEY} hidden></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default BaseDocument
