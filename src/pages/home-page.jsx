import React, { useEffect } from 'react'
import Layout from '../components/layout/layout'
import Brands from '../components/product/brands'
import ProductStore from '../store/ProductStore'
import FeatureStore from '../store/FeatureStore'
import Slider from '../components/product/slider'
import Features from '../components/features/features'
import Categories from '../components/product/categories'
import Products from '../components/product/products'

const HomePage = () => {

  const {BrandListRequest,CategoryListRequest,SliderListRequest,ListByRemarkRequest} = ProductStore();
  const {FeatureListRequest} = FeatureStore()


  useEffect(() => {

    (async () => {
      await SliderListRequest();
      await FeatureListRequest();
      await CategoryListRequest();
      await ListByRemarkRequest('new');
      await BrandListRequest();
    })()

  } , [])

  return (
    <Layout>

      <Slider/>
      <Features/>
      <Categories/>
      <Products/>
      <Brands/>

    </Layout>
  )
}

export default HomePage
