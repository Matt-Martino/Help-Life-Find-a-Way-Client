import { Link } from "react-router-dom"


export const AllPlantsSingleView = ({ id, username, plant_name, plant_image }) => {

    return <>

        <section className="columns is-3 is-centered">
            <div className="card-content has-background-success">
                <div className="columns">
                    <div className="media">
                        <div className="media-center">
                            <div className="box">
                                <div>Learn more:
                                    <Link className="level-item" to={`/plants/${id}`} >{plant_name}</Link>
                                </div>
                                <div className="box"><strong>Owner of plant </strong>
                                    <div className="level-item">{username}</div>
                                </div>

                                <div className="card ">
                                    <div className="card-image">
                                        <figure className="uploaded_image">
                                            <img src={plant_image} />
                                        </figure>
                                    </div>
                                    <div className="box">
                                    <span className="level-item">This is {plant_name}</span>
                               </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </>
}