import { ProductType } from "@/services/products"
import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from "next/image"
import { Row, Col,Button } from "reactstrap"
import SucessToast from "./SuccessToast"
type ProductDetailsProps = {
    product: ProductType
}

const ProductDetails: React.FC<ProductDetailsProps> = ({product}) => {
    const [toastIsOpen, setToastIsOpen] = useState(false)

    return(
        <Row>
            <Col lg={6}>
                <Image
                src={product.imageUrl}
                alt={product.name}
                height={500}
                width={600}
                />
            </Col>
            <Col lg={6}>
                <h1>{product.name}</h1>
                <h2 className="text-muted">R${product.price}</h2>
                <p className="my-3">
                    <span className="d-block font-weight-bold">Descrição:</span>
                    {product.description}
                </p>
                <p className="text-muted">Em Estoque: {product.inStock}</p>

                <Button
                color="dark"
                className="my-3 pb-2"
                onClick={ () => {
                    setToastIsOpen(true)
                    setTimeout(() => setToastIsOpen(false), 1000 * 3)
                }}
                >Compre Agora</Button>
                <SucessToast toastIsOpen={toastIsOpen} setToastIsOpen={setToastIsOpen}/>
            </Col>
        </Row>
    )
}

export default ProductDetails;