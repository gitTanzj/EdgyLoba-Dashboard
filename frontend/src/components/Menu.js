import { Link } from "react-router-dom";


const Menu = () => {


    return (
    <div className="menu">
        <button>
            <Link to="/">Home</Link>
        </button>
        <button>
            <Link to="logs">Logs</Link>
        </button>
    </div>
    );
}
 
 
export default Menu;