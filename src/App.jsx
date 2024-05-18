import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import Login from "./components/Login"
import Planet from "./components/Planet"

function App() {
  const routes = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/planet",
      element: <Planet />,
    },
    {
      path: "*", // Catch-all route for any unmatched paths
      element: <Navigate to="/login" replace />, // Redirect to login on unmatched routes
    },
  ])
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
