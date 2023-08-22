import React from 'react';
import './App.css';
import {LoginForm} from "./components/LoginForm/LoginForm";
import {SignUpForm} from "./components/SignUpForm/SignUpForm";

function App() {
  const handleSignUp = (formData: any) => {
    
    console.log(formData);
  };
  return (
    <div className="App">
      <header className="App-header">
        <LoginForm />
        <SignUpForm onSubmit={handleSignUp} /> {}
      </header>
    </div>
  );
}

export default App;
