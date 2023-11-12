import { Link } from 'react-router-dom';
import './styles.css';

export default function NotFoundPage() {
  return (
    <>
      <div className="notFoundContainer">
        <div>
          <h1 className="notFoundCode">404</h1>
          <p className="notFoundText">
            Ooops, page not found! Ask Slowpoke for help.
          </p>
        </div>
        <Link to="/">
          <img
            src="/src/assets/slowpoke.png"
            alt="slowpokeImg"
            className="notFoundImg"
          />
        </Link>
      </div>
    </>
  );
}
