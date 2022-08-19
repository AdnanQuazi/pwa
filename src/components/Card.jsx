const Card = ({image , selected , onClick}) => {
    return (
        <div className="card" onClick={onClick}>
            <div className={selected && "selected"}>
                <img alt="" src={image} className="card-face" />
                <img 
                    alt=""
                    className="card-back"
                    src="/assets/logo.png"
                />
            </div>
        </div>
    )
}

export default Card