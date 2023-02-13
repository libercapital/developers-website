import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { RedocStandalone } from "redoc";

const theme = {
  typography: {
    fontFamily: 'var(--ifm-font-family-base)',
    fontSize: 'var(--ifm-font-size-base)',
    lineHeight: 'var(--ifm-line-height-base)',
    fontWeightLight: 'var(--ifm-font-weight-light)',
    fontWeightRegular: 'var(--ifm-font-weight-base)',
    fontWeightBold: 'var(--ifm-font-weight-bold)',
    headings: {
      fontFamily: 'var(--ifm-heading-font-family)',
      fontWeight: 'var(--ifm-heading-font-weight)',
      lineHeight: 'var(--ifm-heading-line-height)',
    },
    code: {
      fontFamily: 'var(--ifm-font-family-monospace)',
      lineHeight: 'var(--ifm-pre-line-height)',
    },
    colors: {
      primary: {
        main: "#006AEB",
        light: "#0375ff",
      },
    },
    links: {
      color: "#006AEB",
    },
  },
};

export default function OpenApi({ specUrl }) {
  const {} = useDocusaurusContext();

  return (
      <RedocStandalone
        specUrl={specUrl}
        options={{
          requiredPropsFirst: true,
          noAutoAuth: true,
          hideDownloadButton: true,
          onlyRequiredInSamples: true,
          nativeScrollbars: true,
          scrollYOffset: 60,
          hideLogo: true,
          theme,
        } }
      />
  );
}
