import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import "./App.css";

function App() {
  const [user, setUser] = useState({});
  const handleCallbackResponsez = (response) => {
    // console.log("token ", response.credential);
    let userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  };
  const signOutHandle = (e) => {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  };
  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id:
        "685827706441-6gsel3e5uq4edb9qk9ui9nthf7bevjac.apps.googleusercontent.com",
      callback: handleCallbackResponsez,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
    google.accounts.id.prompt();
  }, []);
  return (
    <div className="App">
      <div id="signInDiv"></div>
      {user && (
        <div>
          <img src={user.picture} alt="" />
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      )}
      {Object.keys(user).length != 0 && (
        <button onClick={(e) => signOutHandle(e)}>Sign Out</button>
      )}
    </div>
  );
}

export default App;
// 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
// 685827706441-6gsel3e5uq4edb9qk9ui9nthf7bevjac.apps.googleusercontent.com
