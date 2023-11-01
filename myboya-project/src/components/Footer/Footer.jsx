import './Footer.css'
import fb from '../../assets/Icons/facebook.png'
import twitter from '../../assets/Icons/twitter.png'
import insta from '../../assets/Icons/instagram.png'
import mail from '../../assets/Icons/mail.png'
import myboya from '../../assets/Images/myboya-logo.png'
import FooterSocial from './FooterSocial'
import FooterContact from './FooterContact'

const Footer = () => {
  return(
    <footer className="footer-container footer-grid text-center align-center">
      <h2 className='footer__title'>MyB<span className='footer__title__o'>o</span>ya</h2>
      <img src={myboya} alt="MyBoya Logo." className='footer__logo' />
      <section className='footer__info align-center'>
        
        <FooterSocial
          fb={fb}
          x={twitter}
          insta={insta}
        />
        <FooterContact
          mail={mail}
        />
        <small className='footer__copy'>MyB<span className='footer__copy__span'>o</span>ya™ Santiago de Chile, 2023</small>
      </section>
    </footer>
  )
}

export default Footer