import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
 
 export default function Products(){
	 
	 
	let [products,setProducts] = useState([]);
	
	
	function getProducts(){
		
		axios.get(`https://fakestoreapi.com/products`).then((res)=>{
			 setProducts(res.data)
			 console.log(res.data)
		 })
		
	}
	
	useEffect(()=>{
		getProducts()
	})
	
	
	   return (
		 
		 
		 <>
		
		  
		 <div className="container">
		   <div className="row">
		   
		    {products.map((prod,index)=>(
		       <div className="card col-md-3"  >
                <img src={prod.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{prod.title}</h5>
                  <p className="card-text">{prod.description}</p>
                  <a href="#" className="btn btn-primary">{prod.price}</a>
                </div>
               </div>
			   
			 ))   
			}
			
		   </div>
		  </div>
		
         		 
		 </>
		 
       )

     
	
	
 }