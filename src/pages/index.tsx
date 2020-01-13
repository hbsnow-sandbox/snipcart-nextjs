import React from 'react'
import Header from '../components/common/Header'
import ProductList from '../components/product/ProductList'
import { Product } from '../components/product/ProductListItem'
import Footer from '../components/common/Footer'
import { css } from '@emotion/core'

type IndexProps = {
  products: Product[]
}

const root = css({
  display: 'flex',
  flexDirection: 'column',
})

const Index = (props: IndexProps): JSX.Element => {
  return (
    <div css={root}>
      <Header />
      <main className="main">
        <ProductList products={props.products} />
      </main>
      <Footer />
    </div>
  )
}

Index.getInitialProps = async (): Promise<IndexProps> => {
  return {
    products: [
      {
        id: 'a',
        name: 'Alpha',
        price: 25.0,
        image: '/assets/img/a.png',
        description: 'This is Alpha.',
      } as Product,
      {
        id: 'b',
        name: 'Bravo',
        price: 35,
        image: '/assets/img/b.png',
        description: 'This is Bravo.',
      } as Product,
      {
        id: 'c',
        name: 'Charlie',
        price: 7.5,
        image: '/assets/img/c.png',
        description: 'This is Charlie.',
      } as Product,
      {
        id: 'd',
        name: 'Delta',
        price: 5.0,
        image: '/assets/img/d.png',
        description: 'This is Delta.',
      } as Product,
    ],
  }
}

export default Index
