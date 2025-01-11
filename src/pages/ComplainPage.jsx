import React, { useEffect } from 'react'
import FeatureStore from '../store/FeatureStore'
import Layout from '../components/layout/layout'
import LegalContent from '../components/features/LegalContent'

const ComplainPage = () => {

  const {LegalDetailsRequest} = FeatureStore()

  useEffect(() => {
      (async() =>{
          await LegalDetailsRequest('complain')
      })()
  } , [])


  return (
      <Layout>
          <LegalContent/>
      </Layout>
  );
}

export default ComplainPage
