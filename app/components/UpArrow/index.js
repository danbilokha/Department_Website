import React from 'react';
import './index.css'

function UpArrow(props) {
    return (       
        <a href="#" className="back-to-top"></a>
    );
  }
  
export default UpArrow;

function backToTop(){
  let button = $('.back-to-top');

  $(window).on('scroll', () => {
      if($(this).scrollTop()>=50){
          button.fadeIn();
      } else {
          button.fadeOut();
      }
  });//на об'єкт window повісимо action scroll

  button.on('click',(e)=>{
      e.preventDefault();
      $('html').animate({scrollTop:0},1000)
  })
}