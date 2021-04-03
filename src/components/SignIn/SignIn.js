import { useEffect, useState } from 'react';
import firebase from 'firebase';
import FirebaseAuth from 'react-firebaseui/FirebaseAuth';

const SignIn = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    console.log('call effect');
    firebase.auth().onAuthStateChanged(
      (user) => {
        setUser(user);
        if (user) {
          setIsSignedIn(true);
        } else {
          setIsSignedIn(false);
        }
      }
    );
  }, [user]);
  const uiConfig = {
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    tosUrl: 'https://policies.google.com/terms?hl=en-US', // adjust to your preferences
    privacyPolicyUrl: 'https://policies.google.com/terms?hl=en-US', // adjust to your preferences,
    signInSuccessUrl: '/',
  }

  const logout = () => {
    firebase.auth().signOut().then(() => {
      setIsSignedIn(false);
    })
  }

  if (isSignedIn) {
    return (
      <div>
        <h1>Hi {user.displayName} !</h1>
        <button onClick={logout}>Sign out</button>
      </div>
    )
  }
  return (
    <div>
      <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  )
}

export default SignIn;
