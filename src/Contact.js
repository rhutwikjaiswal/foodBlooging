import React from 'react'

const Contact = () => {
  return (
    <div className="row">
    <div className="column1">
    <img className='footIcon' src='Screenshot_669 2.png' alt='imgg' />
    </div>
    <div className="column2">
      <h2>Contact Us</h2>
      <p>Lorem Ipsum Pvt Ltd.5/1, Maldalton Road. Phartosh hate near YTM Markert, XYZ-343434</p>
      <p>example2020@gmail.com</p>
      <p>(902)443-0343</p>
    </div>
    <div className="column3">
      <h2>More</h2>
        <p><a href='/'>About Us</a></p>  
        <p><a href='/'>Products</a></p> 
        <p><a href='/'>Career</a></p>
        <p><a href='/'>Contact Us</a></p> 
    </div>
    <div className="column4">
      <h2>Social Links</h2>
      <div><span><img className='path' src='path 3.png' alt='imgg' /><img className='path' src='path 2.png' alt='imgg' /><img className='path' src='path 1.png' alt='imgg' /></span></div>
      <p>© 2022 Food Truck Example</p>
    </div>
  </div>
  )
}

export default Contact;
