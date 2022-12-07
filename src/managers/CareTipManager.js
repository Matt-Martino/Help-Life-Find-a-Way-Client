export const getAllCareTips = () => {
    return fetch("http://localhost:8000/careTips", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("help_token")}`
        }
    })
        .then(res => res.json())
    }