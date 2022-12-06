import { useEffect, useState } from "react"
import { getPlantsByUserId } from "../../managers/PlantManager"



export const ViewMyPlants = ({token}) => {
    const [plants, setPlants] = useState([])

    useEffect(() => {
        getPlantsByUserId(token).then((plantData) => setPlants(plantData))

    }, [])

}