import React, { useEffect } from 'react'
import Layout from '../components/layout/layout';
import ProductStore from '../store/ProductStore';
import { useParams } from 'react-router-dom';
import ProductList from '../components/product/product-list';

const ProductByBrand = () => {

    const {ListByBrandRequest} = ProductStore();
    const {id} = useParams()

    useEffect(() => {

      (async() => {
        await ListByBrandRequest(id);
      })()

    }, [id])
    
    
  return (
    <Layout>
      <ProductList/>
    </Layout>
  )
}

export default ProductByBrand
