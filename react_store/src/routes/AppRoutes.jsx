import React from 'react'
import { Suspense } from 'react'
import { Routes,Route, Navigate } from 'react-router-dom'
let Home= React.lazy(() => import('../pages/Home'))
let RecipeDetails= React.lazy(() => import('../pages/RecipeDetails'))
let Footer= React.lazy(() => import('../components/Footer'))
let PageNotFound= React.lazy(() => import('../pages/PageNotFound'))
let Navbar= React.lazy(() => import('../components/Navbar'))
let Blog= React.lazy(() => import('../pages/Blog'))
let Contact= React.lazy(() => import('../pages/Contact'))
let Products= React.lazy(() => import('../pages/Products'))
let ProductDetails= React.lazy(() => import('../pages/ProductDetails'))
let Recipes= React.lazy(() => import('../pages/Recipes'))
let Login= React.lazy(() => import('../pages/Login'))
let Shop= React.lazy(() => import('../pages/Shop'))

const AppRoutes = () => {
  return (
    <>
    <Navbar/>
    <Suspense fallback={<div className='text-center mt-5 pt-5'><h1>Loading...</h1></div>}>
      <Routes>
          {/* static-routes */}
          {/* route which helps us in navigating to the Home page by default with path /home
          http://localhost:5173/home */}
          <Route path='/' element={<Navigate to={'/home'} replace  />}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/login' element={<Login/>}/>
          {/* dynamic-Routes */}
          <Route path='/products' element={<Products/>}/>
          <Route path='/products/:id' element={<ProductDetails/>}/>
          <Route path='/recipes' element={<Recipes/>}/>
          <Route path='/recipes/:id' element={<RecipeDetails/>}/>

          {/* Page_Not_found--error Handling */}
           <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      </Suspense>   
      
      </>
  )
}

export default AppRoutes
