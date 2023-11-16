import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <img className="diglet" src="Diglet.png" alt=" " />
      <img className="background404" src="Decor404.jpg" alt=" " />
      <img className="img404" src="404img.png" alt=" " />
      <Link to="/hub">
        <button type="button" className="button404">
          Go back to home
        </button>
      </Link>
    </div>
  );
}
