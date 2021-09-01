import './Header.css';
import { Link } from 'react-router-dom'


export const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 ms-5 fw-bold fs-1">BIT BLOG</span>
                <div className="links">
                    <Link to="/"> Home </Link>
                    <Link to="/authors"> Authors </Link>
                    <Link to="/about"> About</Link>
                </div>
            </nav>
        </header>
    )
}
