import { Link } from "react-router-dom"




export const AllPlantsSingleView = ({ id, username, plant_name, plant_image }) => {

    return <>
        <section>

            <div className="columns">
                <div className="column level">
                    <Link className="level-item" to={`/plants/${id}`} >{plant_name}</Link>
                
                    <div className="level-item">{username}</div>
                
                    <img src={plant_image}></img>
                    
                    <span className="level-item">{plant_name}</span>
                </div>
            </div>

        </section>
    </>
}