import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = ({ token, setToken }) => {
  const navigate = useNavigate()
  return (
    <ul className="navbar">
     
      {
        (localStorage.getItem("help_token") !== null) ?
          <li className="nav-item">
            <>
            <Link to="/" className="navbar-item">Home</Link>
            <Link to="/myPlants" className="navbar-item">My Plants</Link>
            <Link to="/newPlant" className="navbar-item">Add New Plant</Link>
            <Link to="/users" className="navbar-item">All Users</Link>
            <Link to="/available" className="navbar-item">Available Plants</Link>
            <Link to="/createCareTip" className="navbar-item">Create Care Tip</Link>
            </>
            <button className="nav-link fakeLink"
              onClick={() => {
                localStorage.removeItem("help_token")
                navigate('/login')
              }}
            >Logout</button>
          </li> :
          <>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li>
          </>
      }        </ul>
  )
}
