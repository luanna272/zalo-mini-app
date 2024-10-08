import React from 'react';
import { App as ZMPApp, ZMPRouter, SnackbarProvider } from 'zmp-ui';
import { RecoilRoot } from 'recoil';
import { getConfig } from 'utils/config';
import { Layout } from '../router/layout';
import { ConfigProvider } from './config-provider';

const App = () => {
  return (
    <RecoilRoot>
      <ConfigProvider
        cssVariables={{
          '--zmp-primary-color': getConfig((c) => c.template.primaryColor),
          '--zmp-background-color': '#f4f5f6',
        }}
      >
        <ZMPApp>
          <SnackbarProvider>
            <ZMPRouter>
              <Layout />
            </ZMPRouter>
          </SnackbarProvider>
        </ZMPApp>
      </ConfigProvider>
    </RecoilRoot>
  );
};
export default App;
