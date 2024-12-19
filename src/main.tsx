import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import "./App.css";
import { AuthProvider } from "./components/AuthContext.js";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

// Создаем маршруты
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404 Not Found </div>
  },
  {
    path: "/about-us",
    element: <div>About us
      <Link to="/">BACK</Link>
    </div>,
  },
]);

const rootElement = document.getElementById('root');
if(!rootElement) throw new Error("failted");


createRoot(rootElement).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
