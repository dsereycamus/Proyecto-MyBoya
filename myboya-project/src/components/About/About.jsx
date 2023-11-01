import './About.css'
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
            <AboutBubble img={bastian} name='Bastián Ulloa' />
            <AboutBubble img={catalina} name='Catalina Urzúa' />
            <AboutBubble img={tomas} name='Tomás Díaz' />
            <AboutBubble img={david} name='David Sáez' />
        </section>
    )
}
export default About