//use get to grab whatever dataType (users/ingredients/recipes)
async function getData(dataType) {
    try {
        const response = await fetch(`http://localhost:3001/api/v1/${dataType}`)
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

// use post to modify ingredients 
async function postData(userId, ingredientId, amount) {
    try {
        const settings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                userID: userId, 
                ingredientID: ingredientId, 
                ingredientModification: amount
            })
        }
        const response = await fetch('http://localhost:3001/api/v1/users', settings)
        return response.json()
    } catch (error) {
        console.log(error)
    }  
}