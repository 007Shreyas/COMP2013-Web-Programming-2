import { Link } from "react-router-dom";

export default function PrivatePage() {
  return (
    <div>
      <h1>Secret Page</h1>
      <Link to={"/"}>Back to Home</Link>
    </div>
  );
}
