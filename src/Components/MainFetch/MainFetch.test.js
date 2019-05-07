import React from 'React';
import MainFetch from './MainFetch';
import { shallow } from 'enzyme';
import * as api from './MainFetch'; 

describe ("MainFetch", () => {
    let mockData;
    

  beforeEach(() => {
   
    mockData = {
      name: "Tatooine"
    }
    

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve(mockData),
    }));

  });
  
  it("fetch call takes expected url", () => {
    // setup
    const url = 'www.starwars.com'
    // execution
    api.FetchApi(url);
    // expectation
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it("fetch call returns expected data", async () => {
    // setup
    const url = 'www.starwars.com'
    // execution
    const result = await api.FetchApi(url)
    console.log(mockData, "mockData")
    expect(result).toEqual(mockData);
  });

  it("if response not ok show error", async () => {
    // setup
    const url = 'www.starwars.com';

    fetch = jest.fn().mockImplementationOnce(() => Promise.resolve({
      ok: false
    }));

    try {
      // execution
      await fetch(url)
      
    } catch (error) {
      // expectations
      expect(error.message).toBe('Response not ok')
    }
  });


})