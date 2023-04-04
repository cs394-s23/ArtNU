import {Posts} from './posts.js';
import {Navbar} from './navbar.js'
import {Filters} from './filters.js'

export default function Explore() {
  return (
    
    <div>
      <h1>Home</h1>
       {/* search bar + filters*/}
       
      <Posts/>
      <Navbar/>
    </div>
  );
}