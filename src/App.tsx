import "./App.css";
import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "./firebase/config";
import Login from "./components/Login";
import Welcome from "./components/Welcome";

function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return <div>{user ? <Welcome user={user} /> : <Login />}</div>;
}

export default App;
