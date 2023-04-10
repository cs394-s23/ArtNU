export function purchaseBox(props) {
    const user = props.user;
    return (
        <div>
            {popUpVisible && (
                <div className="popup">
                    <h3>Phone Number: {user.phone} </h3>
                    <h3>Phone Number: {user.phone} </h3>
                    <h3>Email: {user.email} </h3>
                </div>
            )}
        </div>
    )
}