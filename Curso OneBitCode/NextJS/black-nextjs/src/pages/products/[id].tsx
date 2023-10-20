import { ProductType, fetchProduct, fetchProducts } from "@/services/products";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import 'bootstrap/dist/css/bootstrap.min.css'
import {ReactNode} from 'react'
import { Container } from "reactstrap";
import Head  from "next/head";
import Header from "@/components/Header";
import ProductDetails from "@/components/ProductDetails";

export const getStaticProps : GetStaticProps = async (context) => {
    const id = context.params?.id

    if (typeof id === 'string'){
        const product = await fetchProduct(id)
        return{ props: {product}}
    }
    return {
        redirect: {
            destination: '/products',
            permanent: false
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const products = await fetchProducts()

    const paths = products.map(product => {
        return { params: { id: product.id.toString() }}
    })
    return{
        paths,
        fallback: false
    }
} 

const Product: NextPage = (props: {
    children?: ReactNode
    product?: ProductType
}) => {
    return(
        <>
            <Head>
                <title>{props.product!.name}</title>
                <meta name="description" content={props.product!.description}/>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <Container className='mt-5'>
                <ProductDetails product={props.product!}/>
            </Container>
        </>
    )
}
export default Product;