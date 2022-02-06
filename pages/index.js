import Head from 'next/head'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Header from '../components/header'
import { getAllPostsForHome, getPrimaryMenu } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import Products from '../src/products'

export default function Index({ allPosts: { edges }, preview, menuItems, products}) {
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)

  return (
    <>
    <Header menuItems={menuItems} />
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.featuredImage?.node}
              date={heroPost.date}
              author={heroPost.author?.node}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}

             <Products products={products}/>

          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  const menuItems = await getPrimaryMenu();
  
  const req = await fetch('http://localhost:3000/api/get-products');
  const products = await req.json()

  
  return {
    props: { allPosts, preview, menuItems, products: products?.products },
  }
}
