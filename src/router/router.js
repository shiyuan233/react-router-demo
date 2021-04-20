import React from 'react'
import {Redirect} from 'react-router-dom'
import Product from '../components/product';
import Introduce from '../components/Introduce';
import About from '../components/About';
import Contact from '../components/Contact';
import Login from '../components/Login';
import NotFound from '../components/NotFound'
import Home from '../components/Home'

const Router = [{
  path: '/',
  isExact: true,
  title: '首页',
  render: (props) => {
    
    return <Home {...props} / >
  }
}, {
  path: '/product',
  isExact: true,
  title: '产品',
  render: (props) => {
    return <Product {...props} / >
  }
}, {
  path: '/introduce',
  isExact: true,
  title: '介绍',
  render: (props) => {
    return <Introduce {...props} / >
  }
}, {
  path: '/about',
  isExact: true,
  title: '关于',
  render: (props) => {
    return <About {...props} / >
  }
}, {
  path: '/contact',
  isExact: true,
  title: '联系',
  render: (props) => {
    return <Contact {...props} / >
  }
}, {
  path: '/login',
  isExact: true,
  title: '登录',
  render: (props,value,setValue) => {
    if(value.trim()){
     return  <Redirect to='/'/>
    }
    return <Login {...props} value={value} setValue={setValue}/ >
  }
}, {
  path: '',
  render: (props) => {
    return <NotFound {...props} / >
  }
}]

export default Router