import React, { Component } from 'react';
import { addFavorites } from '../../Actions/Actions';
import { connect } from 'react-redux';
import './PlanetsCards.css';

class PlanetsCard extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const { planet,favorites } = this.props;
        console.log(planet.residents, "residents")
        const cssClass = ['favorite-btn', favorites.includes(planet) ? "isFavorite" : null ]
        return (
            <div className="planets-card">
            <div className="button-box">
            <button className={cssClass.join(' ')} onClick={()=>this.props.addFavorites(planet) }>favorite</button>
            </div>
            <h1>{planet.name}</h1>
            <div className="text-box"> 
                <p> Terrain: {planet.terrain}</p>
                <p> Population: {planet.population}</p>
                <p> Climate: {planet.climate}</p>
                <p> Residents: {planet.residents}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(PlanetsCard)