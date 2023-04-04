// CSS file

export function Post(props) {
    return <div className="post"> 
            <img className='post-image' src={props.img}/>
            <p> {props.author} </p>
            <p> {props.price} </p>
            </div>
}