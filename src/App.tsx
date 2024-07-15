import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom"
import "./styles/global.scss";

// Pages : 
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import Products from "./pages/Products/Products";


// Components : 
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Show from "./components/Show/Show";

function App() {
  let Layout = () => {
    return (
      <div className="main">
        <Navbar /> 
        <div className="container">
          <div className="menuContainer">
            <Menu /> 
          </div>
          <div className="contentContainer">
            <Outlet /> 
          </div>
        </div>
        <Footer /> 
      </div>
    )
  }
  let route = createBrowserRouter([
    {
      path : '/' , 
      element : <Layout /> ,
      children : [
        {
          path : '/' , 
          element : <Home />
        } , 
        {
          path : '/users' , 
          element : <Users />
        } , 
        {
          path : '/products' ,
          element : <Products />
        } , 
        {
          path : '/:slug/:id' , 
          element : <Show />
        }
      ]
    }
  ])
  return (<RouterProvider router={route}/>)
}

export default App
