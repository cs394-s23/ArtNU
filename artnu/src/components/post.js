// CSS file

export function Post(props) {
    return (
        <div className="post"> 
            <div className="post-img-box">
                <img className='post-image' src={props.img}/>
                <p className = "post-price"> ${props.price} </p>
            </div>
            <span className = "post-info">
                <p> {props.author} </p>
                <div className="likes">
                    <p> # of likes: {props.likes} </p>
                    <button> like </button>
                </div>
            </span>
            <span className = "post-caption">
                {props.caption}
            </span>
        </div>
    )
}