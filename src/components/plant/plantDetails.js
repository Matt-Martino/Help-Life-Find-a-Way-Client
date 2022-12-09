import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getSinglePlant } from "../../managers/PlantManager"



export const PlantDetails = () => {
    const { plantId } = useParams()
    const navigate = useNavigate()
    const [thePlant, getThePlant] = useState({})

    useEffect(() => {
        getSinglePlant(plantId).then((singlePlant) => {
            getThePlant(singlePlant)
        })
    }, [plantId])


    return <>
        <section>

            <div className="columns">
                <div className="column level">
                    <div className="level-item">Username:{thePlant?.user?.username}</div>
                </div>
                <div className="column level">
                    <div className="level-item">Plant pic:{thePlant.plant_image}</div>
                </div>
                <div className="column level">
                    <span className="level-item">Plant name:{thePlant.plant_name}</span>
                </div>
                <div className="column level">
                    <span className="level-item">New plant care:{thePlant.new_plant_care}</span>
                </div>

                <div className="column level">
                    <span className="level-item">Care tips:{thePlant?.care_tips?.map(careTip => {
                        return <div> Care Tip:{careTip.plant_tip_label}</div>
                    })}</span>
                </div>

                <div className="column level">
                    <span className="level-item">Plant types:{thePlant?.plant_types?.map(plantTypes => {
                        return <div> Plant type: {plantTypes.plant_type}</div>
                    })}</span>
                </div>
            </div>
            <button
                onClick={() => { navigate({ pathname: `/plants/${plantId}/edit` }) }}
            > Edit plant details</button>


        </section>
    </>
}