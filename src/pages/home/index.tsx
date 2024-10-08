import { Divider } from 'components/divider';
import React, { Suspense } from 'react';
import { Box, Page } from 'zmp-ui';
import { Banner } from './components/banner';
import { Categories } from './components/categories';
import { Inquiry } from './components/inquiry';
import { ProductList } from './components/product-list';
import { Recommend } from './components/recommend';
import { Welcome } from './components/welcome';

const HomePage: React.FunctionComponent = () => {
  return (
    <Page className="relative flex-1 flex flex-col bg-white">
      <Welcome />
      <Box className="flex-1 overflow-auto">
        <Inquiry />
        <Banner />
        <Suspense>
          <Categories />
        </Suspense>
        <Divider />
        <Recommend />
        <Divider />
        <ProductList />
        <Divider />
      </Box>
    </Page>
  );
};

export default HomePage;
