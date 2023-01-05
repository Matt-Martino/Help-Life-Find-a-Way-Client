import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllUsers } from "../../managers/UserManager"



export const ViewAllUsers = () => {
  const [allUsers, setAllUsers] = useState([])

  useEffect(() => {
    getAllUsers().then((userData) => setAllUsers(userData))

  }, [])



  return (
    <>
      <h1 className="title is-1 level-item">All users</h1>
      {
        allUsers.map(user => {
          return (
            <section className="columns is-max-desktop is-centered" key={`user--${user.id}`}>
              <div className="card-content has-background-success">
                <div className="columns">
                  <div className="column">
                    <div className="media">
                      <div className="media-center">
                        <div className="box">
                          <div className="block">
                                <figure className="media-right">
                                  <p className="image is-64x64">
                                    <img src={user.profile_image_url} />
                                  </p>
                                </figure>
                            <div className="button is-small is-success is-light is-outlined">
                              <div className="title is-5">
                                <Link to={`/plants/user/${user.id}`} > View {user?.user?.username}'s entire collection of plants.
                                </Link>
                              </div>
                            </div>
                            <div className="box"> <strong>Bio: </strong>
                              <p className="box">{user.bio}
                              </p>
                              <p>
                                <strong>{user.full_name}</strong> has <strong>{user.total_plant_count}</strong> plants in their collection.  <strong>{user.available_plant_count}</strong> are available to claim!
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        }
        )
      }
    </>
  )

}