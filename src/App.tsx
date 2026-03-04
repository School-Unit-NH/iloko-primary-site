import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Admissions from './pages/Admissions';
import Academics from './pages/Academics';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

import { StrictMode } from 'react'
import { MotionConfig } from 'framer-motion'

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "admissions", element: <Admissions /> },
      { path: "academics", element: <Academics /> },
      { path: "gallery", element: <Gallery /> },
      { path: "contact", element: <Contact /> },
    ]
  }
];
const router = createMemoryRouter(routes);

function App() {
  return (
    <StrictMode>
      <MotionConfig reducedMotion="user">
        <RouterProvider router={router} />
      </MotionConfig>
    </StrictMode>
  );
}

export default App;
