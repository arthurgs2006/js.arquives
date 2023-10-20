import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect, ReactNode } from 'react'
import { NextPage, GetServerSideProps, GetStaticProps } from "next"
import { Col, Container, Row } from "reactstrap"

interface ApiResponse {
  name: string,
  timestamp: Date
}

export const getStaticProps: GetStaticProps = async () => {
  const staticData = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/hello`).then(res => res.json())
  return {
    props: {
      staticData
    },
    revalidate: 10
    // O dado estático irá ser modificiado ao complementar (x) segundos.
  }
}

const Static: NextPage = (props: {
  children?: ReactNode
  staticData?: ApiResponse
}) => {
  const [clientSideData, setClientSideData] = useState<ApiResponse>()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch("/api/hello").then(res => res.json())
    setClientSideData(data)
  }

  return (
    <Container tag="main">
      <h1 className="my-5">
        Como funcionam as renderizações do Next.js
      </h1>

      <Row>
        <Col>
          <h3>
            Gerado estaticamente durante o build:
          </h3>
          <h2>{props.staticData?.timestamp.toString()}</h2>
        </Col>

        <Col>
          <h3>
            Gerado no cliente:
          </h3>
          <h2>{clientSideData?.timestamp.toString()}</h2>
        </Col>
      </Row>
    </Container>
  )
}

export default Static