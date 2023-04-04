// CSS file

export function Post(props) {
    return (
    <div className="post"> 
        <div className="header">
            <h3>{props.title}</h3>
        </div>
        <div className = "post-image-box">
            <img className="post-image" src={props.img} width="300" height="300"/>
            <div className = "post-price-box">
                <p className = "post-price"> ${props.price} </p>
            </div>
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