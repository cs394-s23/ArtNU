import {Posts} from './posts.js';

export default function Explore()

{
  return (
    
    <div>
      <h1>Home</h1>
       {/* search bar + filters*/}
      <Posts/>
      <div className="nav">
        <button>
          Home
        </button>
        <button>
          Explore
        </button>
        <button>
          Com
        </button>
        <button>
          Profile
        </button>
      </div>
    </div>
  );
}