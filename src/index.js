import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Pages/Home'
import About from './Pages/About'
import Content from './Pages/Content'
import Login from './Pages/Login'
import Page404 from './Pages/Page404';
import ProductManement from './Pages/DemoFrom/ProductManement';
//setup redux
import { Provider } from 'react-redux';
import { store } from './redux/configStore';
import ProductFrom from './Pages/ProductFrom/ProductFrom';
import  DatVeXemPhim  from './Pages/DatVeXemPhim/DatVeXemPhim';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="content" element={<Content />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="reactfrom" element={<ProductManement />}></Route>
          <Route path="frombt" element={<ProductFrom />}></Route>
          <Route path="datve" element={<DatVeXemPhim />}></Route>
          <Route path="*" element={<NavLink to='/home' />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
