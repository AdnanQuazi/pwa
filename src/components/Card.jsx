const Card = ({image , selected , onClick , hint}) => {
    return (
        <div className="card" onClick={onClick}>
            <div className={selected && "selected"}>
                <img alt="" src={image} className="card-face" />
                <img 
                    alt=""
                    className={`card-back ${hint ? "hint" : ""}`}
                    src="/assets/logo.png"
                />
            </div>
        </div>
    )
}

export default Card