import React from 'react'

const fetchAllProducts = async() => {
    const response = await fetch('http://localhost:8080/products')
    const data = response.json()
    return ({data})
}

export default fetchAllProducts