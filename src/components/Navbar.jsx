import { Link } from 'react-router-dom'

function Navbar() {

    return (
        <div>

            <Link to="/">Home</Link>

            <Link to="/about">About</Link>

            <Link to="/about/portfolio">About: Portfolio</Link>

            <Link to="/about/bio">About: Bio</Link>

            <Link to="/contact">Contact</Link>

        </div>
    )

}

export default Navbars