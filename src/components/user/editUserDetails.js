import { useEffect, useState } from "react"
import { getCurrentUser, UpdateUserInfo } from "../../managers/UserManager"
import { useNavigate } from "react-router-dom"
import Axios from "axios"

export const EditUserDetails = () => {
    const navigate = useNavigate()
    const [selectedImage, setImage] = useState()
    const [savedImage, setSavedImage] = useState("")
    const [currentUser, setCurrentUser] = useState(
        {
            id: 0,
            bio: "",
            profile_image_url: ""

        })

    useEffect(() => {
        getCurrentUser()
            .then((theUser) => {
                setCurrentUser(theUser)
            })
    }, [])

    const changeUserState = (domEvent) => {
        const copy = { ...currentUser }
        copy[domEvent.target.id] = domEvent.target.value
        setCurrentUser(copy)
    }
    const saveImageClick = (event) => {
        event.preventDefault()

        uploadImage()
            .then((response) => { setSavedImage(response.data.url) })
    }

    const uploadImage = () => {
        const formData = new FormData()
        formData.append("file", selectedImage)
        formData.append("upload_preset", "shgfdsfhd")

        return Axios.post("https://api.cloudinary.com/v1_1/dm0vsswx2/image/upload", formData)
    }

    return <>
        <h1 className="title is-2 level-item">Your Profile</h1>
        <section className="columns is-3 is-centered">
            <div className="columns">
                <div className="card-content has-background-success">
                    <div className="columns">
                        <div className="media">
                            <div className="media-center">
                                <div className="box">
                                    <div className="container"></div>
                                    <h1 className="title is-2 level-item">Edit your profile details below</h1>
                                    <div className="field">
                                        <label className="label">Your Bio:</label>
                                        <div className="">
                                            <textarea
                                                className="textarea" rows="15
"
                                                type="text"
                                                id="bio"
                                                required
                                                autoFocus
                                                value={currentUser.bio}
                                                onChange={changeUserState} />
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <input className="btn btn-primary"
                                                type="file"
                                                onChange={(event) => {
                                                    setImage(event.target.files[0])
                                                }}>
                                            </input>
                                        </div>
                                        <div>
                                            <button className="btn btn-primary" onClick={(clickEvent) => { saveImageClick(clickEvent) }}
                                            >Upload Image</button>
                                        </div>
                                        <div className="field is-grouped">
                                            <div className="control">
                                                <button
                                                    type="submit"
                                                    onClick={(evt) => {
                                                        evt.preventDefault()
                                                        const updatedUserInfo = {
                                                            id: currentUser.id,
                                                            bio: currentUser.bio,
                                                            profile_image_url: savedImage

                                                        }
                                                        UpdateUserInfo(updatedUserInfo)
                                                    }}
                                                    className="button is-small is-success is-light is-outlined"
                                                >
                                                    Update your user information.
                                                </button>
                                            </div>
                                            <div className="control">
                                                <button className="button is-danger is-light"
                                                    onClick={() => navigate("/")}>Cancel</button>
                                            </div>
                                            <figure className="media-right">
                                                <p className="image is-64x64">
                                                    <img src={currentUser.profile_image_url}/>
                                                </p>
                                            </figure>
                                        </div>
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