import { onAuthStateChanged, updateCurrentUser } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import { auth } from "../../firebase";

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState({});

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // let { user } = useUserAuth();
  // console.log(user);

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
