import React, { useEffect } from 'react';
import FeatureStore from '../store/FeatureStore';
import LegalContent from '../components/features/LegalContent';
import Layout from '../components/layout/layout';

const TermsPage = () => {

    const {LegalDetailsRequest} = FeatureStore()

    useEffect(() => {
        (async() =>{
            await LegalDetailsRequest('terms')
        })()
    } , [])


    return (
        <Layout>
            <LegalContent/>
        </Layout>
    );
};

export default TermsPage;