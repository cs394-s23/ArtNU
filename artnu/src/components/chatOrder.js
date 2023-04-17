
export function ChatOrder(props) {
    console.log("hi", props.img)
    if (props.img) {
        return (
            <div className = "chatOrder">
                <img src={props.img}/>
            </div>
        )
    }
}