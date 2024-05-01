import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Rootlayout from './Pages/RootLayout/Rootlayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './Pages/LandingPage/Landing';
import Offers from './Pages/OffersPage/Offers';
import About from './Pages/AboutPage/About';
import Contact from './Pages/ContactPage/Contact';
import Login from './Pages/AuthPage/Login';
import Signup from './Pages/AuthPage/Signup';
import Survey from './Pages/SurveyPage/Survey';
function App() {
  const router = createBrowserRouter([
    { path: '/' , element: <Rootlayout />, children: [
      {index: true, element: <Landing />},
      {path: 'offers', element: <Offers/>},
      {path: 'about', element: <About/>},
      {path: 'contact', element: <Contact/>},
      {path: 'survey', element: <Survey/>},
    ]},
    {path: '/login', element: <Login/>},
    {path: '/signup', element: <Signup/>}
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
