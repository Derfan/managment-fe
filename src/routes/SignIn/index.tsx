import { Link } from "react-router-dom";

import { SignInForm, OAuthForm } from "../../modules";
import { Card, Separator } from "../../components";

export const SignInRoute = () => {
  return (
    <Card title="Sign in">
      <SignInForm />
      <Separator>OR</Separator>
      <OAuthForm />
      <Separator />
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
