import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme';


describe("App", ()=> {
  let wrapper;
  let mockPeople = { 
    name: "Luke Skywalker",
    species: "Human",
    language: "Galactic Basic",
    homeworld: "Tatooine",
    population: "200000",
    favorite: false,
    category: "people"
  }
  let mockPlanets = {
    name: "Alderaan",
    terrain: "grasslands, mountains",
    population: "2000000000",
    climate: "temperate",
    favorite: false,
    category: "planets"
  };
  let mockVehicles = {
    name: "Sand Crawler",
    model: "Digger Crawler",
    class: "wheeled",
    passenger: "30",
    favorite: false,
    category: "vehicles"
  };
  
  beforeEach(()=> {
    wrapper = shallow (
      <App people={mockPeople}
           planets={mockPlanets}
           vehicles={mockVehicles}/>
                            )
  })
  
  it("should match the snapshot with all data passed in ", () => {
    expect(wrapper).toMatchSnapshot();
  })

  it("should have a proper default state", () => {
    console.log(wrapper.state("movies"))
    expect(wrapper.state()).toEqual({
      movies: [],
      showText: true,
      favorite:false,
      loading:false
    });
  });
})
