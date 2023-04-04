// CSS file

export function Post(props) {
    return <div className="post"> 
            <div className = "post-header">
                should we have a title here or smth
            </div>
            <img className='post-image' src={props.img}/>
            <div className = "post-icons">
                icons go here
            </div>
            <div className = "post-info">
                <p> {props.author} </p>
                <p> ${props.price} </p>
                <p> likes: {props.likes} </p>
            </div>
            </div>
}