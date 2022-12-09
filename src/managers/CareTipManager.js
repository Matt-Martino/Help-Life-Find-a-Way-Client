export const getAllCareTips = () => {
    return fetch("http://localhost:8000/careTips", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("help_token")}`
        }
    })
        .then(res => res.json())
    }

export const addNewCareTip = (careTip) => {
    return fetch("http://localhost:8000/careTips", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("help_token")}`
        },
        body: JSON.stringify(careTip)
        
    }).then(res => res.json())
    }

export const getAllCareTipsForOnePlant = (plantId) => {
    return fetch(`http://localhost:8000/careTips?plant=${plantId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("help_token")}`
        }
    })
        .then(res => res.json())
    }


export const getCareTipsForSpecificPlant = (plantId) => {
    return fetch(`http://localhost:8000/plantCareTips?plant=${plantId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("help_token")}`
        }
    })
        .then(res => res.json())
    }

export const deletePlantCareTip = (plantCareTipId) => {
    return fetch(`http://localhost:8000/plantCareTips/${plantCareTipId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("help_token")}`
        }
    })
    }