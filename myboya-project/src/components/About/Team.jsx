import { Link } from "react-router-dom"
import AboutBubble from "./AboutBubble"
import { team } from "./teamData"
export const Team = () => {
  console.log(team[0])
  return(
    <section className="team">
        <Link to={'/newgame'}>
        <h2 className="team__title">Nuestro equipo</h2>
        </Link>
        <div className="team-card__container">
        {
          team.map(person => <AboutBubble
            key={`${person.name} ${person.lastName}`}
            person={person}
            />
            )
        }
        </div>
      </section>
  )
}