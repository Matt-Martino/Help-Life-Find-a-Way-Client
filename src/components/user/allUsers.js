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
          allUsers.map(user =>
            { return (
                <section key={`user--${user.id}`}>

                <div>
                  <div className="level">
                    <div className="columns level-item">
                      <div className="card column is-three-quarters">
                        <div className="card-image">
                        </div>
                        <div className="card-content">
                          <div className="columns">
                            <div className="column"> User {user.full_name}'s has {user.plant_count} plants in their collection.
                              <div className="media">
                              </div>
                            </div>
                            <div className="column"> Bio: {user.bio}
                              <div className="content">
                                <div className="title is-5">
                                  <Link to={`/plants/user/${user.id}`} > View {user?.user?.username} plant collection.
                                  </Link>
                                  
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                </section>
            )
           }
          )
        }
      </>
    )
      
}