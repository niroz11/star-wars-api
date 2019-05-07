import React, { Component } from 'react';
import { addFavorites } from '../../Actions/Actions';
import   PeopleCard   from './PeopleCard';
import PlanetsCard from './PlanetsCard';
import VehiclesCard from './VehiclesCard';
import { connect } from 'react-redux';
import './Card.css';

class Card extends Component{
    constructor(){
        super()
    }

    render(){
        const {people, vehicles, planets, clickedBtn,addFavorites,favorites } = this.props
        const allPeople = people.map((eachPerson) => {
            return <PeopleCard person={eachPerson}/>
        })

        const allPlanets = planets.map((eachPlanet) => {
            return <PlanetsCard planet={eachPlanet}/>
        })

        const allVehicles = vehicles.map((eachVehicle) => {
            return <VehiclesCard vehicle={eachVehicle}/>
        })
        
        
        const allFavorites = favorites.map((favorite) => {
            const people = []
            const planets = []
            const vehicles = []
            if(favorite.category === "people"){
                people.push(favorite)
                return people.map((person) => {
                    return <PeopleCard person={person}/>
                })
            } else if(favorite.category === "planets"){
                planets.push(favorite)
                return planets.map((planet) => {
                    return <PlanetsCard planet={planet}/>
                })
            }else if(favorite.category === "vehicles"){
                vehicles.push(favorite)
                return vehicles.map((vehicle) => {
                    return <VehiclesCard vehicle={vehicle}/>
                })
            }
        })
      


        return (
            <div className="card-holder">
                {clickedBtn === "people" && allPeople}
                {clickedBtn === "planets" && allPlanets}
                {clickedBtn === "vehicles" && allVehicles}
                {clickedBtn === "favorites" && allFavorites}
             </div> 
        )
       
        
    }
}

export const mapStateToProps = (state) => ({
    people: state.people,
    planets: state.planets,
    vehicles: state.vehicles,
    clickedBtn: state.clickedBtn,
    favorites: state.favorites
})

export const mapDispatchToProps = (dispatch) => ({
    addFavorites: (card) => dispatch(addFavorites(card))
})

export default connect(mapStateToProps,mapDispatchToProps)(Card)

