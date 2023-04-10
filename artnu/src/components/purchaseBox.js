export function PurchaseBox(props) {
    const user = props.user;
    console.log("CHILD", props.popUpVisible)
    return (
        <div>
            {!props.popUpVisible && (
                <div className="popup">
                    <h3>Phone Number: {user.phone} </h3>
                    <h3>Phone Number: {user.phone} </h3>
                    <h3>Email: {user.email} </h3>
                </div>
            )}
        </div>
    )
}