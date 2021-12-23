import { SignUpForm, OAuthForm, LinksList } from "../../modules";
import { Card, Separator } from "../../components";

export const SignUpRoute = () => {
  return (
    <Card title="Sign Up">
      <SignUpForm />
      <Separator>OR</Separator>
      <OAuthForm />
      <Separator />
      <LinksList properties={['sign-in', 'reset']} />
    </Card>
  )
}

export default SignUpRoute;
