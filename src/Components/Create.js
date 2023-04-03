import React from "react";
import { useState } from "react";

const create =({onAdd}) =>{
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    //const [category,setText] = useState();

   const onSubmit = (e) =>{
    e.preventDefault()

    if(!text){
        alert("Add Product Details")
        return
    }

    onAdd({title,description,price,category})
    
    setTitle('')
    setDescription('')
    setPrice('')
    setCategory('')
   }

   return(
    <form className='add-details' onSubmit={onSubmit
    }>
        <div className='form-control'>
            <label>Title</label>
            <input type="text" placeholder="Mention Product Name"
            value={text} onChange={(e)=> setTitle(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label>Description</label>
            <input type="text" placeholder="write Product description"
            value={text} onChange={(e)=> setDescription(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label>Price</label>
            <input type="number" placeholder="Enter Price "
            value={text} onChange={(e)=> setTitle(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label>Category</label>
            <input type="text" placeholder="Mention category"
            value={text} onChange={(e)=> setCategory(e.target.value)}/>
        </div>
         
    </form>
   )


}

export default create