import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom"
import "./styles/global.scss";

// Pages : 
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import Products from "./pages/Products/Products";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import SingleUser from "./pages/SingleUser/SingleUser";


// Components : 
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

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
          path : '/products/:id' , 
          element : <SingleProduct />
        } ,
        {
          path : '/users/:id' ,
          element : <SingleUser />
        }
      ]
    }
  ])
  return (<RouterProvider router={route}/>)
}

export default App
