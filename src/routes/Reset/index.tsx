import { useState } from "react";

import { Card, Separator } from "../../components";
import { ResetForm, LinksList } from "../../modules";

export const ResetRoute = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const setSubmitted = () => setIsSubmitted(true);

  return (
    <div>
      <Card title="Reset Password">
        {isSubmitted 
          ? <p>We send an email with innstructions. Please check your mail box.</p> 
          : <ResetForm setSubmitted={setSubmitted} />
        }
        <Separator />
        <LinksList properties={['sign-in', 'sign-up']} />
      </Card>
    </div>
  )
}

export default ResetRoute;
