import React, { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import loadable from '@loadable/component';
import { AppConfig } from './AppConfig';
import MasterLayout from './layout/Master';

const Home = loadable(() => import('./pages/home'));
const Products = loadable(() => import('./pages/products'));
const Login = loadable(() => import('./pages/login'));

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={AppConfig.routerBase}>
        <Suspense fallback={<></>}>
          <Routes>
            {/* <Route
							path="*"
							element={<NotFound />}
						/>
						<Route
							path="/layout-guard-roles"
							element={<NotAuthorized />}
						/> */}

            <Route
              path="/home"
              element={
                <Navigate
                  replace
                  to="/"
                />
              }
            />
            <Route
              path="/"
              element={
                <MasterLayout>
                  <Home />
                </MasterLayout>
              }
            />
            <Route
              path="/products"
              element={
                <MasterLayout>
                  <Products />
                </MasterLayout>
              }
            />
            <Route
              path="/products/*"
              element={
                <MasterLayout>
                  <Products />
                </MasterLayout>
              }
            />
            <Route
              path="/login"
              element={
                <MasterLayout>
                  <Login />
                </MasterLayout>
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
