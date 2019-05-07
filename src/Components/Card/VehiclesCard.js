import React, { Component } from 'react';
import { addFavorites } from '../../Actions/Actions';
import { connect } from 'react-redux';
import './VehiclesCard.css';

class VehiclesCard extends Component {
    constructor(props){
        super(props)
    }

    render() {
        
        const { vehicle,favorites } = this.props;
        
        const cssClass = ['favorite-btn', favorites.includes(vehicle) ? "isFavorite" : null ]
        return (
          <div className="vehicles-card">
            <div className="button-box">
              <button className={cssClass.join(' ')} onClick={ ()=>this.props.addFavorites(vehicle) }>favorite</button>
            </div>
            <h1>{vehicle.name}</h1>
            <div className="text-box">
                <p> Model: {vehicle.model}</p> 
                <p>Class: {vehicle.class}</p> 
                <p>No. of passengers: {vehicle.passenger}</p>
                </div>
            </div>
        )
    }
    
}

export const mapStateToProps = (state) => ({
    clickedBtn: state.clickedBtn,
    favorites: state.favorites
})

export const mapDispatchToProps = (dispatch) => ({
    addFavorites: (card) => dispatch(addFavorites(card))
})

export default connect(mapStateToProps, mapDispatchToProps)(VehiclesCard)