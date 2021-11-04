import React, {Component} from "react";
import './Carusel.css'
import Slider from "react-slick";
import Card from './Card'
import GetData from "../actionAPI/GetData";

 class SimpleSlider extends Component {
  settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      
    ]
  };

  state = {
    id:[0]
};

constructor(){
    super();
    this.getID()
};
getID(){
    GetData('https://api.thedogapi.com/v1/breeds?limit=10&page=0')
    .then((body) => {
      let arrayID = body.map(item => item.id)
      if(arrayID.length > 8){
        arrayID.splice(8)
         
        }
        this.setState(
            {
               id:arrayID
            })
    }

    );
}
  
  
 

  _listItems;
  render(){
    const {id} = this.state;
    
    
    return (
    <div style={{marginBottom:"328px"}}>
      
      <Slider {...this.settings} style={{ margin:"auto" }} >
        
      { 
      this._listItems = id.map((number) =>
          <div id={number-1}><Card id={number-1}/></div>
      )}
      </Slider>

    
    </div>
    
  );}
  
}
export default SimpleSlider;