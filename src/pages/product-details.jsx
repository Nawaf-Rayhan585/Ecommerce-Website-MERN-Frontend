import React, { useEffect } from 'react'
import Layout from '../components/layout/layout'
import Details from '../components/product/details'
import { useParams } from 'react-router-dom'
import Brands from '../components/product/brands'
import ProductStore from '../store/ProductStore'

const ProductDetails = () => {

  const {BrandList,DetailsRequest,ReviewListRequest,BrandListRequest} = ProductStore()
  const {id} = useParams()

  useEffect(() => {
    (async() => {
      await DetailsRequest(id)
      await ReviewListRequest(id)
      BrandList===null?await BrandListRequest():null
    })()
  })

  return (
    <Layout>
      <Details/>
      <Brands/>
    </Layout>
  )
}

export default ProductDetails
