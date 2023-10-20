import 'bootstrap/dist/css/bootstrap.min.css'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Button } from 'reactstrap'
import Header from '@/components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>WebShopping Site</title>
        <meta name="description" content="WebShopping Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Container className='py-5 text-center'>
          <h1 className="mt-5 display-1">
            O melhor jeito de comprar o que você ama
          </h1>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum praesentium commodi assumenda magnam ab.
          </p>
          <Link href='/products'>   
            <Button color='dark' className='px-4 pb-2'>
              Conheça nossos produtos
            </Button>
          </Link>
        </Container>
      </main>
    </>
  )
}

export default Home