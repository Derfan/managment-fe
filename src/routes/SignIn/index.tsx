import { SignInForm, OAuthForm } from "../../modules";
import { Card, Separator, LinksList } from "../../components";

export const SignInRoute = () => {
  return (
    <Card title="Sign in">
      <SignInForm />
      <Separator>OR</Separator>
      <OAuthForm />
      <Separator />
      <LinksList properties={['sign-up', 'reset']} />
    </Card>
  )
}

export default SignInRoute;
