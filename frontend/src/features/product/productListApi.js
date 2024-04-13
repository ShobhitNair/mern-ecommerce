import React from 'react'

export const fetchAllProducts = async() => {
    const response = await fetch('http://localhost:8080/products')
    const data = response.json()
    return ({data})
}

export const fetchAllFilteredProducts = async(filter) => {
    let queryString='';
    for (let key in filter){
        queryString = `${key}=${filter[key]}&`
    }
    console.log(queryString);
    const response = await fetch('http://localhost:8080/products?'+queryString)
    const data = response.json()
    return ({data})
}