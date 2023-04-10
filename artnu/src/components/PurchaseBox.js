

export function PurchaseBox(props) {
    const user = props.user;
    return (
        <div>
            {console.log(props.popUpVisible)}
            {props.popUpVisible && (
                <div className="popup">
                    <h3> {user.author} </h3>
                    <h3>Phone Number: {user.phone} </h3>
                    <h3>Email: {user.email} </h3>
                </div>
            )}
        </div>
    )
}