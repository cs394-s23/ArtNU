
export function ChatOrder(props) {
    console.log("hi", props.data)
    let img = props.data[0]
    return (
        <div className = "chatOrder">
            <div className = "order-info">
                <h1>Order For: </h1>
                <div>
                    Piece of Art
                    ${props.data[2]}
                </div>
                
            </div>
            <div className = "img-container">
                <img src = {img}/>
            </div>
        </div>
    )
}