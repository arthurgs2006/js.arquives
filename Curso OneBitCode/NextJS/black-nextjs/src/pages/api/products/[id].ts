import { NextApiRequest, NextApiResponse } from "next";
import products from '../../../database.json'

export default function handler(req :NextApiRequest, res: NextApiResponse) {
    const { id } = req.query // const x = el.query (Extrai dentro do el, alguma propiedade dele.)

    const product = products.find(prod => prod.id === Number(id));
    res.status(200).json(product)
}