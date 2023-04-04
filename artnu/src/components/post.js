// CSS file

export function Post(props) {
    return (
    <div className="post"> 
        <div className="header">
            <h3>{props.author}</h3>
        </div>
        <div className = "post-image-box">
            <img className="post-image" src={props.img} width="300" height="300"/>
            <p className = "post-price"> ${props.price} </p>
        </div>
            <div className = "sub-image">
                <span className = "info">
                    <p className = "author"> {props.author} </p>
                    <div className="likes">
                        <p> # of likes: {props.likes} </p>
                        <button> like </button>
                    </div>
                </span>
                <span className = "caption">
                        {props.caption}
                </span> 
            </div>
            
            
    </div>
    )
}