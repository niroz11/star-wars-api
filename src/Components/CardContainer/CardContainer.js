import React, { Component } from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

class CardContainer extends Component {
     constructor(){
         super()
     }
    
     render(){ 
        return (
        <div>
            <Card/>
        </div>
     )
    }
}
export default CardContainer;
        
    

