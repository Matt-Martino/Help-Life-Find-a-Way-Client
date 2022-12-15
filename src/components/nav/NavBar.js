import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
  const navigate = useNavigate()
  return (
    <section className="navbar">
     
      {
        (localStorage.getItem("help_token") !== null) ?
          <section className="nav-item">
            
            <Link to="/" className="navbar-item">Home</Link>
            <Link to="/myPlants" className="navbar-item">My Plants</Link>
            <Link to="/newPlant" className="navbar-item">Add New Plant</Link>
            <Link to="/users" className="navbar-item">All Users</Link>
            <Link to="/available" className="navbar-item">Available Plants</Link>
            <Link to="/careTips" className="navbar-item">Care Tips</Link>
            
            <button className="nav-link fakeLink"
              onClick={() => {
                localStorage.removeItem("help_token")
                navigate('/login')
              }}
            >Logout</button>
          </section> :
          <>
            <div className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </div>
            <div className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </div>
          </>
      }        </section>
  )
}
