import { Link } from "react-router-dom";
import "./Navigator.css";

function Navigator() {
    return (
        <div className="navigator">
            <Link to="/films">Films</Link>
            <Link to="/chat">Chat</Link>
            <Link to="/listing">Listing</Link>
        </div>
    );
}

export default Navigator;
