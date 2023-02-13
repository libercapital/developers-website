import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import OpenApi from "../../components/OpenApi";

export default function ConnectBuyers() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`Liber Connect - Investidores | ${siteConfig.title}`}>
      <OpenApi
        specUrl='https://api.connect.staging.libercapital.com.br/static/funders/v1/openapi.yaml'
      />
    </Layout>
  );
}
