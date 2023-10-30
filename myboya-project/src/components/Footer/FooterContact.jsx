const FooterContact = ({mail}) => {
  return (
    <div className="footer__social__container footer__contact__container">
      <p className="footer__info__title">Contacto</p>
      <address className="footer__adress">
        <a href="mailto:myboya@gmail.com" className="footer__adress__a">
          <img
            src={mail}
            alt="Icono de carta para el contacto."
            className="icon__social"
          />{" "}
          myboya@gmail.com
        </a>
      </address>
    </div>
  );
};

export default FooterContact;
