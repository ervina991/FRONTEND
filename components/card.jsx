const Card = (props) => {

    return (

        <div className="card">
            <img src={props.img} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{props.tittlecard}</h5>
                <p className="card-text" style={{ textAlign: "justify" }}>
                    {props.isicard}
                </p>
            </div>
        </div>

    );

}

export default Card;