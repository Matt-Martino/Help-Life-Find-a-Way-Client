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

        <h1>Care tips and their descriptions</h1>

        <section className="section">
            <article className="tipList">
                <div style={{ margin: "0rem 3rem" }}>
                    {
                        allCareTips.map(careTip => {
                            return (
                                <>
                                    <div className="container">
                                        <div className="columns">
                                            <div className="column"> {careTip.plant_tip_label}</div>
                                            <div className="column"> {careTip.description_of_tip}</div>
                                        </div>
                                    </div>
                                </>
                            )
                        })

                    }
                </div >
            </article>
        </section>
    </>
}