import React from "react";
import SignInForm from "../components/SignInForm.jsx";

const SignInPage = () => {
  return (
    <div className="container" style={{paddingTop: "120px"}}>
      <h1>Sign In</h1>
      <SignInForm />
    </div>
  );
};

export default SignInPage;
