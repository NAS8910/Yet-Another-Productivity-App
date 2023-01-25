import React, { useState, useEffect } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import logo from "../Images/logo.jpg";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

function User() {
  //user info, get user details  (get user.id from this)
  const { user, logOut } = useUserAuth();
  console.log("Calling frm user " + user);

  // const [showuser, setShowuser] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });


  useEffect(() => {
    const getUser = async () => {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());

        const user = docSnap.data();
        // console.log(profile);

        setProfile({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        });
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    getUser();
  }, []);

  // const handleClick = async () => {
  //   console.log("get user clicked");
  //   setShowuser((prev) => !prev);
  //   getUser();
  // };
  // getUser();
  // getUser();

  return (
    <div className="user-info">
      <h5>
        welcome {profile.firstName} {profile.lastName} !
      </h5>

      {/* <div style={{ color: "white" }}>
          <button onClick={handleClick}>Myself</button>
          {showuser && (
            <div>
              <div style={{ border: "1px solid yellow" }}>
                <h2>
                  hi, i am {profile.firstName} {profile.lastName}
                </h2>
                <p>Contact: {profile.email}</p>
              </div>
            </div>
          )}
        </div> */}

      {/* <button onClick={handleLogout}>Logout</button> */}
    </div>
  );
}

export default User;
