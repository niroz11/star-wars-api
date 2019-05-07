import React from 'React';
import * as Helpers from './Helpers';
import * as FetchApi from '../MainFetch/MainFetch';




describe ("Helpers", () => {
    
  
  

  const mockVehicleData = [{
    name: "tesla",
    model: "suv",
    vehicle_class: "vehicle.vehicle_class",
    passengers: "vehicle.passengers", 
    favorite: false,
    year: "2018"
  
  }]
  const returnedMockVehicleData = [{
    name: "tesla",
    model: "suv",
    class: "vehicle.vehicle_class",
    passenger: "vehicle.passengers", 
    favorite: false
  }]

  const mockPeopleArray = [{
    
      "name": "Luke Skywalker",
      "height": "172",
      "mass": "77",
      "hair_color": "blond",
      "skin_color": "fair",
      "eye_color": "blue",
      "birth_year": "19BBY",
      "gender": "male",
      "homeworld": "https://swapi.co/api/planets/1/",
      "films": [
          "https://swapi.co/api/films/2/",
          "https://swapi.co/api/films/6/",
          "https://swapi.co/api/films/3/",
          "https://swapi.co/api/films/1/",
          "https://swapi.co/api/films/7/"
      ],
      "species": [
          "https://swapi.co/api/species/1/"
      ],
      "vehicles": [
          "https://swapi.co/api/vehicles/14/",
          "https://swapi.co/api/vehicles/30/"
      ],
      "starships": [
          "https://swapi.co/api/starships/12/",
          "https://swapi.co/api/starships/22/"
      ],
      "created": "2014-12-09T13:50:51.644000Z",
      "edited": "2014-12-20T21:17:56.891000Z",
      "url": "https://swapi.co/api/people/1/"
  }
  ]

  const mockSpecies = [
    {
      "name": "Ewok",
      "classification": "mammal",
      "designation": "sentient",
      "average_height": "100",
      "skin_colors": "brown",
      "hair_colors": "white, brown, black",
      "eye_colors": "orange, brown",
      "average_lifespan": "unknown",
      "homeworld": "https://swapi.co/api/planets/7/",
      "language": "Ewokese",
      "people": [
          "https://swapi.co/api/people/30/"
      ],
      "films": [
          "https://swapi.co/api/films/3/"
      ],
      "created": "2014-12-18T11:22:00.285000Z",
      "edited": "2014-12-20T21:36:42.155000Z",
      "url": "https://swapi.co/api/species/9/"
  }
  ]

 window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    ok: true,
    status: 200,
    json: () => Promise.resolve(mockSpecies)
  }));
    


  describe ("getAllVehicles", () => {
    it("should return data for vehicles", () => {
      const vehiclesData = Helpers.getAllVehicles(mockVehicleData);
      expect(vehiclesData).toEqual(returnedMockVehicleData)
    })
  })

  describe ("getSpeciesForPeople", () => {
    let mockPeople;

    beforeEach(() => {
      mockPeople = [{
    
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "19BBY",
        "gender": "male",
        "homeworld": "https://swapi.co/api/planets/1/",
        "films": [
            "https://swapi.co/api/films/2/",
            "https://swapi.co/api/films/6/",
            "https://swapi.co/api/films/3/",
            "https://swapi.co/api/films/1/",
            "https://swapi.co/api/films/7/"
        ],
        "species": [
            "https://swapi.co/api/species/1/"
        ],
        "vehicles": [
            "https://swapi.co/api/vehicles/14/",
            "https://swapi.co/api/vehicles/30/"
        ],
        "starships": [
            "https://swapi.co/api/starships/12/",
            "https://swapi.co/api/starships/22/"
        ],
        "created": "2014-12-09T13:50:51.644000Z",
        "edited": "2014-12-20T21:17:56.891000Z",
        "url": "https://swapi.co/api/people/1/"
    }
    ]
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(mockSpecies)
      }));
    })

    it("should be called with correct params", async  () => {
       
    
       const result = await Helpers.getSpeciesForPeople(mockPeople);
       expect(result).toHavebeenCalledWith()
       
    })
  })

  
})