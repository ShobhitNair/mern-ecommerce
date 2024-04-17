import React from 'react'

export const fetchAllProducts = async() => {
    const response = await fetch('http://localhost:8080/products')
    const data = response.json()
    return ({data})
}

export const fetchAllFilteredProducts = async(filter,pagination) => {
    let queryString='';
    for (let key in filter){
        queryString += `${key}=${filter[key]}&`
    }
    for (let key in pagination){
        queryString += `${key}=${pagination[key]}&`
    }
    console.log(queryString);
   
    const response = await fetch('http://localhost:8080/products?'+queryString)
    const data = await response.json()
    const totalItems = response.headers.get('X-Total-Count')
    console.log(totalItems);
    return ({data:{list:data,totalItems:+totalItems}})
}
export const fetchProductsById = async(id) => {
    const response = await fetch('http://localhost:8080/products/'+id)
    const data = response.json()
    return ({data})
}

export const fetchAllCategories = async() => {
    const response = await fetch('http://localhost:8080/category')
    const data = response.json()
    return ({data})
}

export const fetchAllBrands = async() => {
    const response = await fetch('http://localhost:8080/brands')
    const data = response.json()
    return ({data})
}