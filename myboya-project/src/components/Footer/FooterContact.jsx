const FooterContact = ({mail}) => {
  return (
    <>
      <p className="footer__info__title">Contacto</p>
      <address className="footer__adress flex-row-center align-center text-center">
        <a href="mailto:myboya@gmail.com" className="footer__adress__a">
          <img
            src={mail}
            alt="Icono de carta para el contacto."
            className="icon__social"
          />{" "}
          myboya@gmail.com
        </a>
      </address>
    </>
  );
};

export default FooterContact;
