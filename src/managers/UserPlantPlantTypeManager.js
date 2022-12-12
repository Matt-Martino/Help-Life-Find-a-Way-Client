export const deletePlantType = (plantTypeId) => {
    return fetch(`http://localhost:8000/userPlantPlantTypes/${plantTypeId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("help_token")}`
        }
    })
    }

export const getPlantTypesForSpecificPlant = (plantId) => {
    return fetch(`http://localhost:8000/userPlantPlantTypes?plant=${plantId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("help_token")}`
        }
    })
        .then(res => res.json())
    }

export const addNewUserPlantPlantTypes = (PlantTypeToAPI) => {
    return fetch("http://localhost:8000/userPlantPlantTypes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("help_token")}`
        },
        body: JSON.stringify(PlantTypeToAPI)
        
    }).then(res => res.json())
    }