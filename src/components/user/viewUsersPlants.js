import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { getPlantsByUserId } from "../../managers/PlantManager"
import { getUserById } from "../../managers/UserManager"



export const ViewSpecificUsersPlants = () => {
    const { userId } = useParams()
    const [userPlants, setUserPlants] = useState([])
    const [selectedUser, setUser] = useState({})

    useEffect(() => {
        getPlantsByUserId(userId).then((userPlants) => {
            setUserPlants(userPlants)
        })
    }, [userId])

    useEffect(() => {
        getUserById(userId).then((user) => {
            setUser(user)
        })
    }, [userId])




    return (
        <>
            <h1 className="title is-3 level-item">{selectedUser?.user?.username}'s Plant collection</h1>
            {
                userPlants.map(plant =>
                    userPlants.length > 0
                        ? <section key={`plant--${plant.id}`} className="columns is-3 is-centered">
                            <div className="card-content has-background-success">
                                <div className="columns">
                                    <div className="media">
                                        <div className="media-center">
                                            <div className="box">
                                                <div className="box">Expand plant details:
                                                    <Link className="level-item" to={`/plants/${plant.id}`}>
                                                        {plant.plant_name}.
                                                    </Link>
                                                </div>


                                                <div className="box"><strong>Plant name: </strong>
                                                    <span> {plant.plant_name}</span>
                                                </div>

                                                <div className="card ">
                                                    <div className="card-image">
                                                        <figure className="uploaded_image">
                                                            <img src={plant.plant_image} />
                                                        </figure>
                                                    </div>
                                                </div>


                                                <div className="column level">


                                                    <div className="box"><strong>New plant care: </strong>
                                                        <span>{plant.new_plant_care}</span>
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
                        </section>

                        : <> <h1 className="title">User has no plants.</h1>
                        </>
                )
            }
        </>
    )
}