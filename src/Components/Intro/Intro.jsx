import './Intro.scss'
import { Button } from 'react-bootstrap';

const Intro = () => {
    return (
        <div className="hero-image" id="intro">
            <div className="hero-text">
                <h1>Hi there.</h1>
                <h3>Looking for a UX Designer?</h3>
                <Button variant="success" href="#contact">Say Hello</Button>
            </div>
            <div className="chevron">
                <a href="#portfolio">
                    <img src="images/chevron-down.svg" alt="chevron" className="chevron-icon" width="50px" color='white' />
                </a>
            </div>
        </div>
    )
}

export default Intro;