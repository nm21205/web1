import React from 'react'
import useForm from './useForm';

const Product = () => {
  const initValue = {title:"", price:NaN, category:""};
  const [product, handler] = useForm(initValue);

  return (
  <div id='app'>
    <h1>입력폼</h1>
    < className='control'>
<input type='text' placeholder='제품명' onChange={handler} value={product.title} name='title'/>

<hr/>
<h1>입력된 값</h1>
<div className='control'>제품명:{product.title} </div>

</div>

  
)}

export default Product
