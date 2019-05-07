import React, { Component } from 'react';
import { addFavorites } from '../../Actions/Actions';
import { connect } from 'react-redux';
import './PeopleCard.css';
import yoda from '../../Assets/yoda.png'



class PeopleCard extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const { person,favorites } = this.props;
        const cssClass = ['favorite-btn', favorites.includes(person) ? "isFavorite" : "not-favorite" ]
        return (
            <div className="people-card">
            <div class="button-box">

             <button className={cssClass.join(' ')} onClick={ ()=>this.props.addFavorites(person) }>
               <p>Add to favorites</p>
            </button>
            
            </div>
            <h1>{person.name}</h1>
             <div className="text-box">
                <p> Home:{person.homeworld}</p>
                <p> Species:{person.species}</p>
                <p>Population {person.population}</p>
                <p>Language: {person.language}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(PeopleCard)