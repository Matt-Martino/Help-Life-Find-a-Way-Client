import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getSinglePlant } from "../../managers/PlantManager"



export const PlantDetails = () => {
    const { plantId } = useParams()
    const loggedInUsername = (localStorage.getItem("username"))
    const navigate = useNavigate()
    const [thePlant, getThePlant] = useState({})

    useEffect(() => {
        getSinglePlant(plantId).then((singlePlant) => {
            getThePlant(singlePlant)
        })
    }, [plantId])


    return <>
        <section className="columns is-3 is-centered">
                        <div className="card-content has-background-success">
                            <div className="columns">
                                <div className="media">
                                    <div className="media-center">
                                        <div className="box">
                                            <div className="box"><strong>Username:</strong>
                                                <div className="level-item">{thePlant?.user?.username}'s plant.</div>
                                            </div>
                                            <img src={thePlant.plant_image} className="uploaded_image" />
                                            <div className="box"><strong>Plant name:</strong>
                                                <span className="level-item">{thePlant.plant_name}</span>
                                            </div>
                                            <div className="box"><strong>New plant care:</strong>
                                                <span className="level-item"> {thePlant.new_plant_care}</span>
                                            </div>
                                            <div className="box"><strong> Care Tip:</strong>
                                                <span className="box">  {thePlant?.care_tips?.map(careTip => {
                                                    return <div key={`careTip--${careTip.id}`} className="box"> <em>{careTip.plant_tip_label}: </em>{careTip.description_of_tip}</div>
                                                })}</span>
                                            </div>
                                            <div > <strong>Plant types:</strong>
                                                <span className="box">  {thePlant?.plant_types?.map(plantType => {
                                                    return <div key={`plantType--${plantType.id}`} className="box"> {plantType.plant_type}</div>

                                                })}</span>
                                            </div>
                                            <div className="box">
                                                {
                                                    (thePlant?.user?.username == loggedInUsername)
                                                        ? <button className="button is-small is-success is-light is-outlined"
                                                            onClick={() => { navigate({ pathname: `/plants/${plantId}/edit` }) }}
                                                        > Click to edit {thePlant.plant_name}'s details</button>
                                                        : ""
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        </section>


    </>
}