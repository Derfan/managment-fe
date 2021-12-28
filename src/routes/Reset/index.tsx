import { useState } from "react";

import { Card, Separator } from "../../components";
import { ResetForm, LinksList } from "../../modules";
import * as cn from "./Reset.module.css";

export const ResetRoute = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const setSubmitted = () => setIsSubmitted(true);

  return (
    <Card title="Reset Password" className={cn.card}>
      {isSubmitted 
        ? <p>We send an email with innstructions. Please check your mail box.</p> 
        : <ResetForm setSubmitted={setSubmitted} />
      }
      <Separator />
      <LinksList properties={['sign-in', 'sign-up']} />
    </Card>
  )
}

export default ResetRoute;
