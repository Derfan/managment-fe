import { Link } from "react-router-dom";

import { SignUpForm, OAuthForm } from "../../modules";
import { Card, Separator } from "../../components";

export const SignUpRoute = () => {
  return (
    <Card title="Sign Up">
      <SignUpForm />
      <Separator>OR</Separator>
      <OAuthForm />
      <Separator />
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
