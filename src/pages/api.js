import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { RedocStandalone } from "redoc";

export default function API() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <RedocStandalone
        specUrl='https://api.connect.staging.libercapital.com.br/static/buyers/v1/openapi.yaml'
        options={{
          requiredPropsFirst: true,
          noAutoAuth: true,
          hideDownloadButton: true,
          onlyRequiredInSamples: true,
          nativeScrollbars: true,
          scrollYOffset: 60,
          theme: { colors: { primary: { main: '#2da8d3' } } },
        } }
      />
    </Layout>
  );
}
