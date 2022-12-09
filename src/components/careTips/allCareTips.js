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

        <button onClick={() => navigate("/createCareTip")}>
            Create a new care tip
        </button>

        <div style={{ margin: "0rem 3rem" }}>
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <h1>Care tips and their descriptions</h1>
                            <section className="section">
                                <article className="tipList">
                                    {
                                        allCareTips.map(careTip => {
                                            return (
                                                <>
                                                    <div className="container">
                                                        <div className="columns">
                                                            <div className="column"></div>
                                                            <div> {careTip.plant_tip_label}</div>
                                                            <div> {careTip.description_of_tip}</div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })

                                    }
                                </article>
                            </section>
                        </div>
                    </div>
                </div>
            </section >

        </div >
    </>

}