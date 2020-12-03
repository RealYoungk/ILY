import React, { useState } from "react";
import AuthForm from "../components/AuthForm";
import { authService, firebaseInstance } from "../fBase";

const Auth = () => {
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    }
    await authService.signInWithPopup(provider);
  };
  return (
    <div>
      <AuthForm />
      <div>
        <button onClick={onSocialClick} name="google">
          구글로 로그인
        </button>
      </div>
    </div>
  );
};

export default Auth;
