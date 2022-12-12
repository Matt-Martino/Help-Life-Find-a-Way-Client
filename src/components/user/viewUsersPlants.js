import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPlantsByUserId } from "../../managers/PlantManager"



export const ViewSpecificUsersPlants = () => {
    const { userId } = useParams()
    const [userPlants, setUserPlants] = useState([])

    useEffect(() => {
        getPlantsByUserId(userId).then((userPlants) => {
            setUserPlants(userPlants)
        })
    }, [userId])



    return (
        <>
            <h1 className="title is-1 level-item">Plants</h1>
            {
                userPlants.map(plant =>
                    userPlants.length > 0
                        ? <>
                            <div key={`plant--${plant.id}`}>
                                <div className="level">
                                    <div className="columns level-item">
                                        <div className="card column is-three-quarters">
                                            <div className="card-image">
                                            </div>
                                            <div className="card-content">
                                                <div className="columns">
                                                    <div className="column">
                                                        <div className="columns">
                                                            <div className="column level">
                                                                <span className="level-item">Plant name: {plant.plant_name}</span>
                                                            </div>
                                                            <div className="column level">
                                                                <div className="level-item">Plant pic: {plant.plant_image}</div>
                                                            </div>
                                                            <div className="column level">
                                                                <span className="level-item">New plant care: {plant.new_plant_care}</span>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div className="column">
                                                            <div className="content">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                            </>
                            : <> <h1 className="title">User has no plants.</h1>
                            </>
                            )
          }
                        </>
      )
            }