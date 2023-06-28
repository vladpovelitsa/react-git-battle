import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Popular from "./pages/Popular.jsx";
import Battle from "./pages/Battle.jsx";
import Nav from "./components/Common/Nav.jsx";
import Results from "./pages/Results.jsx";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Nav />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "popular",
                element: <Popular />,
            },
            {
                path: "battle",
                element: <Battle />,
            },
            {
                path: "battle/results",
                element: <Results />,
            },
            {
                path: '*',
                element: (<h2>Error page</h2>)
            }
        ]
    }

]);
const App = () => {
    return (
        <div className='container'>
            <RouterProvider router={router} />
        </div>
    )
}

export default App
