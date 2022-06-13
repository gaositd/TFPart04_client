import './App.css';
import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';

// Hooks

// Components
import Landing from './components/Landing/Landing.jsx'
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home.jsx'
import Details from './components/Details/Details';
import ShoppingCart from './components/Cart/ShoppingCart';
import AdminPage from './components/AdminSite/AdminPage';
import Resources from './components/Resources/Resources';
import ProductCreationForm from './components/ProductCreationForm/ProductCreationForm'
import ModificationForm from './components/ModificationForm/ModificationForm';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer'

function App() {

  const loggedUser = useSelector(state => state.loggedUser)
  if (loggedUser.email) localStorage.setItem("user", loggedUser.email)

  const { pathname } = useLocation()

  return (
    <div className="App">
      {
      pathname === '/' ? null : <NavBar />
      }

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/cart' element={<ShoppingCart />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/creationform' element={<ProductCreationForm />} />
        <Route path='/modificationForm/:id' element={<ModificationForm />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      {
      pathname === '/' ? null : <Footer />
      }
    </div>
  );
}

export default App;