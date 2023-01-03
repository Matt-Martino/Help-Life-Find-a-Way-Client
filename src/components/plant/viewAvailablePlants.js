import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { AdoptThisPlant, getAvailablePlants } from "../../managers/PlantManager"


export const AvailablePlants = () => {
    const [availablePlants, setAvailablePlants] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        getAvailablePlants().then((plantData) => setAvailablePlants(plantData))

    }, [])



    const adoptPlantButton = (plant) => {
        return <>
            <button className="button is-small is-success is-light is-outlined"
                onClick={() => { AdoptThisPlant(plant).then(navigate("/myPlants")) }}
            >Adopt this available plant and add it to your collection.
            </button>
        </>
    }



    return <>
        <h1 className="title is-1 level-item">Current available plants</h1>
        {availablePlants.map((plant) =>
            <section key={`plants--${plant.id}`} className="columns is-3 is-centered">
                <div className="card-content has-background-success">
                    <div className="columns">
                        <div className="media">
                            <div className="media-center">
                                <div className="box"><strong>{plant?.user?.username}'s</strong>
                                    <div className="box">
                                        <div className="button is-small is-success is-light is-outlined">
                                            <Link to={`/plants/${plant.id}`}>
                                                available plant named: <em>{plant.plant_name}</em>. Click to view plant's details.
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="uploaded_image">
                                                <img src={plant.plant_image}></img>
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="box">
                                        <div className="box">
                                            <div className="box"><strong>New plant Care instructions: </strong>
                                                <span className="box">{plant.new_plant_care}</span>
                                            </div>
                                            <div>
                                                {adoptPlantButton(plant)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        )}
    </>
}