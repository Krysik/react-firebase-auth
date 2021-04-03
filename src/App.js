import initializeFirebase from './firebase';
import SignIn from './components/SignIn';

const App = () => {
  initializeFirebase();
  return (
    <div className="App">
      <SignIn />
    </div>
  );
}

export default App;
