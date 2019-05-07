import React, { Component } from 'react';
import Header from '../Header/Header';
import ScrollText from '../ScrollText/ScrollText';
import   FetchApi  from '../MainFetch/MainFetch';
import {getSpeciesForPeople, getHomeWorld, getResidents, getAllVehicles, getMoviesText } from '../Helpers/Helpers'
import './App.css';
import { connect } from 'react-redux';
import { addPeople, addPlanets, addVehicles, getClickedBtn} from '../../Actions/Actions'
import  Card  from '../Card/Card'


const avatarStyle ={
  backgroundImage: "url('../../Assets/dark-side.jpg')"
}; 

class App extends Component {
  constructor(){
    super()
    this.state = {
    movies: [],
    showText: true,
    }    
  }

  getPeople = async (e) => {
    console.log(e.target)
    const { name } = e.target
    
    if(!this.props.people.length){
      const url = 'https://swapi.co/api/people/'
      const people = await FetchApi(url);
      const species = await getSpeciesForPeople(people.results)
      const homeWorld = await getHomeWorld(species)
      this.props.addPeople(homeWorld)
    } 
    this.props.getClickedBtn(name)
    this.setState({
      showText: false,
      loading:false
    })
}

getPlanets = async (e) => {
  const { name } = e.target
  if(!this.props.planets.length){
  const url = 'https://swapi.co/api/planets/'
  const planets = await FetchApi(url);
  const residents = await getResidents(planets.results);
  this.props.addPlanets(residents)
  }
  this.props.getClickedBtn(name)
  this.setState({
    showText: false
  })
}


getVehicles = async (e) => {
  const { name } = e.target;
  if(!this.props.vehicles.length){
    const url = 'https://swapi.co/api/vehicles/';
    const vehicles = await FetchApi(url);
    const getAll = getAllVehicles(vehicles.results)
    this.props.addVehicles(getAll)
  }
  this.props.getClickedBtn(name)
  this.setState({
    showText: false
    })
  }

  getFavorites = (e) => {
    const { name } = e.target
    this.props.getClickedBtn(name)
  }

  
componentDidMount = async () => {
  const url = "https://swapi.co/api/films/";
  const movies = await FetchApi(url);
  const moviesText = getMoviesText(movies.results)
  this.setState({
    movies: moviesText,  
    })  
}
  
render() {
const { movies,showText } = this.state;
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <section className="main-container">
      <section className="button-container" style={avatarStyle}>
          <button name="people" onClick={this.getPeople}>People</button>
          <button name="planets" onClick={this.getPlanets}>Planets</button>
          <button name="vehicles" onClick={this.getVehicles}>Vehicles</button>
          <button name="favorites" onClick={this.getFavorites}>Favorites</button>
      </section>
      {showText === true && <ScrollText crawlText={movies} showText={showText}/>}
      <Card/>
      </section>
    </div>
  );
}
}

export const mapStateToProps = (state) => ({
  people: state.people,
  planets: state.planets,
  vehicles: state.vehicles
})

export const mapDispatchToProps = (dispatch) => ({
  addPeople: (people) => dispatch(addPeople(people)),
  addPlanets: (planets) => dispatch(addPlanets(planets)),
  addVehicles: (vehicles) => dispatch(addVehicles(vehicles)),
  getClickedBtn:(val) => dispatch(getClickedBtn(val))
})

export default connect(mapStateToProps,mapDispatchToProps)(App)
  
  
      
      
    
    
    
  


    


  
  
  
  
  
