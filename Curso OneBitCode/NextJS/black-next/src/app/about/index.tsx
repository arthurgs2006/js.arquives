import { NextPage } from "next";
import Head from "next/head";
import { Container, Button } from "reactstrap";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "@/components/Header";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>WebShopping Site</title>
                <meta name="description" content="WebShopping WebSite" />
                <link rel="icon" href="favicon.ico" type="image/x-icon" />
            </Head>

            <Header />

            <main>
                <Container className="py-5 text-center">
                    <h1 className="mt-5 display-1">
                        O melhor jeito de comprar o que você ama
                    </h1>
                    <p className="my-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci porro veniam tenetur quas accusamus, voluptatibus velit eligendi repellat quod consequatur.
                    </p>
                    <Link href='/products'>
                        <Button color="dark" className="px-4 pb-2">
                            Conheça nossos produtos
                        </Button>
                    </Link>

                </Container >
            </main>
        </>
    )
}
export default Home; 0