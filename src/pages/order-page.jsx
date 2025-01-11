import React from 'react';
import InvoiceList from '../components/invoice/Invoice-List';
import Layout from '../components/layout/layout'
import InvoiceDetails from '../components/invoice/invoice-details';

const OrderPage = () => {
    return (
        <Layout>
            <InvoiceList/>
        </Layout>
    );
}

export default OrderPage;
