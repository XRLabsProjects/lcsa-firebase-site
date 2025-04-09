import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar.jsx";

export default function PageNotFoundPage() {
  return (
    <>
      <Navbar />
      <h1>PAGE NOT FOUND</h1>
      <p>
        Sorry, this page either does not exist, or has not been created yet.
      </p>
      <Link to="/" target="_self" rel="">
        <p>Click here to return to homepage</p>
      </Link>
    </>
  );
}
