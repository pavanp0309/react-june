import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import PageNotFound from "./pages/PageNotFound";
import { Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css"
import FreeServices from "./pages/FreeServices";
import GoldServices from "./pages/GoldServices";
import SilverServices from "./pages/SilverServices";
import PremiumServices from "./pages/PremiumServices";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return(
  <>
  <Navbar/>
  <Routes> 
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
{/* nested Routing start */}
{/* urlpath: http://localhost:5173/services/free */}
    <Route path="/services" element={<Services/>}>
    {/* index element helps us in displaying a child route in parent */}
    {/* default child-route-start */}
       <Route index element={<PremiumServices/>} />
       {/* default child route end */}
       {/* child routes */}
       <Route path='free' element={<FreeServices/>} />
       <Route path='gold' element={<GoldServices/>} />
       <Route path='silver' element={<SilverServices/>} />
       <Route path='premium' element={<PremiumServices/>} />
    </Route>

    {/* dynamic Routing */}
    <Route path="/products" element={<Products/>}/>
    <Route path="/products/:id" element={<ProductDetails/>}/>

    {/* erro handling  */}
    <Route path="*" element={<PageNotFound/>}/>

  </Routes>
  </>)
}

export default App;
