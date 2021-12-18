import { Link } from "react-router-dom";

export const HomeRoute = () => {
  return (
    <>
      <p><Link to="/sign-in">Sign In</Link></p>
      <p><Link to="/sign-up">Sign Up</Link></p>
    </>
  )
}

export default HomeRoute;
