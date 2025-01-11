import React, { useEffect } from 'react'
import FeatureStore from '../store/FeatureStore'
import Layout from '../components/layout/layout'
import LegalContent from '../components/features/LegalContent'

const ContactPage = () => {

  const {LegalDetailsRequest} = FeatureStore()

  useEffect(() => {
      (async() =>{
          await LegalDetailsRequest('contact')
      })()
  } , [])


  return (
      <Layout>
          <LegalContent/>
      </Layout>
  );
}

export default ContactPage
