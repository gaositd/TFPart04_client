import './App.css';
import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

// Hooks

// Components
import Landing from './components/Landing/Landing.jsx'
import Home from './components/Home/Home.jsx'
import Details from './components/Details/Details';
import CreateCategory from './components/CreateCategory/CreateCategory';
import NavBar from './components/NavBar/NavBar';
import ProductCreationForm from './components/ProductCreationForm/ProductCreationForm'
import { useSelector } from 'react-redux';
import NotFound from './components/NotFound/NotFound';
import ShoppingCart from './components/Cart/ShoppingCart';
import Resources from './components/Resources/Resources';
import ModificationForm from './components/ModificationForm/ModificationForm';

function App() {

  const loggedUser = useSelector(state => state.loggedUser)
  if (loggedUser.email) localStorage.setItem("user", loggedUser.email)
  console.log('Local storage user: ', localStorage.getItem("user"))

  const { pathname } = useLocation()

  if (localStorage.getItem("user") === 'santi@mail.com') {
    return (
      <div className="App">
        {pathname === '/' ? null : <NavBar />}
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/admin' element={<CreateCategory />} />
          <Route path='/cart' element={<ShoppingCart />} />
          <Route path='/creationform' element={<ProductCreationForm />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    )
  }

  return (
    <div className="App">
      {pathname === '/' ? null : <NavBar />}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/admin' element={<CreateCategory />} />
        <Route path='/cart' element={<ShoppingCart />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/creationform' element={<ProductCreationForm />} />
        <Route path='/modificationForm/:id' element={<ModificationForm />} />
        {/* <Route pathelement={<NotFound/>}/> */}
        {/* <Route path='/admin' element={<CreateCategory/>}/> */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;