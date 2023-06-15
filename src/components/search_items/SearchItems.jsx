import React from 'react';
import './SearchItems.scss'

export default function SearchItems () { 
  return (
    <div className='searchItems'>
      <input className='searchItems__input' type='text' placeholder='Search for a recipe'/>
      <button className='searchItems__button'>Search</button>
    </div>
  )
}