import React from 'react';
import loadable from '@loadable/component';
import { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import DashBoardLayout from './layout/Dashboard';

const Dashboard = loadable(() => import('./pages/dashboard'));
const Menu = loadable(() => import('./pages/menu'));

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={''}>
        <Suspense>
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
              path="/"
              element={
                <Navigate
                  replace
                  to="/dashboard"
                />
              }
            />

            <Route
              path="/dashboard"
              element={
                <DashBoardLayout>
                  <Dashboard />
                </DashBoardLayout>
              }
            />
            <Route
              path="/menu"
              element={
                <DashBoardLayout>
                  <Menu />
                </DashBoardLayout>
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
