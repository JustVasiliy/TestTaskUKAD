import React, {Component} from 'react';
import './Card.css';
import GetData from '../actionAPI/GetData';
import LoadingSpiner from './LoadingSpiner';
class Card extends Component{
    
    state = {
        name: null,
        temperament: null,
        image: null,
        loading: true
    };
    
    constructor(){
        super();
        this.update()
    };
    update(){
        GetData('https://api.thedogapi.com/v1/breeds?limit=10&page=0')
        .then((body) => {

            this.setState(
                {
                    name: body[this.props.id].name,
                    temperament: body[this.props.id].temperament, 
                    image:body[this.props.id].image.url,
                    loading: false
                })
        }

        );
    }
   
    render(){
        const {name, temperament, image, loading} = this.state;
        if(loading){
            return <LoadingSpiner/>;
        }
        
        return (
            <div>
                <a href={image} className="card" target="_blank" rel="noreferrer">
                <img src={image} alt="image" />
                <article>
                <span>{name}</span>
                <p className="temperament">Temperament: {temperament}</p>
                </article>
                
                </a>
                
            </div>
        )
    }
}

export default Card;