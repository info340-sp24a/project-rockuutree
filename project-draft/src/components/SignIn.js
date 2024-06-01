import React from 'react';
import { StyledFirebaseAuth } from 'react-firebaseui';
import { GoogleAuthProvider, EmailAuthProvider, getAuth } from 'firebase/auth';

const configObj = {
  signInOptions: [
    {
      provider: EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: true,
    },
    {
      provider: GoogleAuthProvider.PROVIDER_ID,
    },
  ],
  signInFlow: 'popup',
  callbacks: {
    signInSuccessWithAuthResult: () => {
      // Redirect to the homepage after successful sign-in
      return true;
    },
  },
  signInSuccessUrl: '/', // Specify the redirect URL after successful sign-in
  credentialHelper: 'none',
};

export default function SignInPage(props) {
  const currentUser = props.currentUser;

  const auth = getAuth();

  if (currentUser?.userId) {
    // Redirect to the homepage if the user is already signed in
    window.location.href = '/';
    return null;
  }

  return (
    <div className="card bg-light">
      <div className="container card-body">
        <StyledFirebaseAuth uiConfig={configObj} firebaseAuth={auth} />
      </div>
    </div>
  );
}