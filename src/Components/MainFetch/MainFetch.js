import React, { Component } from 'react';

const FetchApi = async (url) => {
    try {
        const response = await fetch(url);
        return await response.json()
      } 
      catch (error){
        throw new Error(error.message)
    }
}
export default FetchApi;



