import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/Login.js'
import { useState, useEffect } from "react";

import Header from './Components/Header';
import products from './Components/products'
import Navbar from './Components/NavbarC'
import ResponsiveDrawer from './Components/cc';

import { Route, Router, Routes } from 'react-router-dom';


function App() {

  const [showCreate, setShowCreate] = useState(false);
const [products, setProducts]= useState([])

  useEffect(()=> {
  const getproducts = async()=>{
    const dataFromServer = await fetchProducts()
    setProducts(dataFromServer)
  } 
  getproducts()
},[]
  )

  let data ;

  const fetchProducts = async() =>{
    const res = await fetch('http://localhost:3333/products')
     data =  await  res.json();
    console.log('inside data',data);
     return data;
    
 
  }
console.log('data', data)
//  const Create = async (product) =>{
//  const res= await fetch('http://localhost:3333/products'),{
//   method:'POST',
//   headers:{
//     'content-type': 'application/json'
//   },
//   body:JSON.stringify(product)

//  })

//  const data = await res.json()
//  setProducts([...product, data])


//  }
  return (
    <div>
  
       <Navbar/> 
      {/* <ResponsiveDrawer/> */}
    
    <div className='item-container'>
      {products.map((product) => (
        <div className='card' key={product.id}>
          <img src={product.images} alt='' width={150} height={140}/>
          <h3>{product.title}</h3>
          <h5>Price: {product.price} </h5>
          <p> {product.description}
            </p>
        </div>
      ))}
    </div>

  </div>
     
      
    
  );
};
  
export default App;