fetchData = async (url) => {
  const response = await fetch(url);
  return await response.json()
  // if (response.ok) {
  //   return response.json();
  // } else {
  //   throw Error(`Error fetching, ${response.status}`)
  // }
}

addPeople = async () => {
  let allPeople = [];
  const url = `https://swapi.co/api/people/`

  try {
    const peopleData = await this.fetchData(url);
    allPeople.push(...peopleData.results)
    const withHome = await this.addHomeworlds(allPeople);
    const people = await this.addSpecies(withHome);
    this.setState({ people })
  } catch (error) {
    this.setState({errorStatus: error})
  }
}

addHomeworlds = (people) => {
  const unresolvedPromises = people.map( async (person) =>{
    try {
      const homeworldData = await this.fetchData(person.homeworld);
      return ({
        ...person,
        homeworld: homeworldData.name,
        population: homeworldData.population
      })
    } catch (error){
      throw error
    }
  })
  return Promise.all(unresolvedPromises)
}

addSpecies = (people) => {
  const unresolvedPromises = people.map( async (person) => {
    if (person.species.length > 0) {
      try {
        const speciesData = await this.fetchData(person.species[0]);
        return ({
          name: person.name,
          homeworld: person.homeworld,
          population: person.population,
          species: speciesData.name,
          id: person.created,
          favorite: false
        })
      } catch (error) {
        throw (error)
      }

    } else {
      return ({
        name: person.name,
        homeworld: person.homeworld,
        population: person.population,
        species: 'unknown',
        id: person.created,
        favorite: false
      })
    }
  })
  return Promise.all(unresolvedPromises)
}

