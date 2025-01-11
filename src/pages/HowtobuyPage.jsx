import React, { useEffect } from 'react'
import FeatureStore from '../store/FeatureStore'
import LegalContent from '../components/features/LegalContent'
import Layout from '../components/layout/layout'

const HowtobuyPage = () => {

  const {LegalDetailsRequest} = FeatureStore()

  useEffect(() => {
      (async() =>{
          await LegalDetailsRequest('howtobuy')
      })()
  } , [])


  return (
      <Layout>
          <LegalContent/>
      </Layout>
  );
}

export default HowtobuyPage
