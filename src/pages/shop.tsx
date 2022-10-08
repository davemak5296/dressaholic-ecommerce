import * as React from 'react';
import { Route, Routes } from 'react-router';
import ShopLanding from './shop-landing';
import ShopLayout from './shop-layout';

const Shop: React.FC = () => {
  return (
    <Routes>
      <Route element={<ShopLayout />}>
        <Route index element={<ShopLanding />} />
      </Route>
    </Routes>
  );
};

export default Shop;