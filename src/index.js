import React from 'react';
import reactDom from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


let App = () =>{
  
  return (
    <div>
      <div style={{minHeight:"Calc(100vh - 78px)"}}><Header/></div>
      
       
      <Footer/>      
    </div>
  )
}


reactDom.render(<App/>, document.getElementById('root'));
