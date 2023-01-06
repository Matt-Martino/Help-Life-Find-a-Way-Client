import { Link } from "react-router-dom"


export const AllPlantsSingleView = ({ id, profilePic, userId, username, plant_name, plant_image }) => {

    return <>

        <section className="columns is-3 is-centered">
            <div className="card-content has-background-success">
                <div className="columns">
                    <div className="media">
                        <div className="media-center">
                            <div className="box">
                                <div>Learn more about:
                                    <Link className="level-item" to={`/plants/${id}`} >{plant_name}</Link>
                                </div>
                                <div className="box"><strong>Owner of plant </strong>
                                    <Link className="level-item" to={`/plants/user/${userId}`}>{username}
                                    </Link>
                                    <figure className="media-right">
                                        <p className="image is-64x64">
                                            <img src={profilePic} />
                                        </p>
                                    </figure>


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