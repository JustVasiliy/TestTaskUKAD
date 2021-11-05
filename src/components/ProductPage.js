import React, {Component} from 'react';
import Card from './Card';
import GetData from '../actionAPI/GetData';
import './ProductPage.css'
class ProductPage extends Component {
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
            <div >
                <div>
                <div className="container">
                <h1 >Product Page</h1>
                </div>
                
                <div className="container" style={{marginBottom:"15px"}}>
                    { this._listItems = id.map((number) =>
                    <div id={number-1} style={{width:"350px"}}><Card id={number-1}/></div>
                    )}
                </div>
                </div>
            </div>
        );
    }
    
};

export default ProductPage;
