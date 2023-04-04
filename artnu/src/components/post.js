// CSS file

export function Post(props) {
    return <div className="post"> 
            <div className="header">
                <h3>{props.author}</h3>
                <h3> ${props.price} </h3>
            </div>
            <img src={props.img} width="300" height="300"/>
            <div className="info">
                <strong className="likes">{props.likes} likes</strong>
                <div className="caption">
                    <p>
                        <strong>{props.author} </strong>
                        {props.caption}
                    </p>
                </div>
            </div>
            
            </div>
}