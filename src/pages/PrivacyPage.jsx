import React, { useEffect } from 'react'
import LegalContent from '../components/features/LegalContent'
import Layout from '../components/layout/layout'
import FeatureStore from '../store/FeatureStore'

const PrivacyPage = () => {

  const {LegalDetailsRequest} = FeatureStore()

  useEffect(() => {
      (async() =>{
          await LegalDetailsRequest('privacy')
      })()
  } , [])


  return (
      <Layout>
          <LegalContent/>
      </Layout>
  );
}

export default PrivacyPage
