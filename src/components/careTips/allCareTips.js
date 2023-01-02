import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAllCareTips } from "../../managers/CareTipManager"


export const ViewAllCareTips = () => {
    const navigate = useNavigate()
    const [allCareTips, setCareTips] = useState([])

    useEffect(() => {
        getAllCareTips().then((CareTipData) => setCareTips(CareTipData));
    }, []);


    return <>


        <h1 className="title is-1 level-item">Care tips and their descriptions</h1>
        <section className="columns is-3 is-centered">
            <div className="card-content has-background-success">
                <div className="columns">
                    <div className="media">
                        <div className="media-center">

                            <article className="tipList">
                                <div style={{ margin: "0rem 3rem" }} className="box">
                                    {
                                        allCareTips.map(careTip => {
                                            return (
                                                <div className="box" key={`careTip--${careTip.id}`}>
                                                    <div className="columns">
                                                        <div className="column"> {careTip.plant_tip_label}</div>
                                                        <div className="column"> {careTip.description_of_tip}</div>
                                                    </div>
                                                </div>


                                            )
                                        })

                                    }
                                </div >
                            </article>
                            <div className="">
                            <button className="button is-small is-success is-light is-outlined" onClick={() => navigate("/createCareTip")}>
                                Create a new care tip
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}