export function PurchaseBox(props) {
    const user = props.user;
    const { popUpVisible, togglePopUp } = props;
  
    return (
      <div className={popUpVisible ? "popup-visible" : "popup-hidden"}>
        <button className="close-btn" onClick={togglePopUp}>
          Close
        </button>
        <h2>Contact Information</h2>
        <ul>
          <li>
            <strong>Name:</strong> {user.author}
          </li>
          <li>
            <strong>Phone:</strong> {user.phone}
          </li>
          <li>
            <strong>Email:</strong> {user.email}
          </li>
        </ul>
      </div>
    );
  }
  