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
            <h1>Quienes somos</h1>
            <h2>Nuestra vision</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam enim, minus voluptates, fugit, iste hic animi sit officia corrupti aliquam unde sunt aspernatur? Sit sequi voluptatum accusamus consequuntur debitis nostrum.</p>
            <h2>Nuestra mision</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus amet id omnis magnam! Beatae rerum distinctio ipsam ullam magni tempora rem asperiores eos dolorum! Soluta minima tempore beatae placeat facere.</p>
            <h2>Nuestro equipo</h2>
            <AboutBubble img={daniela} name='Daniela Serey' />
        </section>
    )
}
export default About