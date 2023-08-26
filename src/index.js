import "./index.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Error from './Components/Error.js';
import TokenAddress from './Components/TokenAddress/TokenAddress.js';
import PairAddress from './Components/PairAddress/PairAddress.js';
import SideBar from './Components/SideBar/SideBar.js';
import BackGround from './Components/Common/BackGround.js';

function App() {
  return (
    <div className="index">
      <div className="overlap-wrapper">
        <div className="overlap">
          <BackGround />
          <SideBar />
          <Outlet />
        </div>
      </div>
    </div>
  )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <TokenAddress />
            },
            {
                path: "/pair-address",
                element: <PairAddress />
            }
        ],
        errorElement: <Error />
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);