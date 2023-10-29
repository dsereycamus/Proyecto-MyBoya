const FooterSocial = (props) => {
const {fb,x,insta} = props
  return (
    <div className="footer__social__container ">
      <p className='footer__info__title'>Síguenos</p>
      <div className="footer__social">
        <a href="">
          <img src={fb} alt="Icono de Facebook." className="icon__social" />
        </a>
        <a href="">
          <img src={insta} alt="" className="icon__social" />
        </a>
        <a href="">
          <img src={x} alt="" className="icon__social" />
        </a>
      </div>
    </div>
  );
};

export default FooterSocial;
