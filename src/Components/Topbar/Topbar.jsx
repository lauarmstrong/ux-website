import './Topbar.scss'
import { Dropdown } from 'react-bootstrap';

const Topbar = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left-side">
                    <a href="#intro" className="logo">logo.</a>
                </div>
                <div className="right-side">
                    <div className="topbar-links">
                        <a href="#portfolio">
                            <span>About</span>
                        </a>
                        <a href="#">
                            <span>Blog</span>
                        </a>
                        <a href="#contact">
                            <span>Contact</span>
                        </a>
                    </div>
                    <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                    <Dropdown>
                        {/* <Dropdown.Toggle id="dropdown-basic"> */}
                        {/* </Dropdown.Toggle> */}
                        <Dropdown.Menu>
                            <Dropdown.Item href="#portfolio">Portfolio</Dropdown.Item>
                            <Dropdown.Item href="#works">My Work</Dropdown.Item>
                            <Dropdown.Item href="#contact">Get in Touch</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </div>
    )
}

export default Topbar;