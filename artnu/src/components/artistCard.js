

export function ArtistCard(props) {

    return (
        //<Link to={`../ArtNU/${user.id}`}>{user.author}</Link>
        <>
            <div className="artistcard">
                <div className="card-header">
                    <h3 className="card-author"><a href={`../ArtNU/${props.uid}`}>{props.author}</a></h3>
                    <h3 className="card-major">{props.major != "null" ? props.major : ""}</h3>
                    
          
                </div>
                <div className="card-content">
                    <p>Hometown: {props.hometown != "null" ? props.hometown : ""}</p>
                    <p>Interests: {props.interests != "null" ? props.interests : ""}</p>
                </div>
            </div>
        </>
    )
}