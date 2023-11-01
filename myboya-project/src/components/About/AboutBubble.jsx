const AboutBubble = ({img, name}) => {
    return(
        <div className="bubble">
            <img src={img} alt={name} />
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}
export default AboutBubble