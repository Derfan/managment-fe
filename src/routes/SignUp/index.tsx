import { SignUpForm, OAuthForm, LinksList } from "../../modules";
import { Card, Separator } from "../../components";
import * as cn from "./SignUp.module.css";

export const SignUpRoute = () => {
  return (
    <Card title="Sign Up" className={cn.card}>
      <SignUpForm />
      <Separator>OR</Separator>
      <OAuthForm />
      <Separator />
      <LinksList properties={['sign-in', 'reset']} />
    </Card>
  )
}

export default SignUpRoute;
