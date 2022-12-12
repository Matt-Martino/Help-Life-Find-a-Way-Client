import { Link } from "react-router-dom"




export const AllPlantsSingleView = ({ id, username, available, new_plant_care, plant_age, plant_name, plant_image, care_tips, plant_types }) => {

    return <>
        <section>

            <div className="columns">
                <div className="column level">
                    <Link className="level-item" to={`/plants/${id}`} >{plant_name}</Link>
                </div>
                <div className="column level">
                    <div className="level-item">{username}</div>
                </div>
                <div className="column level">
                    <div className="level-item">{plant_image}</div>
                </div>
                <div className="column level">
                    <span className="level-item">{plant_name}</span>
                </div>
            </div>

        </section>
    </>
}