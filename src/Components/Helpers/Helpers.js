
import FetchApi from '../MainFetch/MainFetch';


export const getSpeciesForPeople =  (people) => {
        const getSpecies = people.map(async (person) => {
            const species = await FetchApi(person.species)
            return ( {
            ...person,
            name: person.name,
            species: species.name,
            language: species.language,
        })
    })
    return Promise.all(getSpecies)
  }
  
export const getHomeWorld = (people) => {
        const getHome = people.map( async (person) => {
        const home = await FetchApi(person.homeworld)
        return ({
          name: person.name,
          species: person.species,
          language: person.language,
          homeworld: home.name,
          population: home.population,
          favorite: false,
          category: "people"
        })
      })
        return Promise.all(getHome)
      }


export const getResidents = async (planet) => {
     const allResidents = planet.map(async (eachPlanet) => {
        if(eachPlanet.residents.length > 0){
           const allResidentsData = await fetchResidentsApi(eachPlanet.residents)
           return ({
               name: eachPlanet.name,
               terrain: eachPlanet.terrain,
               population: eachPlanet.population,
               climate: eachPlanet.climate,
               residents: allResidentsData,
               favorite: false,
               category: "planets"
           })
        } 
        else {
            return ({
                name: eachPlanet.name,
               terrain: eachPlanet.terrain,
               population: eachPlanet.population,
               climate: eachPlanet.climate,
               favorite: false,
               category: "planets"
            })
        }
    })
    return Promise.all(allResidents)
    
}

export const fetchResidentsApi = async (url) => {
    const response = url.map( async (ind) => {
        const data = await FetchApi(ind);
        return data.name;
    })
    return Promise.all(response)  
}

export const getAllVehicles =  (data) => {
     const vehiclesData = data.map((vehicle) => {
        return ({
            name: vehicle.name,
            model: vehicle.model,
            class: vehicle.vehicle_class,
            passenger: vehicle.passengers, 
            favorite: false,
            category: "vehicles"

        })
    })
    return vehiclesData;
}

export const getMoviesText = (data) => {
    
    return data.map((eachData) => {
        return eachData.opening_crawl;
    })
}
            




    
    






    
            

            
      

    



      
        
        
        
    
