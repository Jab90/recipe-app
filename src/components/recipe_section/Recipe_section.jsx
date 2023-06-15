import React from 'react'
import './Recipe_section.scss'

export default function dona() {
  return (
    <div className='recipe'>
      <img classname='recipe__img' src='./images/recipe-1.jpeg'></img>
      <h2 className='recipe__header'>Avacado, and Tomato Salad</h2>
      <p className='recipe__blurb'>Dona's Kitchen</p>

      <div className='recipe'>
      <img classname='recipe__img' src='./images/recipe-2.jpeg'></img>
      <h2 className='recipe__header'>Chickpea & Butternut Squash Salad</h2>
      <p className='recipe__blurb'>Tasty Treat</p>
    </div>

    <div className='recipe'>
      <img classname='recipe__img' src='./images/recipe-3.jpeg'></img>
      <h2 className='recipe__header'>Spicy Chicken & Salad</h2>
      <p className='recipe__blurb'>Yummy Foods</p>
    </div>

    <div className='recipe'>
      <img classname='recipe__img' src='./images/recipe-4.jpeg'></img>
      <h2 className='recipe__header'>Chips, Avocado Creamy Sauce</h2>
      <p className='recipe__blurb'>Ella Olsson</p>
    </div>
    
    </div>
  )
}
