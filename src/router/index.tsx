import React from 'react';
import { Route, Routes } from 'react-router-dom';

//Pages
import CartPage from 'pages/cart';
import CategoryPage from 'pages/category';
import HomePage from 'pages/home';
import NotificationPage from 'pages/notification';
import ProfilePage from 'pages/profile';
import CheckoutResultPage from 'pages/result';
import SearchPage from 'pages/search';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/search" element={<SearchPage />}></Route>
      <Route path="/category" element={<CategoryPage />}></Route>
      <Route path="/notification" element={<NotificationPage />}></Route>
      <Route path="/cart" element={<CartPage />}></Route>
      <Route path="/profile" element={<ProfilePage />}></Route>
      <Route path="/result" element={<CheckoutResultPage />}></Route>
    </Routes>
  );
};

export default Router;
