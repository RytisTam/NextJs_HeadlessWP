import Head from 'next/head'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Header from '../components/header'
import { getPrimaryMenu, getProducts } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import Products from '../components/products'

export default function Index({ products, menuItems}) {


  return (
    <>
    <Header menuItems={menuItems} />
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
        <Products products={products}/>
        <p>{products.nodes[1].name}</p>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const products = await getProducts();
  const menuItems = await getPrimaryMenu();
  return {
    props: { products, menuItems },
  }
}



