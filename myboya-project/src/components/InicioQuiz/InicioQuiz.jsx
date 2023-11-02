
import "./InicioQuiz.css"
import foto_ranking from "../../assets/Icons/ranking.png"
import foto_insignia from "../../assets/Icons/insignia.png"



const InicioQuiz = () => {
return (
        <div className="container">
            <aside className="rank">
                <button className="ranking">Ranking <img src={foto_ranking} alt="icono del ranking" /></button>
                <button className="insignia">Consigue tu insignia<img src={foto_insignia} alt="icono de la insignia" /></button>
            </aside> 

            <section className="InicioQuiz">
                        <div>
                            <button className="btnplay">Play</button>
                        </div>
                        <div>
                            <button className="btnwho">¿Cómo Jugar?</button>
                        </div>
            </section> 


        </div>
    );
}

export default InicioQuiz;