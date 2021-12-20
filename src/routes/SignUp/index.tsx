import { Link } from "react-router-dom";

import { SignUpForm, OAuthForm } from "../../modules";
import { Card } from "../../components";

export const SignUpRoute = () => {
  return (
    <Card title="Sign Up">
      <SignUpForm />
      <hr />
      <OAuthForm />
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
