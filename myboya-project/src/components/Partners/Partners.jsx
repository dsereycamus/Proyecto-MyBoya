import "./Partners.css";
import icon1 from "../../assets/IconsPartners/1.png";
import icon2 from "../../assets/IconsPartners/2.png";
import icon3 from "../../assets/IconsPartners/3.png";
import icon4 from "../../assets/IconsPartners/4.png";
import icon5 from "../../assets/IconsPartners/5.png";
import icon6 from "../../assets/IconsPartners/6.png";
import icon7 from "../../assets/IconsPartners/7.png";
import icon8 from "../../assets/IconsPartners/10.png";

const PartnersSection = () => {
  return (
    <section className="partners-section">
      <div className="row-partners">
        <h2 className="section-titlepartners">
          Nuestros Partners!batidora yaga & mackie
        </h2>
      </div>
      <div className="row-partners">
        <div className="column-partners">
          <div className="card-partners">
            <div className="img-partners">
              <img src={icon1} className="partner1" alt="partner1" />
            </div>
            <h3 className="subtitle-partners">Lorem ipsum</h3>
            <p className="text-partners">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className="column-partners">
          <div className="card-partners">
            <div className="img-partners">
              <img src={icon2} className="partner2" alt="partner2" />
            </div>
            <h3 className="subtitle-partners">Lorem ipsum</h3>
            <p className="text-partners">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className="column-partners">
          <div className="card-partners">
            <div className="img-partners">
              <img src={icon3} className="partner3" alt="partner3" />
            </div>
            <h3 className="subtitle-partners">Lorem ipsum</h3>
            <p className="text-partners">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className="column-partners">
          <div className="card-partners">
            <div className="img-partners">
              <img src={icon4} className="partner4" alt="partner4" />
            </div>
            <h3 className="subtitle-partners">Lorem ipsum</h3>
            <p className="text-partners">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className="column-partners">
          <div className="card-partners">
            <div className="img-partners">
              <img src={icon5} className="partner5" alt="partner5" />
            </div>
            <h3 className="subtitle-partners">Lorem ipsum</h3>
            <p className="text-partners">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className="column-partners">
          <div className="card-partners">
            <div className="img-partners">
              <img src={icon6} className="partner6" alt="partner6" />
            </div>
            <h3 className="subtitle-partners">Lorem ipsum</h3>
            <p className="text-partners">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className="column-partners">
          <div className="card-partners">
            <div className="img-partners">
              <img src={icon7} className="partner7" alt="partner7" />
            </div>
            <h3 className="subtitle-partners">Lorem ipsum</h3>
            <p className="text-partners">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className="column-partners">
          <div className="card-partners">
            <div className="img-partners">
              <img src={icon8} className="partner8" alt="partner8" />
            </div>
            <h3 className="subtitle-partners">Lorem ipsum</h3>
            <p className="text-partners">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
