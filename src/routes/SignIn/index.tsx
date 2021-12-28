import { SignInForm, OAuthForm, LinksList } from "../../modules";
import { Card, Separator } from "../../components";
import * as cn from "./SignIn.module.css";

export const SignInRoute = () => {
  return (
    <Card title="Sign in" className={cn.card}>
      <SignInForm />
      <Separator>OR</Separator>
      <OAuthForm />
      <Separator />
      <LinksList properties={['sign-up', 'reset']} />
    </Card>
  )
}

export default SignInRoute;
