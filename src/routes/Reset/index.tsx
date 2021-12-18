import { useState } from "react";
import { Link } from "react-router-dom";

import { Card } from "../../components";
import { ResetForm } from "../../modules";

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
        <hr />
        <p>
          <Link to="/sign-in">Already have an account? Please sign in.</Link>
        </p>
        <p>
          <Link to="/sign-up">New here? Please sign up.</Link>
        </p>
      </Card>
    </div>
  )
}

export default ResetRoute;
