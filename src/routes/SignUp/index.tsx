import { Link } from "react-router-dom";

import { Card } from "../../components";
import { SignUpForm } from "../../modules";

export const SignUpRoute = () => {
  return (
    <Card title="Sign Up">
      <SignUpForm />
      <hr />
      <p>
        <Link to="/sign-in">Already have an account? Please sign in.</Link>
      </p>
      <p>
        <Link to="/reset">Forget your password? Please reset.</Link>
      </p>
    </Card>
  )
}

export default SignUpRoute;
