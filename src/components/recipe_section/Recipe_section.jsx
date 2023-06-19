import React from 'react'
import './Recipe_section.scss'
import recipe1 from '../../assets/images/recipe-img1.jpg'
import recipe2 from '../../assets/images/recipe-img2.jpg'
import recipe3 from '../../assets/images/recipe-img3.jpg'
import recipe4 from '../../assets/images/recipe-img4.jpg'


export default function Recipe_Section() {
  return (
    <div className='recipe'>
      <img className='recipe__img' src={recipe1} alt='image1'/>
      <h2 className='recipe__header'>Avacado, and Tomato Salad</h2>
      <p className='recipe__blurb'>Dona's Kitchen</p>

      <div className='recipe'>
      <img className='recipe__img' src={recipe2} alt='image2'/>
      <h2 className='recipe__header'>Chickpea & Butternut Squash Salad</h2>
      <p className='recipe__blurb'>Tasty Treat</p>
    </div>

    <div className='recipe'>
    <img className='recipe__img' src={recipe3} alt='image3'/>
      <h2 className='recipe__header'>Spicy Chicken & Salad</h2>
      <p className='recipe__blurb'>Yummy Foods</p>
    </div>

    <div className='recipe'>
    <img className='recipe__img' src={recipe4} alt='image4'/>
      <h2 className='recipe__header'>Chips, Avocado Creamy Sauce</h2>
      <p className='recipe__blurb'>Ella Olsson</p>
    </div>

    </div>
  )
}





// import React from 'react'
// import './Recipe_section.scss'
// import recipe1 from '../../assets/images/recipe-1.jpeg'


// export default function Recipe_Section() {
//   return (
//     <div>
//         <img src={recipe1} alt='image1'/>;

//     </div>
//   )
// }



// import logo from './logo.png'; // Tell webpack this JS file uses this image

// console.log(logo); // /logo.84287d09.png

// function Header() {
//   // Import result is the URL of your image
//   return <img src={logo} alt="Logo" />;
// }

// export default Header;