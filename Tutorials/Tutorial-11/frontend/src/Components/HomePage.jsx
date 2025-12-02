import { useLocation, Link } from "react-router-dom";

export default function HomePage() {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <h1>Home Page</h1>
      {/* <a href="/profile-page">Profile Page with Anchor</a> */}
      <br />
      <Link to="/login">Login</Link>
      <br />
      <Link to="/register">Register New User</Link>
    </div>
  );
}
