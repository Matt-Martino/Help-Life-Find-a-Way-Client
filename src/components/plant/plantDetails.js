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
        <section>

            <div className="level">
                <div className="columns level-item">
                    <div className="card column is-three-quarters">
                        <div className="card-content">
                            <div className="columns">
                                <div className="column">
                                    <div className="media">
                                        <div className="media-center">
                                            <div className="level-item">Username: {thePlant?.user?.username}</div>

                                            <img src={thePlant.plant_image} className="uploaded_image" />

                                            <span className="level-item">Plant name: {thePlant.plant_name}</span>

                                            <span className="level-item">New plant care: {thePlant.new_plant_care}</span>

                                            <span className="level-item">  {thePlant?.care_tips?.map(careTip => {
                                                return <div key={`careTip--${careTip.id}`}> Care Tip:  {careTip.plant_tip_label}</div>
                                            })}</span>

                                            <span className="level-item">  {thePlant?.plant_types?.map(plantType => {
                                                return <div key={`plantType--${plantType.id}`}> Plant type: {plantType.plant_type}</div>
                                            })}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                (thePlant?.user?.username == loggedInUsername)
                    ? <button
                        onClick={() => { navigate({ pathname: `/plants/${plantId}/edit` }) }}
                    > Edit plant details</button>
                    : ""
            }


        </section>
    </>
}