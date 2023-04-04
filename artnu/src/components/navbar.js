import { PostCommission } from "./postCommission";

export function Navbar() {
    return (
        <div className="nav">
            <button>
                Home
            </button>
            <button>
                Explore
            </button>
            <button className="commission" onClick={() => document.getElementsByClassName("newCommission")[0].innerHTML = <PostCommission/>}>
                Com
            </button>
            <button>
                Profile
            </button>
      </div>
    )
}