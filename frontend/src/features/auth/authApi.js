export const createUser = async(userData) =>{
    const response = await fetch('http://localhost:8080/users',{
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {'Content-Type': 'application/json'}
    })
    const data = await response.json()
    // have to hide password while working at backend
    return ({data})
}