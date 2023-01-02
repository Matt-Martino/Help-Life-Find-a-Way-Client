import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
  const navigate = useNavigate()
  return (
    <nav className="navbar is-success " role="navigation" aria-label="main navigation">

      <a className="navbar-item py-4 px-5" href="https://bulma.io">
        <img src="http://res.cloudinary.com/dm0vsswx2/image/upload/v1672432083/logo_wakori.png" width="50" height="100"></img>
      </a>
      {
        (localStorage.getItem("help_token") !== null) ?
          <div className="navbar-menu">
            <div className="navbar-start">
              <Link to="/" className="navbar-item">Home</Link>
            </div>
            <div className="navbar-item">
              <Link to="/myPlants" className="navbar-item">My Plants</Link>
            </div>
            <div className="navbar-item">
              <Link to="/newPlant" className="navbar-item">Add New Plant</Link>
            </div>
            <div className="navbar-item">
              <Link to="/users" className="navbar-item">All Users</Link>
            </div>
            <div className="navbar-item">
              <Link to="/plants/available" className="navbar-item">Available Plants</Link>
            </div>
            <div className="navbar-item">
              <Link to="/careTips" className="navbar-item">Care Tips</Link>
            </div>
            <div className="navbar-end">
              <button className="navbar is-dark"
                onClick={() => {
                  localStorage.removeItem("help_token")
                  navigate('/login')
                }}
              >Logout</button>
            </div>
          </div> :
          <>
            <div className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </div>
            <div className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </div>
          </>
      }

    </nav>
  )
}
