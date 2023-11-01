export const Bubble = ({img , name}) => {
  return(
    <>
    {
      img == false || name == false ? (
        <div className="bubble">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
      ) : (
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
    </>
  )
}