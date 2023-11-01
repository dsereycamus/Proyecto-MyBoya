import './About.css'
import './Bubble.css'
import AboutBubble from './AboutBubble'
import bastian from '../../assets/AboutUs/bastian.png'
import catalina from '../../assets/AboutUs/cata.png'
import daniela from '../../assets/AboutUs/dani.png'
import david from '../../assets/AboutUs/david.png'
import tomas from '../../assets/AboutUs/tomas.png'
const About = () => {
    return(
        <section className='about-container'>
            <AboutBubble img={daniela} name='Daniela Serey' />
        </section>
    )
}
export default About