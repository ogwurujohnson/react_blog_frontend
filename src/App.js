import React, { useState } from "react";
import Modal from "./pages/Modal";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  const [registerOpen, setRegisterOpen] = useState(true);
  const [loginOpen, setLoginOpen] = useState(false);

  const showModal = e => {
    if (e.target.id === "register") {
      setRegisterOpen(true);
    } else if (e.target.id === "login") {
      setLoginOpen(true);
    }
  };

  const handleControl = e => {
    if (registerOpen) {
      setRegisterOpen(false);
    } else if (loginOpen) {
      setLoginOpen(false);
    }
  };

  return (
    <div className="App">
      Welcome to our blog publishing platform
      <button onClick={showModal} id="register">
        Sign Up
      </button>
      <button onClick={showModal} id="login">
        Log In
      </button>
      {registerOpen && (
        <Modal handleControl={handleControl}>
          <Register />
        </Modal>
      )}
      {loginOpen && (
        <Modal handleControl={handleControl}>
          <Login />
        </Modal>
      )}
    </div>
  );
}

export default App;
