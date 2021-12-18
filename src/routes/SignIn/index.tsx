import { Link } from "react-router-dom";

import { Card } from "../../components";
import { SignInForm } from "../../modules";

export const SignInRoute = () => {
  return (
    <Card title="Sign in">
      <SignInForm />
      <hr />
      <p>
        <Link to="/sign-up">New here? Please sign up.</Link>
      </p>
      <p>
        <Link to="/reset">Forget your password? Please reset.</Link>
      </p>
    </Card>
  )
}

export default SignInRoute;
