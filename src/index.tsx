import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import { LandingPage } from './pages/LandingPage/LandingPage';
import { PatientInfoContainer } from './pages/PatientInfo/PatientInfoContainer';
import { ImmigrationInfoContainer } from './pages/ImmigrationInfo/ImmigrationInfoContainer';
import { ProviderInfoContainer } from './pages/ProviderInfo/ProviderInfoContainer';
import { Nav } from './components/globalTemplates/Nav/Nav';
import { Main } from './components/globalTemplates/Main/Main';
import { TitleAndLogo } from './components/globalMolecules/title-and-logo/title-and-logo';

import './index.css';

import { GeneralPageHeader } from './components/globalMolecules/general-page-header/general-page-header';

const router: any = createBrowserRouter([
  {
    path: '/',
    element: (
      <LandingPage>
        {' '}
        <Outlet />{' '}
      </LandingPage>
    ),
    children: [
      {
        path: '/',
        element: (
          <>
            <Outlet />
            <Main></Main>
          </>
        ),
        children: [
          {
            path: '/',
            element: <GeneralPageHeader></GeneralPageHeader>
          }
        ]
      },
      {
        path: '/patient-info',
        element: <PatientInfoContainer />
      },
      {
        path: '/immigration-info',
        element: <ImmigrationInfoContainer />
      },
      {
        path: '/providers-info',
        element: (
          <>
            <GeneralPageHeader></GeneralPageHeader>
            <ProviderInfoContainer />
          </>
        )
      }
    ]
  },
  // {
  //   path: '/immigration-info',
  //   element: <ImmigrationInfoContainer />
  // }
  // {
  //   path: "/providers-info",
  //   element: <ProviderInfoContainer />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
