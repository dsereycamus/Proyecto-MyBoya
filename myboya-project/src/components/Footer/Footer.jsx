import './Footer.css'

const Footer = () => {
  return(
    <footer className="footer-container">
      <h2 className='footer__title'>MyB<span className='footer__title__o'>o</span>ya</h2>
      <section className='footer__info'>
        <p className='footer__info__title'>Síguenos</p>
        <div>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
        </div>
        <p className='footer__info__title'>Contacto</p>
        <address className='footer__adress'>
          <a href="mailto:myboya@gmail.com" className='footer__adress__a'>
          <img src="" alt="Icono de carta para el contacto." /> myboya@gmail.com</a>
        </address>
        <small className='footer__copy'>MyBoya™ Santiago de Chile, 2023</small>
      </section>
    </footer>
  )
}

export default Footer