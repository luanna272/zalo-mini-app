import React, { FC } from 'react';
import { Box } from 'zmp-ui';
import { Navigation } from './navigation';
import { Route, Routes } from 'react-router-dom';

//Pages
import CartPage from 'pages/cart';
import CategoryPage from 'pages/category';
import HomePage from 'pages/home';
import NotificationPage from 'pages/notification';
import ProfilePage from 'pages/profile';
import CheckoutResultPage from 'pages/result';
import SearchPage from 'pages/search';
import { useScrollRestoration } from 'hooks/use-scroll-restoration';

export const Layout: FC = () => {
  useScrollRestoration();

  return (
    <Box flex flexDirection="column" className="h-screen">
      <Box className="flex-1 flex flex-col overflow-hidden">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/category" element={<CategoryPage />}></Route>
          <Route path="/notification" element={<NotificationPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/result" element={<CheckoutResultPage />}></Route>
        </Routes>
      </Box>
      <Navigation />
    </Box>
  );
};
