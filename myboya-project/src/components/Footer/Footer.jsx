import './Footer.css'
import fb from '../../assets/Icons/facebook.png'
import twitter from '../../assets/Icons/twitter.png'
import insta from '../../assets/Icons/instagram.png'
import mail from '../../assets/Icons/mail.png'
import FooterSocial from './FooterSocial'
import FooterContact from './FooterContact'

const Footer = () => {
  return(
    <footer className="footer-container footer-grid text-center align-center">
      <h2 className='footer__title'>MyB<span className='footer__title__o'>o</span>ya</h2>
      <section className='footer__info align-center'>
        <p className='footer__info__title'>Síguenos</p>
        <FooterSocial
          fb={fb}
          x={twitter}
          insta={insta}
        />
        <FooterContact
          mail={mail}
        />
        <small className='footer__copy'>MyBoya™ Santiago de Chile, 2023</small>
      </section>
    </footer>
  )
}

export default Footer