import { Link, useParams } from "react-router-dom"



// This component is responsible for rendering the individual view for each post. Props are passed from the AllPosts component using object deconstruction.
export const AllPlantsSingleView = ({id, username, available, new_plant_care, plant_age, plant_name, plant_image, care_tips, plant_types}) => {
    // const {post_id} = useParams()
return <>
<section>

<div className="columns">
    <div className="column level">
    <Link className="level-item" to={`/plant/${id}`} >{}</Link>
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