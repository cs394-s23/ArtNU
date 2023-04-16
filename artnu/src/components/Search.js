import user from './icons/user.png'
import paw from './icons/paw.png'
import {Navbar} from './navbar.js'
import SearchBar from "./SearchBar";


export default function Search() {
    
    return (
        <>
        <header>
          <div className="logo">
            <img src={paw}></img>
            <span>NU Art</span>
          </div>
          <span className="page-title">Explore</span>
            <a>
              <img src={user} class="user"></img>
            </a>
        </header>

        <main>
            <SearchBar/>
            <aside>
                <Navbar/>
            </aside>
        </main>
        </>
    );
}