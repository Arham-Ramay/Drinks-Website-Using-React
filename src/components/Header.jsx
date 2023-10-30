import { Link } from "react-router-dom"
import {FaCocktail} from "react-icons/fa"
const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div className="container">
    <Link className="navbar-brand" to=""><FaCocktail color="yellow"/>&nbsp; Drinks Shop</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ms-auto" id="navbarNav">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="*">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="*">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="*">Help</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header