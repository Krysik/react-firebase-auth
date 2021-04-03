import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};
const initializeFirebase = () => {
  console.log('initialize firebase function');
  if (firebase.apps.length === 0) {
    console.log('initializing firebase');
    firebase.initializeApp(firebaseConfig);
  }
}

export default initializeFirebase;

